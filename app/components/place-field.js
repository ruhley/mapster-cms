import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'place',
        variable: 'places',
        field: 'place_id',
        loading: 'places',
        prompt: 'place'
    }
});