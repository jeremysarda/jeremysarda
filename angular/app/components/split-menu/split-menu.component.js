class SplitMenuController {
    constructor($scope) {
        'ngInject';

        $scope.currentNavItem = 'page1';
    }

    $onInit() {
    }
}

export const SplitMenuComponent = {
    templateUrl: './views/app/components/split-menu/split-menu.component.html',
    controller: SplitMenuController,
    controllerAs: 'vm',
    bindings: {}
}
