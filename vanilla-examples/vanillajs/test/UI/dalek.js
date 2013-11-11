var baseUrl = 'file:///home/christophe/dev/projects/todomvc/vanilla-examples/vanillajs/index.html';
var ENTER_KEY = '\uE006';

module.exports = {
    'Page title is correct': function (test) {
        test
            .open(baseUrl)
            .assert.title().is('VanillaJS • TodoMVC', 'It has title')
            .done();
    },
    'Les tâches sont ajoutées à la liste' : function (test) {
        test
            .open(baseUrl)
            .type('#new-todo', 'my first task')
            .sendKeys('body', ENTER_KEY)
            .assert.numberOfElements('#todo-list li', 1, '1 élément présent dans la liste')
            .done();
    }
};