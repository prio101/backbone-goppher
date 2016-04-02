var topLangNode = Backbone.View.extend({
  el: "#node-list",

  template : _.template($("#node").html()),
  initialize: function(datacollection){
      console.log("Initialized");
      this.collection = datacollection;
      this.render() ;
  },

  render: function(){
    this.collection.each(function(user){
      this.renderData(user);
    }, this);
  },

  renderData: function(data){
    this.model = data;
    this.$el.append(this.template(this.model.attributes));

    return this;
  }
});
