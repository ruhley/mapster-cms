App.EntityInfoRoute = Ember.Route.extend(App.AfterModelMixin, {
    model: function(params, transition) {
        var _this = this;

        this.params = {
            entity: transition.params.entity.entity,
            id: params.id
        };

        if (this.params.entity) {
            if (this.params.id) {
                return Em.RSVP.hash({
                    item: this.store.find(this.params.entity, this.params.id),
                    versions: this.store.find(this.params.entity + '_version'),
                    fields: Ember.$.get(App.api.url + '/entity_fields/' + this.params.id)
                }).then(function(hash) {
                    return $.extend(true, hash, _this.modelFor('entity'));
                });

            } else {
                throw new Error('Id is required');
            }
        } else {
            throw new Error('Entity is required');
        }
    },
    actions: {
        createVersion: function() {
            var _this = this,
                item = this.controller.get('model.item');

            if (item.get('isDirty')) {
                var record = $.extend(true, {}, item._data, item._attributes, {
                        version_id: item._data.id,
                        id: null
                    }),
                    version = this.store.createRecord(this.params.entity + '_version', record);

                version.save().then(function() {
                    $('#version-list').DataTable().row.add(version).draw();
                });
            } else {
                alert('You have not entered any changes');
            }
        },
    }
});
