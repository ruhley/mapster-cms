import Ember from "ember";
import AfterModelMixin from "../mixins/after-model";

export default Ember.Route.extend(AfterModelMixin, {
    model: function() {
        return Ember.RSVP.hash({
            entities: this.store.find('mapsterEntity')
        });
    }
});