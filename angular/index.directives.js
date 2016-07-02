import {WaypointTargetDirective} from './directives/waypoint-target/waypoint-target.directive';
import {WaypointTriggerDirective} from './directives/waypoint-trigger/waypoint-trigger.directive';
angular.module('app.directives')
	.directive('waypointTarget', WaypointTargetDirective)
	.directive('waypointTrigger', WaypointTriggerDirective);
