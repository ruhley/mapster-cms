import Ember from "ember";
import EntityFieldMixin from "../mixins/entity-field";

export default Ember.Component.extend(EntityFieldMixin, {
    options: {
        model: 'event',
        variable: 'events',
        field: 'event_id',
        loading: 'events',
        prompt: 'event'
    }
});