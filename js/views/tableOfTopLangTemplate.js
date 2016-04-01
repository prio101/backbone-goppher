var topLang = Backbone.View.extend({
  el: "#test",
  model: ApiLangModel,

  initialize: function(){
    console.log("Initialized");

  },

  render: function(){
    this.$el.html("Hi Threr");
  }
});

var view = new topLang();
