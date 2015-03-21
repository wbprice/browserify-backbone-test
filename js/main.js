var Backbone = require('Backbone'),
    _ = require('underscore'),
    $ = require('jquery'),
    Todo = require('./models/Todo'),
    TodoList = require('./collections/TodoList');

Backbone.$ = $;

var Todos = new TodoList();

var AppView = require('./views/ExampleView');

var appView = new AppView();
