App.EntityInfoRoute = Ember.Route.extend({
    model: function(params, transition) {
        var _this = this;

        this.params = {
            entity: transition.params.entity.entity,
            id: params.id
        };

        if (this.params.entity) {
            if (this.params.id) {
                return Em.RSVP.hash({
                        /*entities: this.store.find('entity', {
                        name: this.params.entity
                    }),*/
                        item: this.store.find(this.params.entity, this.params.id),
                        versions: this.store.find(this.params.entity + '_version')
                    })
                    /*.then(function(hash) {
                    for (var i = hash.entities.content.length - 1; i >= 0; i--) {
                        if (hash.entities.content[i].get('url') == _this.params.entity) {
                            hash.entity = hash.entities.content[i];
                            break;
                        }
                    }

                    return hash;
                });*/
            } else {
                throw new Error('Id is required');
            }
        } else {
            throw new Error('Entity is required');
        }
    },
    actions: {
        createVersion: function() {
            var version = this.store.createRecord(this.params.entity + '_version', this.controller.get('model.item._data'));

            version.save();
        },
    }
});
