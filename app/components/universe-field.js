import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'universe',
        variable: 'universe',
        field: 'universe_id',
        loading: 'universes',
        prompt: 'universe'
    }
});