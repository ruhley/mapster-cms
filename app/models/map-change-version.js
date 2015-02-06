import DS from 'ember-data';
import MapChange from './map-change';

export default MapChange.extend({
    map_change_id: DS.attr('number')
});