App.IndexRoute = Ember.Route.extend({
    model: function(params, transition) {
        return this.modelFor('application');
    }
});
