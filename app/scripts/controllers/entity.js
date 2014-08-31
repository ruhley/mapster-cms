App.EntityController = Ember.Controller.extend({
    afterRender: function() {
        $('#entity-list').DataTable();
    }
});
