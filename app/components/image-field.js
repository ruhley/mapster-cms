import Ember from "ember";
import $ from "jquery";

export default Ember.Component.extend({
    didInsertElement: function() {
        var _this = this,
            container = Ember.$('#' + this.elementId),
            local = container.find('.local-image'),
            url = container.find('#url-image'),
            urlButton = container.find('.url-image-button'),
            item = this.get('item'),
            currentImage = item.get('image'),
            initialPreview = currentImage ? ['<img src="' + currentImage + '" class="file-preview-image" alt="">'] : [],
            extensions = ['jpg', 'jpeg', 'png', 'gif'];

        local.fileinput({
            allowedFileTypes: ['image'],
            allowedFileExtensions: extensions,
            allowedPreviewTypes: ['image'],
            browseLabel: 'Local Image',
            browseIcon: '<i class="glyphicon glyphicon-picture"></i> ',
            elPreviewContainer: '#image-preview',
            elPreviewImage: '#image-preview .file-preview-thumbnails',
            initialPreview: initialPreview,
            maxFileSize: 5000,
            maxFileCount: 1,
            previewTemplate: '',
            removeClass: 'btn btn-danger',
            showCaption: false,
            showUpload: false,
            msgLoading: '',
            msgProgress: '',
        }).on('fileloaded', function(evt, file) {
            var reader = new FileReader();
            reader.onload = function() {
                _this.set('item.image', reader.result);
            };
            reader.readAsDataURL(file);
        }).on('fileclear', function() {
            _this.set('item.image', '');
        });

        urlButton.click(function(evt) {
            evt.preventDefault();

            var image = url.val(),
                extension = /(?:\.([^.]+))?$/.exec(image)[1];

            if (extension) {
                extension = extension.toLowerCase();
            }

            if ($.inArray(extension, extensions) === -1) {
                alert('Invalid url given');
            } else {
                _this.set('item.image', image);
                $('#image-preview .file-preview-thumbnails').html('<img src="' + image + '" class="file-preview-frame" alt="">');
            }
        });
    }
});