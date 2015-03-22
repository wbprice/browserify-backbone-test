
var Backbone = require('Backbone'),
    _ = require('underscore'),
    $ = require('jquery');
    Todo = require('./models/Todo'),
    TodoList = require('./collections/TodoList'),
    AppView = require('./views/AppView');

Backbone.$ = $;


// Create our global collection of **Todos**.


$(function() {

  new AppView();

  var Todos = new TodoList();

  Todos.create({ title: 'My first Todo item'});

});
