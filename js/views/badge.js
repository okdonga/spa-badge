var app = app || {};

app.BadgeView = Backbone.View.extend({
  tagName: 'div',
  className: 'slogan',

  events: {
    'click .up': 'upVote',
    'click .down': 'downVote'
  },

  initialize: function() {
    this.template = _.template($('.sloganTemplate').html());
    this.render();
    console.log('initialize');
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  upVote: function(e) {
    e.preventDefault();
    debugger;
    console.log('up')
    this.model.points++;
    // this.render();
    console.log('up')
  },

  downVote: function(e) {
    e.preventDefault();
    this.model.points--;
    // this.render();
    console.log('down')
  }
});


