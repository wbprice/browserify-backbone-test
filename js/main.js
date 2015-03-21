
var Backbone = require('Backbone'),
    _ = require('underscore'),
    $ = require('jquery');
    Todo = require('./models/Todo'),
    TodoList = require('./collections/TodoList'),
    AppView = require('./views/AppView');

Backbone.$ = $;

// Create our global collection of **Todos**.

var ENTER_KEY = 13;

$(function() {

  new AppView();

});
