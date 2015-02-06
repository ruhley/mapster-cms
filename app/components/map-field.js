import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'map',
        variable: 'maps',
        field: 'map_id',
        loading: 'maps',
        prompt: 'map'
    }
});