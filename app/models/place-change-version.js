import DS from 'ember-data';
import PlaceChange from './place-change';

export default PlaceChange.extend({
    place_change_id: DS.attr('number')
});