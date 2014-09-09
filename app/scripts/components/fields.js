App.NameFieldComponent = Ember.Component.extend();
App.DescriptionFieldComponent = Ember.Component.extend();
App.ImageFieldComponent = Ember.Component.extend({
    didInsertElement: function() {
        var _this = this,
            container = Ember.$('#' + this.elementId),
            el = container.find('input'),
            item = this.get('item'),
            currentImage = item.get('image'),
            initialPreview = currentImage ? '<img src="' + currentImage + '" class="file-preview-image" alt="">' : '';

        el.fileinput({
            previewFileType: 'image',
            browseLabel: 'Pick Image',
            browseIcon: '<i class="glyphicon glyphicon-picture"></i> ',
            removeClass: 'btn btn-danger',
            previewTemplate: '<div class="pull-right col-sm-8"><div class="file-preview-thumbnails"></div><div class="clearfix"></div><div class="file-preview-status text-center text-success"></div></div>',
            showCaption: false,
            showUpload: false,
            maxFileSize: 5000,
            maxFileCount: 1,
            msgLoading: '',
            msgProgress: '',
            initialPreview: initialPreview
        }).on('fileloaded', function(evt, file, id) {
            var reader = new FileReader();
            reader.onload = function(e) {
                _this.set('item.image', reader.result);
            }
            reader.readAsDataURL(file);
        }).on('fileclear', function(event) {
            _this.set('item.image', '');
        });
    }
});
App.LinkFieldComponent = Ember.Component.extend();
App.AbbreviationFieldComponent = Ember.Component.extend();
App.UniverseFieldComponent = Ember.Component.extend({
    didInsertElement: function() {
        var _this = this;

        this.set('universes', this.get('targetObject.store').find('universe'));

        Ember.$('#' + this.elementId + ' select').change(function() {
            _this.set('item.universe_id', $(this).val());
        });
    }
});
App.MediaFieldComponent = Ember.Component.extend({
    didInsertElement: function() {
        var _this = this;

        this.set('media', this.get('targetObject.store').find('media'));

        Ember.$('#' + this.elementId + ' select').change(function() {
            _this.set('item.media_id', $(this).val());
        });
    }
});
