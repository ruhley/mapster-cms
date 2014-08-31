App.ApplicationRoute = Ember.Route.extend({
    model: function(params, transition) {
        return Em.RSVP.hash({
            entities: this.store.find('entity')
        }).then(function(hash) {
            for (route in transition.params) {
                if (transition.params.hasOwnProperty(route)) {
                    for (param in transition.params[route]) {
                        if (transition.params[route].hasOwnProperty(param)) {
                            if (param == 'entity') {
                                for (var i = hash.entities.content.length - 1; i >= 0; i--) {
                                    if (hash.entities.content[i].get('url') == transition.params[route][param]) {
                                        hash.entity = hash.entities.content[i];
                                        break;
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
    }
});
