var app = app || {};

app.Badges = Backbone.Collection.extend({
  model: app.Badge,
  // localStorage: new Backbone.LocalStorage('badges')
  url: 'http://localhost:3000/students'
})
