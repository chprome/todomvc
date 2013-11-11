module.exports = {
    'Page title is correct': function (test) {
        test
            .open('file:///home/christophe/dev/projects/todomvc/vanilla-examples/vanillajs/index.html')
            .assert.title().is('VanillaJS • TodoMVC', 'It has title')
            .done();
    }
};