App.ApplicationRoute = Ember.Route.extend(App.AfterModelMixin, {
    model: function(params, transition) {
        return Em.RSVP.hash({
            entities: this.store.find('entity')
        });
    }
});
