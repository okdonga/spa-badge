var app = app || {};

app.Badge = Backbone.Model.extend({
  defaults: function() {
    return{
      points: 0
    }
  }
})
