class WaypointTargetController {
    constructor($log) {
        'ngInject';
        this.$log = $log;
    }
}

WaypointTargetDirective.$inject = ['$log']
export function WaypointTargetDirective($log) {
    return {
        restrict: 'EA',
        scope: {ngModel: '=ngModel'},
        controller: WaypointTargetController,
        link: function (scope, elem) { //, attrs) {

            var l = $log;

            // $log.debug('--------------------');
            // $log.debug('Fired WaypointTargetDirective.link()');
            // $log.debug({'scope': scope});
            // $log.debug({'elem': elem});
            // $log.debug({'attrs': attrs});
            // $log.debug({'scope[direction]': scope[direction]});
            // $log.debug({'callback': callback});
            // $log.debug({'$rootScope.bodyClass': $rootScope.bodyClass});
            // $log.debug('--------------------');

            scope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState) { // eslint-disable-line angular/on-watch
                let fromClasses = angular.isDefined(fromState.data) && angular.isDefined(fromState.data.waypointTargetClass) ? fromState.data.waypointTargetClass : null
                let toClasses = angular.isDefined(toState.data) && angular.isDefined(toState.data.waypointTargetClass) ? toState.data.waypointTargetClass : null

                l.info({'fromClasses': fromClasses, 'toClasses': toClasses})

                if (fromClasses != toClasses) {
                    if (fromClasses) {
                        l.debug({'fromClasses': fromClasses, 'toClasses': toClasses})
                        elem.removeClass(fromClasses)
                    }
                    if (toClasses) {
                        l.debug({'fromClasses': fromClasses, 'toClasses': toClasses})
                        elem.addClass(toClasses)
                    }
                }
            })
        }
    }
}
