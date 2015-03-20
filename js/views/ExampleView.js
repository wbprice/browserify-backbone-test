'use strict';

var Backbone = require('backbone'),
    $ = require('jquery'),
    template = require('./templates/ExampleView-tpl.html');

Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function () {
    this.render();
  },
  render: function() {
    $('article').prepend(template({message: 'This is a passed message.'}));
  }
});
