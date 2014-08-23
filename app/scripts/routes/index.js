App.IndexRoute = Ember.Route.extend({
    model: function(params) {
        this.store.get('Entity')
    }
});
