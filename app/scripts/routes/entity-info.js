App.EntityInfoRoute = Ember.Route.extend(App.AfterModelMixin, {
    model: function(params, transition) {
        var _this = this,
            baseModel = _this.modelFor('entity');

        this.params = {
            entity: transition.params.entity.entity,
            id: params.id
        };

        if (this.params.entity) {
            if (this.params.id) {
                if (this.params.id == 0) {
                    return Em.RSVP.hash({
                        item: this.store.createRecord(this.params.entity),
                        versions: [],
                        fields: Ember.$.get(App.api.url + '/mapster_entity_fields.json?order=sequence&contains=MapsterEntityFieldTypes&conditions=mapster_entity_id=' + baseModel.entity.get('id'))
                    }).then(function(hash) {
                        hash.fields = hash.fields.data;
                        return $.extend(true, hash, baseModel);
                    });
                } else {
                    return Em.RSVP.hash({
                        item: this.store.find(this.params.entity, this.params.id),
                        versions: this.store.find(this.params.entity + '_version'),
                        fields: Ember.$.get(App.api.url + '/mapster_entity_fields.json?order=sequence&contains=MapsterEntityFieldTypes&conditions=mapster_entity_id=' + baseModel.entity.get('id'))
                    }).then(function(hash) {
                        hash.fields = hash.fields.data;
                        return $.extend(true, hash, baseModel);
                    });
                }
            } else {
                throw new Error('Id is required');
            }
        } else {
            throw new Error('Entity is required');
        }
    },
    actions: {
        update: function() {
            var _this = this,
                item = this.controller.get('model.item');

            if (item.get('isDirty')) {
                item.save().then(function() {

                }, function() {
                    item.rollback();
                });
            } else {
                alert('You have not entered any changes');
            }
        },
        create: function() {
            var _this = this,
                item = this.controller.get('model.item');

            if (item.get('isDirty')) {
                item.save().then(function() {

                }, function() {
                    item.rollback();
                });
            } else {
                alert('You have not entered any changes');
            }
        }
    }
});
