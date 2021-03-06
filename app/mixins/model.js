import Ember from "ember";

export default Ember.Mixin.create({
    url: function() {
        return this.get('id');
    }.property('name'),
    imageDisplay: function() {
        var image = this.get('image');

        if (image) {
            return '<div class="media"><img src="' + image + '" alt="" class="img-thumbnail"/></div>';
        }

        return '<span class="fa-stack fa-lg" title="No image available"><i class="fa fa-picture-o fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x text-danger"></i></span>';
    }.property('image'),
    linkTo: function() {
        var link = this.get('link');

        if (link) {
            return '<a href="' + link + '" target="_blank">' + link + '</a>';
        }

        return '<span class="fa-stack fa-lg" title="No link available"><i class="fa fa-link fa-stack-1x"></i><i class="fa fa-ban fa-stack-2x text-danger"></i></span>';
    }.property('link')
});