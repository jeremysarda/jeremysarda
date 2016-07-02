ngDescribe({
    name: 'Test app-view component',
    inject: ['$httpBackend'],
    modules: 'app',
    element: '<app-view></app-view>',
    tests: function (deps) {

        beforeEach( () => {
            deps.$httpBackend.when('GET', /\/img\/icons\/[a-zA-Z0-9-_]*.svg/).respond('');
        });

        it('basic test', () => {
            //
        });
    }
});
