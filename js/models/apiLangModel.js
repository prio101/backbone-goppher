var ApiLangModel = Backbone.Model.extend({

  url: 'https://api.github.com/legacy/repos/search/php',

  model: ApiLangModel ,

  parse: function(data){
    return data.repositories;
  }
});
