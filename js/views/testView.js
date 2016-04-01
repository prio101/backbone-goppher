var TestView = Backbone.View.extend(
  {
    initialize: function(){
      alert('Sucks');
      console.log("Go here");
      this.render();

    } ,

    render: function(){
      // Passing value in underscore.js template
      var variables = { search_label : "My Search"} ;
      //compile the templte using Backbone
      var template = _.template($("#search_template").html());

      // Load this compiled template in $el
      this.$el.html(template ) ;

    } ,
    events : {
      "click input[type=buton]" :"doSearch"
    } ,
    doSearch : function(event){
      alert("Search for "+ $("#search_input").val() ) ;
    }
  });

var test = new TestView({ el: $("#search_container")});
