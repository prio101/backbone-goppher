var apiUsers = Backbone.Collection.extend({
//  url : "https://api.github.com/legacy/repos/search/ruby",

  model: ApiUserModel,

  parse: function(git){
    return git.repositories;
  }
});

var repos = new apiUsers();

repos.fetch({success: function(){
    console.log(repos.pluck('username'));

}});


// var Repo= Backbone.Model.extend({});
//
// var RepoCollection = Backbone.Collection.extend({
//     url : "https://api.github.com/legacy/repos/search/javascript",
//     model : Repo,
//
//     parse: function(data) {
//         return data.repositories;
//     }
// });
//
//
// var repos = new RepoCollection();
//
// repos.fetch({success: function(){
//     console.log(repos.pluck('username'));
// }});
