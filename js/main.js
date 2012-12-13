require(['jquery', 'handlebars', 'underscorejs-min', 'app'], function ($) {
    $(function () {
        console.info('jQuery loaded!', $);
        console.info('Handlebars loaded!', Handlebars);
        console.info('_ loaded!', _);
        console.info('App loaded!', _4bram);

        var todoList = {};
            todoList.title = 'ToDo List';
            todoList.todoItems = [];

        _.each(_4bram.ToDoList, function (listItem, index) {
            todoList.todoItems.push({todoText: listItem})
        });

        $('.container').html(_4bram.Render('#todo-list-container', todoList));
    });
});