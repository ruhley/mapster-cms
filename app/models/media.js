import Ember from 'ember';
import DS from 'ember-data';
import ModelMixin from "../mixins/model";

Ember.Inflector.inflector.uncountable('media');

export default DS.Model.extend(ModelMixin, {
    name: DS.attr('string'),
    abbreviation: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    universe_id: DS.attr('number'),
    created: DS.attr('date')
});