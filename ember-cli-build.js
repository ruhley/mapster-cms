var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
	var app = new EmberApp(defaults, {});

	// bootstrap
	app.import({
		development: 'bower_components/bootstrap/dist/css/bootstrap.css',
		production: 'bower_components/bootstrap/dist/css/bootstrap.min.css'
	});
	app.import({
		development: 'bower_components/bootstrap/dist/js/bootstrap.js',
		production: 'bower_components/bootstrap/dist/js/bootstrap.min.js'
	});
	app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot', {destDir: 'fonts'});
	app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg', {destDir: 'fonts'});
	app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf', {destDir: 'fonts'});
	app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff', {destDir: 'fonts'});
	app.import('bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2', {destDir: 'fonts'});
	app.import('bower_components/bootstrap/dist/css/bootstrap.css.map', {destDir: 'assets'});

	// bootstrap file input
	app.import({
		development: 'bower_components/bootstrap-fileinput/css/fileinput.css',
		production: 'bower_components/bootstrap-fileinput/css/fileinput.min.css'
	});
	app.import({
		development: 'bower_components/bootstrap-fileinput/js/fileinput.js',
		production: 'bower_components/bootstrap-fileinput/js/fileinput.min.js'
	});

	// bootstrap growl
	app.import({
		development: 'bower_components/bootstrap.growl/dist/bootstrap-growl.js',
		production: 'bower_components/bootstrap.growl/dist/bootstrap-growl.min.js'
	});

	// font awesome
	app.import({
		development: 'bower_components/font-awesome/css/font-awesome.css',
		production: 'bower_components/font-awesome/css/font-awesome.min.css'
	});
	app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {destDir: 'fonts'});
	app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {destDir: 'fonts'});
	app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {destDir: 'fonts'});
	app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {destDir: 'fonts'});
	app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {destDir: 'fonts'});
	app.import('bower_components/font-awesome/fonts/FontAwesome.otf', {destDir: 'fonts'});


	// lodash
	app.import({
		development: 'bower_components/lodash/lodash.js',
		production: 'bower_components/lodash/lodash.min.js'
	});

	// moment
	app.import({
		development: 'bower_components/moment/moment.js',
		production: 'bower_components/moment/min/moment.min.js'
	});

	// snap
	app.import({
		development: 'bower_components/snap.svg/dist/snap.svg.js',
		production: 'bower_components/snap.svg/dist/snap.svg-min.js'
	});

	return app.toTree();
}
