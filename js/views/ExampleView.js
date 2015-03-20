'use strict';

var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function () {
    console.log('Initialize the function');
    this.render();
  },
  render: function() {
    $('article').prepend('<p class="pure-u-1">This stuff works.</p>');
  }
});
