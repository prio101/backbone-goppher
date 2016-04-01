var userView = Backbone.View.extend({
        el: "#users-list" ,

        template: _.template($("#user").html()) ,

        initialize: function(data) {
          console.log("Template Users List is loaded");
          this.collection = new UserCollection(data);
          this.render();
        },
        
        render: function() {
          console.log(this.collection);
          this.collection.each(function(data){
            this.renderData(data);
          }, this);
        },
        renderData: function(data){
          this.model = data;
          this.$el.append(this.template(this.model.attributes));
          return this;
        }
});

var data = [
  { name: 'prio', language: "English" },
  { name: 'sk', language: 'bangla'}
];
var view = new userView(data);
