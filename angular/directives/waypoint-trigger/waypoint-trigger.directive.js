class WaypointTriggerController {
    constructor($scope, $log, $window) {
        'ngInject';

        /**
         * Waypoint slugs parsed into objects and stored by key:
         * {
         *     'example.point' : { namespace : 'example', waypoint : 'point' },
         *     'noNamespace' : { namespace : 'globals', waypoint : 'noNamespace' }
         * }
         *
         * @type Object
         */
        this.parsedWaypoints = {};
        $scope.waypointTriggers = {};

        this.$scope = $scope;
        this.log = $log;
        this.d = $window.document;
    }

    /**
     * Get a namespace for the waypoint
     *
     * @param qualifiedWaypoint
     * @return String
     */
    parseWaypoint(qualifiedWaypoint) {
        var parts;

        // this.log.debug(['qualifiedWaypoint', qualifiedWaypoint]);

        if (!this.parsedWaypoints[qualifiedWaypoint]) {
            parts = qualifiedWaypoint.split('.');

            /**
             * Only trigger event when there are two parts to the direction value.
             */
            if (parts.length === 2) {
                this.parsedWaypoints[qualifiedWaypoint] = {
                    namespace: parts[0],
                    waypoint: parts.join('.')
                };
            } else {
                this.log.warn(parts);
            }
        }
        return this.parsedWaypoints[qualifiedWaypoint];
    }

    /**
     * Sets all waypoints in the colleciton to false, and sets the indicated waypoint to true.
     *
     * @param collection
     * @param waypoint
     */
    setWaypoint(collection, waypoint) {
        _.each(collection, function (value, waypoint) {
            collection[waypoint] = false;
        });
        collection[waypoint] = true;
    }

    /**
     * Clear all waypoints in the same namespace as qualifiedWaypoint,
     * and set qualifiedWaypoint.
     *
     * @param  qualifiedWaypoint
     * @return void
     */
    processWaypoint(qualifiedWaypoint) {
        var waypoints = this.$scope.waypointTriggers;
        var data = this.parseWaypoint(qualifiedWaypoint);
        var namespace = data.namespace;
        var l = this.log;

        if (!waypoints[namespace]) {
            waypoints[namespace] = {};
        }

        // l.debug('---------- processWaypoint -----------');
        // l.debug(
        //     {
        //         'waypoints': waypoints,
        //         'data': data,
        //         'namespace': namespace
        //     }
        // );
        // l.debug('--------------------------------------');

        if (data.waypoint) {

            var selectorParts = data.waypoint.split('.'),
                targetSelector = selectorParts[0],
                actionClass = selectorParts[1],
                targets = this.d.getElementsByClassName(targetSelector);

            _.each(targets, function (target, targetIndex) {

                l.debug('--------------- _.each ---------------');

                var mString = namespace,
                    mRegExp = new RegExp(mString + '-'),
                    newClassList = [];

                _.each(target.classList, function (cls) {
                    if (!mRegExp.test(cls)) {
                        newClassList.push(cls);
                        l.debug('Keeping... ', cls);
                    } else {
                        l.warn('Removing... ', cls);
                    }
                });

                newClassList.push(targetSelector + '-' + actionClass);
                target.className = newClassList.join(' ');

                l.debug(
                    {
                        'selectorParts': selectorParts,
                        'targetSelector': targetSelector,
                        'actionClass': actionClass,
                        'targets': targets,
                        'target': target,
                        'targetIndex': targetIndex
                    }
                );

                l.debug('--------------------------------------');

            });

        } else {

            this.log.warn('No elements found matching selector... Trying the old triggering method.');
            this.setWaypoint(waypoints[namespace], data.waypoint);

        }
    }
}

WaypointTriggerDirective.$inject = ['$window', 'WaypointService', '$log']
export function WaypointTriggerDirective($window, WaypointService, $log) {
    return {
        controller: WaypointTriggerController,
        scope: {
            up: '@',
            down: '@',
            offset: '@',
            waypointTriggers: '=?waypointTrigger'
        },
        link: function (scope, element, attrs, ctrl) {

            // $log.info([scope, element, attrs, ctrl]);

            var callback = angular.bind(ctrl, ctrl.processWaypoint);
            /*jshint -W031 */
            new $window.Waypoint({
                element: element[0],
                handler: WaypointService.getHandlerSync(scope, callback),
                offset: scope.offset || 0
            });

            /*jshint +W031 */
        }
    }
}
