App.EntityRoute = Ember.Route.extend({
    model: function(params) {
        if (params.entity) {
            return Em.RSVP.hash({
                    items: this.store.find(params.entity)
                })
                /*.then(function(hash) {
                for (var i = hash.entities.content.length - 1; i >= 0; i--) {
                    if (hash.entities.content[i].get('url') == params.entity) {
                        hash.entity = hash.entities.content[i];
                        break;
                    }
                }

                return hash;
            });*/
        } else {
            throw new Error('Entity is required');
        }
    }
});
