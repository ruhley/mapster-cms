import Ember from "ember";
import $ from "jquery";
import AfterModelMixin from "../mixins/after-model";

export default Ember.Route.extend(AfterModelMixin, {
    model: function(params) {
        var _this = this;

        if (params.entity) {
            return Ember.RSVP.hash({
                items: this.store.find(params.entity)
            }).then(function(hash) {
                return $.extend(true, hash, _this.modelFor('application'));
            });
        } else {
            throw new Error('Entity is required');
        }
    }
});