var apiLangCollection = Backbone.Collection.extend({
  //  url: 'https://api.github.com/legacy/repos/search/php',

    model: ApiLangModel ,

    parse: function(data){
      return data.repositories;
    }
});


var lang_repos = new apiLangCollection();

lang_repos.fetch({success: function(){
    console.log(lang_repos.pluck('username'));

}});
