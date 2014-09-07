App.EntityInfoController = Ember.Controller.extend({
    afterRender: function() {
        this.redrawVersionsTable();
    },
    redrawVersionsTable: function() {
        if ($.fn.dataTable.isDataTable('#version-list')) {
            $('#version-list').DataTable().clear().destroy();
        }

        $('#version-list').DataTable({
            data: this.get('model.versions.content'),
            columns: [{
                data: '_data.name'
            }, {
                data: '_data.abbreviation'
            }, {
                data: '_data.description'
            }, {
                data: '_data.image'
            }, {
                data: '_data.link'
            }, {
                data: '_data.created'
            }, {
                data: null
            }],
            order: [
                [5, 'desc']
            ],
            createdRow: function(row, data) {
                var tr = $(row);

                tr.find('td:eq(3)').html(data.get('imageDisplay'));
                tr.find('td:eq(4)').html(data.get('linkTo'));
                tr.find('td:eq(5)').html(dateFormat(data.get('created'), 'DD/MM/YYYY HH:mm:ss'));
                $('<button>').addClass('btn btn-success').text('Make Live').click(function() {

                }).appendTo(tr.find('td:eq(6)'));
            }
        });
    }
});
