App.AfterModelMixin = Ember.Mixin.create({
    afterModel: function(model, transition) {
        for (route in transition.params) {
            if (transition.params.hasOwnProperty(route)) {
                for (param in transition.params[route]) {
                    if (transition.params[route].hasOwnProperty(param)) {
                        if (param == 'entity') {
                            for (var i = model.entities.content.length - 1; i >= 0; i--) {
                                if (model.entities.content[i].get('url') == transition.params[route][param]) {
                                    model.entity = model.entities.content[i];
                                    break;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
});
