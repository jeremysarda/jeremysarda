ngDescribe({
    name: 'Test split-menu component',
    inject: ['$httpBackend'],
    modules: 'app',
    element: '<split-menu></split-menu>',
    tests: function (deps) {

        beforeEach(() => {
            deps.$httpBackend.when('GET', /\/img\/(icons|vector)\/[a-zA-Z0-9-_]*.svg/).respond('');
        });

        it('basic test', () => {
            //
        });
    }
});
