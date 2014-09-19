App.NameFieldComponent = Ember.Component.extend();
App.DescriptionFieldComponent = Ember.Component.extend();
App.ImageFieldComponent = Ember.Component.extend({
    didInsertElement: function() {
        var _this = this,
            container = Ember.$('#' + this.elementId),
            local = container.find('.local-image'),
            url = container.find('#url-image'),
            urlButton = container.find('.url-image-button'),
            item = this.get('item'),
            currentImage = item.get('image'),
            initialPreview = currentImage ? '<img src="' + currentImage + '" class="file-preview-image" alt="">' : '';

        local.fileinput({
            previewFileType: 'image',
            browseLabel: 'Local Image',
            browseIcon: '<i class="glyphicon glyphicon-picture"></i> ',
            removeClass: 'btn btn-danger',
            elPreviewContainer: '#image-preview',
            elPreviewImage: '#image-preview .file-preview-thumbnails',
            previewTemplate: '',
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

        urlButton.click(function(evt) {
            evt.preventDefault();

            var image = url.val(),
                extension = /(?:\.([^.]+))?$/.exec(image)[1].toLowerCase(),
                allowed = ['jpg', 'jpeg', 'png', 'gif'];

            if ($.inArray(extension, allowed) === -1) {
                alert('Invalid url given');
            } else {
                _this.set('item.image', image);
                $('#image-preview .file-preview-thumbnails').html('<img src="' + image + '" class="file-preview-frame" alt="">');
            }
        });
    }
});
App.LinkFieldComponent = Ember.Component.extend();
App.AbbreviationFieldComponent = Ember.Component.extend();
App.UniverseFieldComponent = Ember.Component.extend(App.EntityFieldMixin, {
    options: {
        model: 'universe',
        variable: 'universe',
        field: 'universe_id'
    }
});
App.MediaFieldComponent = Ember.Component.extend(App.EntityFieldMixin, {
    options: {
        model: 'media',
        variable: 'media',
        field: 'media_id'
    }
});
App.MapFieldComponent = Ember.Component.extend(App.EntityFieldMixin, {
    options: {
        model: 'map',
        variable: 'maps',
        field: 'map_id'
    }
});
App.PlaceTypeFieldComponent = Ember.Component.extend(App.EntityFieldMixin, {
    options: {
        model: 'place-type',
        variable: 'placeTypes',
        field: 'place_type_id'
    }
});
