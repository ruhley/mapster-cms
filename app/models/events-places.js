import ModelMixin from "../mixins/model";
import DS from 'ember-data';

export default DS.Model.extend(ModelMixin, {
    event_id: DS.attr('number'),
    place_id: DS.attr('number'),
    coordinates: DS.attr('string'),
    created: DS.attr('date')
});
