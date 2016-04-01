var apiLangCollection = Backbone.Collection.extend({
    url: 'https://api.github.com/legacy/repos/search/php',
    model: ApiLangModel ,

    parse: function(data){
      return data.repositories;
    }
});
var apiLangCollection2 = Backbone.Collection.extend({
  model: ApiLangModel
});


var lang_repos = new apiLangCollection();

lang_repos.fetch({success: function(){
    //console.log(lang_repos.toJSON());
    var usernameRender = new topLang(lang_repos);
    return lang_repos.toJSON();
}});
