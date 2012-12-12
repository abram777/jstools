_4bram = {};
_4bram.ToDoList = [
                   'Load requirejs', 'Load underscorejs', 'Apply styling with Sass',
                   'Generate View with Handlebars', 'Implement Ember'
                  ];

_4bram.Render = function (sourceId, context) {
    var template = Handlebars.compile($(sourceId).html());
    return template(context);
};