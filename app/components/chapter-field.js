import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'chapter',
        variable: 'chapters',
        field: 'chapter_id',
        loading: 'chapters',
        prompt: 'chapter'
    }
});