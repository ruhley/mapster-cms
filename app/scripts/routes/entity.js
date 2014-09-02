App.EntityRoute = Ember.Route.extend({
    model: function(params) {
        var _this = this;

        if (params.entity) {
            return Em.RSVP.hash({
                items: this.store.find(params.entity)
            }).then(function(hash) {
                return $.extend(true, hash, _this.modelFor('application'));
            });
        } else {
            throw new Error('Entity is required');
        }
    }
});
