App.Place = DS.Model.extend(App.ModelMixin, {
    name: DS.attr('string'),
    description: DS.attr('string'),
    image: DS.attr('string'),
    link: DS.attr('string'),
    sequence: DS.attr('number'),
    map_id: DS.attr('number'),
    created: DS.attr('date')
});

App.PlaceVersion = App.Chapter.extend({
    place_id: DS.attr('number')
});
