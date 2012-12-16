require(['jquery', 'underscorejs-min', 'handlebars', 'ember-1.0.0-pre.2.min', 'app'], function ($) {
    $(function () {
        console.info('jQuery loaded!', $);
        console.info('_ loaded!', _);
        console.info('Handlebars loaded!', Handlebars);
        console.info('Ember loaded!', Ember);
        console.info('App loaded!', _4bram);

        var todoList = {};
            todoList.title = 'ToDo List';
            todoList.todoItems = [];

        _.each(_4bram.ToDoList, function (listItem, index) {
            todoList.todoItems.push({todoText: listItem})
        });

//        var view = Ember.View.create({
//            templateName: 'application',
//            title: 'ToDo List',
//            todoItems: todoList.todoItems
//        }).append('#todo-list-container');

//        _4bram.App.initialize();
        $('.container').html(_4bram.Render('#todo-list-container', todoList));
    });
});