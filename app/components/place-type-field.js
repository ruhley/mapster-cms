import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'place-type',
        variable: 'placeTypes',
        field: 'place_type_id',
        loading: 'place types',
        prompt: 'place type'
    }
});