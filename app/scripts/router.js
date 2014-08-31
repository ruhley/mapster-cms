App.Router.map(function() {
    this.resource('entity', {
        path: '/:entity'
    }, function() {
        this.route('info', {
            path: '/:id'
        });
    });
});


App.Router.reopen({
    didTransition: function(infos) {
        this._super(infos);

        Ember.run.scheduleOnce('afterRender', this, function() {
            for (var i = 0; i < infos.length; i++) {
                if (Ember.$.isFunction(infos[i].handler.controller.afterRender)) {
                    console.info("Running afterRender for '" + infos[i].name + "'");
                    infos[i].handler.controller.afterRender();
                }
            }
        });
    }
});
