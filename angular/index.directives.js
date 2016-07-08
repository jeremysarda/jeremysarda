import {MdHeaderScrollDirective} from './directives/md-header-scroll/md-header-scroll.directive';
import {WaypointTargetDirective} from './directives/waypoint-target/waypoint-target.directive';
import {WaypointTriggerDirective} from './directives/waypoint-trigger/waypoint-trigger.directive';
angular.module('app.directives')
	.directive('mdHeaderScroll', MdHeaderScrollDirective)
    .directive('waypointTarget', WaypointTargetDirective)
    .directive('waypointTrigger', WaypointTriggerDirective);
