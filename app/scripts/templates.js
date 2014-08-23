Ember.TEMPLATES["application"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', stack1, hashTypes, hashContexts, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  data.buffer.push("<div>\n    ");
  hashTypes = {};
  hashContexts = {};
  options = {hash:{},contexts:[depth0],types:["STRING"],hashContexts:hashContexts,hashTypes:hashTypes,data:data};
  data.buffer.push(escapeExpression(((stack1 = helpers.partial || depth0.partial),stack1 ? stack1.call(depth0, "system/nav", options) : helperMissing.call(depth0, "partial", "system/nav", options))));
  data.buffer.push("\n    <div class='container'>\n        <div class='row'>\n\n        </div>\n    </div>\n</div>\n");
  return buffer;
  
});

Ember.TEMPLATES["index"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class='well'>\n    Welcome to Yeoman and Ember.js!\n</div>\n");
  
});

Ember.TEMPLATES["system/nav"] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<nav class=\"navbar navbar-default navbar-fixed-top\">\n      <div class=\"container\">\n        <div class=\"navbar-header\">\n          <a class=\"navbar-brand\" href=\"../\">Bootswatch</a>\n          <button data-target=\"#navbar-main\" data-toggle=\"collapse\" type=\"button\" class=\"navbar-toggle\">\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n            <span class=\"icon-bar\"></span>\n          </button>\n        </div>\n        <div id=\"navbar-main\" class=\"navbar-collapse collapse\">\n          <ul class=\"nav navbar-nav\">\n            <li class=\"dropdown\">\n              <a id=\"themes\" href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Themes <span class=\"caret\"></span></a>\n              <ul aria-labelledby=\"themes\" class=\"dropdown-menu\">\n                <li><a href=\"../default/\">Default</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"../cerulean/\">Cerulean</a></li>\n                <li><a href=\"../cosmo/\">Cosmo</a></li>\n                <li><a href=\"../cyborg/\">Cyborg</a></li>\n                <li><a href=\"../darkly/\">Darkly</a></li>\n                <li><a href=\"../flatly/\">Flatly</a></li>\n                <li><a href=\"../journal/\">Journal</a></li>\n                <li><a href=\"../lumen/\">Lumen</a></li>\n                <li><a href=\"../paper/\">Paper</a></li>\n                <li><a href=\"../readable/\">Readable</a></li>\n                <li><a href=\"../sandstone/\">Sandstone</a></li>\n                <li><a href=\"../simplex/\">Simplex</a></li>\n                <li><a href=\"../slate/\">Slate</a></li>\n                <li><a href=\"../spacelab/\">Spacelab</a></li>\n                <li><a href=\"../superhero/\">Superhero</a></li>\n                <li><a href=\"../united/\">United</a></li>\n                <li><a href=\"../yeti/\">Yeti</a></li>\n              </ul>\n            </li>\n            <li>\n              <a href=\"../help/\">Help</a>\n            </li>\n            <li>\n              <a href=\"http://news.bootswatch.com\">Blog</a>\n            </li>\n            <li class=\"dropdown\">\n              <a id=\"download\" href=\"#\" data-toggle=\"dropdown\" class=\"dropdown-toggle\">Download <span class=\"caret\"></span></a>\n              <ul aria-labelledby=\"download\" class=\"dropdown-menu\">\n                <li><a href=\"./bootstrap.min.css\">bootstrap.min.css</a></li>\n                <li><a href=\"./bootstrap.css\">bootstrap.css</a></li>\n                <li class=\"divider\"></li>\n                <li><a href=\"./variables.less\">variables.less</a></li>\n                <li><a href=\"./bootswatch.less\">bootswatch.less</a></li>\n              </ul>\n            </li>\n          </ul>\n\n          <ul class=\"nav navbar-nav navbar-right\">\n            <li><a target=\"_blank\" href=\"http://builtwithbootstrap.com/\">Built With Bootstrap</a></li>\n            <li><a target=\"_blank\" href=\"https://wrapbootstrap.com/?ref=bsw\">WrapBootstrap</a></li>\n          </ul>\n\n        </div>\n      </div>\n    </nav>\n");
  
});