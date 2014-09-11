App.EntityFieldMixin = Ember.Mixin.create({
    didInsertElement: function() {
        var _this = this,
            options = this.get('options');

        if (options) {
            this.set(options.variable, this.get('targetObject.store').find(options.model));

            Ember.$('#' + this.elementId + ' select').change(function() {
                _this.set('item.' + options.field, $(this).val());
            });
        }
    }
});
