import Ember from "ember";

export default Ember.Mixin.create({
    didInsertElement: function() {
        var _this = this,
            options = this.get('options');

        this.set('prompt', 'Loading ' + options.loading + '...');

        if (options) {
            this.set('prompt', 'Please select a ' + options.prompt);
            this.set('value', this.get('item.' + options.field) + '');

            this.set(options.variable, this.get('targetObject.store').find(options.model));

            Ember.$('#' + this.elementId + ' select').change(function() {
                _this.set('item.' + options.field, Ember.$(this).val());
            });
        }
    }
});
