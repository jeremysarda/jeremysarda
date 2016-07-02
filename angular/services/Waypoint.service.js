export class WaypointService {
    constructor($timeout, $log) {
        'ngInject';

        this.$timeout = $timeout;
        this.$log = $log;
    }

    getHandlerSync(scope, callback) {
        var timeout = this.$timeout;
        var l = this.$log;

        return function (direction) {
            var waypoint = scope[direction];

            if (waypoint) {
                l.debug('---------- getHandlerSync() ----------');
                l.info({'direction': direction});
                // l.info({'scope': scope});
                // l.info({'scope[direction]': scope[direction]});
                // l.info({'callback': callback});
                // l.info({'scope.$parent': scope.$parent});
                // l.info({'scope.$root.bodyClass': scope.$root.bodyClass});
                l.debug('--------------------------------------');

                timeout(angular.bind(null, callback, waypoint), 100);
            }
        };
    }
}
