import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'media',
        variable: 'media',
        field: 'media_id',
        loading: 'media',
        prompt: 'media'
    }
});