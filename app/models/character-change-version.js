import DS from 'ember-data';
import CharacterChange from './character-change';

export default CharacterChange.extend({
    character_change_id: DS.attr('number')
});