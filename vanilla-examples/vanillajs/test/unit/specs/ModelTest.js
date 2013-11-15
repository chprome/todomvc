var expect = chai.expect;

describe('create', function () {
    it('On doit pouvoir créer une tâche en donnant son nom', function() {
        // Given
        var storage = {save: function() {}};
        var model = new app.Model(storage);
        var expectedTask = {
            title: 'my task',
            completed: 0
        };

        // When
        var actualTask = model.create('my task');

        // Then
        expect(actualTask).to.deep.equal(expectedTask);
    });

    it('On doit utiliser le storage.save pour créer une tâche', function () {
        // Given
        var storage = {};
        storage.save = sinon.spy();
        var model = new app.Model(storage);
        var expectedTask = {
            title: 'my task',
            completed: 0
        };

        // When
        model.create('my task');

        // Then
        expect(storage.save.calledWith(expectedTask)).to.be.ok;
    });
});

describe('read', function() {
    it('On doit récupérer toutes les tâches', function() {
        // Given
        var storage = new app.Store('testDb', function() {});
        var mock = sinon.mock(storage);
        var expectedTasks = [
            {title: 'toto', completed: 0},
            {title: 'tata', completed: 1},
            {title: 'titi', completed: 0},
            {title: 'tutu', completed: 0}
        ];

        mock.expects('findAll').once().returns(expectedTasks.slice(0));

        // When
        var model =  new app.Model(storage);
        var actualTasks = model.read();

        // Then
        expect(mock.verify()).to.be.true;
        expect(actualTasks, 'nombre d\'éléments incorrect').to.have.length(expectedTasks.length);
        expect(actualTasks).to.deep.equal(expectedTasks);
    });

    it('On doit récupérer toutes les tâches complétées', function() {
        // Given
        var storage = new app.Store('testDb', function() {});
        var mock = sinon.mock(storage);
        var expectedTasks = [
            {title: 'tata', completed: 1}
        ];
        mock.expects('find').withArgs({completed: 1}).returns(expectedTasks.slice(0));

        // When
        var model =  new app.Model(storage);
        var actualTasks = model.read({completed: 1});

        // Then
        expect(mock.verify()).to.be.true;
        expect(actualTasks, 'nombre d\'éléments incorrect').to.have.length(expectedTasks.length);
        expect(actualTasks).to.deep.equal(expectedTasks);
    });

    it('On doit récupérer toutes les tâches non complétées', function() {
        // Given
        var storage = new app.Store('testDb', function() {});
        var mock = sinon.mock(storage);
        var expectedTasks = [
            {title: 'tata', completed: 0}
        ];
        mock.expects('find').withArgs({completed: 0}).returns(expectedTasks.slice(0));

        // When
        var model =  new app.Model(storage);
        var actualTasks = model.read({completed: 0});

        // Then
        expect(mock.verify()).to.be.true;
        expect(actualTasks, 'nombre d\'éléments incorrect').to.have.length(expectedTasks.length);
        expect(actualTasks).to.deep.equal(expectedTasks);
    });
});

describe('update', function() {
});

describe('remove', function() {});

describe('removeAll', function() {});