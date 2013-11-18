var baseUrl = 'file:///home/christophe/Dev/confjs/todomvc/vanilla-examples/vanillajs/index.html';
var ENTER_KEY = '\uE006';

module.exports = {
    'Page title is correct': function (test) {
        test
            .open(baseUrl)
            .assert.title().is('VanillaJS • TodoMVC', 'La page a le bon titre')
            .done();
    },
    'Les tâches sont ajoutées à la liste' : function (test) {
        test
            .open(baseUrl)
            .type('#new-todo', 'my first task')
            .sendKeys('body', ENTER_KEY)
            .assert.numberOfElements('#todo-list li', 1, '1 élément présent dans la liste')
            .assert.text('#todo-list li', 'my first task', 'Le text de l\'élément est correct')
            .done();
    }
};