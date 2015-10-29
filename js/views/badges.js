var app = app || {};

app.BadgesView = Backbone.View.extend({
  el: '.show-user',

  events: {
    'submit .addBadgeForm': 'addBadge'
  },

  initialize: function() {
    this.collection = new app.Badges();
    this.collection.fetch({reset: true})
    this.render();

    // add is built in
    this.listenTo(this.collection, 'add', this.renderBadge);
  },

  renderBadge: function(badge) {
    console.log("ddddddd");
    var view = new app.BadgeView({model: badge});
    $('.badge-container').append(view.render().el);
    // $('.add-badge').insertBefore(view.render().el);
  },

  render: function() {
    this.collection.each(function(badge) {
      this.renderBadge(badge)
    }, this)
  },

  addBadge: function(event) {
    console.log("addd badge")
    event.preventDefault();
    var $input = $($('.addBadgeForm').children()[1]);
    var data = { student_id: $('.addBadgeForm').children()[0]['value'] };
    data['comment'] = $input.val();
  this.collection.create(data);
  }
});

// $(function() {
//   new app.BadgesView();
// })
