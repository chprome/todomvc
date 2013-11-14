var expect = chai.expect;

describe('create', function () {
    it('should use storage to save', function () {
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

    it('should find all storage', function() {
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
        expect(actualTasks).to.be.deep.equal(expectedTasks);
    });
});