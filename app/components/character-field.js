import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'character',
        variable: 'characters',
        field: 'character_id',
        loading: 'characters',
        prompt: 'character'
    }
});