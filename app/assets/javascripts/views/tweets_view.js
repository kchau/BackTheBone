var TweetsView = Backbone.View.extend({
  tagName: 'table',
  className: 'tweets',

  initialize: function(options) {
    _.bindAll(this, 'render');
    this.collection.on('all', this.render, this);
  },

  render: function() {
    console.log('render');
    //todo
    return this;
  }
});
