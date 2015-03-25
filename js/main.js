var Backbone = require('backbone'),
    _ = require('underscore'),
    $ = require('jquery');
    Todo = require('./models/Todo'),
    TodoList = require('./collections/TodoList'),
    AppView = require('./views/AppView');

$(function() {

  new AppView();

// Create our global collection of **Todos**.
  var Todos = new TodoList();

});
