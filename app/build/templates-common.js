angular.module('templates-common', ['modal/modal.alert.tpl.html', 'modal/modal.confirm.tpl.html']);

angular.module("modal/modal.alert.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/modal.alert.tpl.html",
    "<div class=\"modal-header\">\n" +
    "	<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\" ng:click=\"ok()\">&times;</button>\n" +
    "	<h3 class=\"modal-title\">{{item.display_title}}</h3>\n" +
    "</div>\n" +
    "<div class=\"modal-body\">\n" +
    "	<p ng:repeat=\"key in keys\">\n" +
    "	<label>{{key}}</label>\n" +
    "	{{item[key]}}\n" +
    "	</p>\n" +
    "</div>\n" +
    "<div class=\"modal-footer\">\n" +
    "	<button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\n" +
    "</div>\n" +
    "");
}]);

angular.module("modal/modal.confirm.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("modal/modal.confirm.tpl.html",
    "<div class=\"modal-header\">\n" +
    "		<h3 class=\"modal-title\">{{content.title}}</h3>\n" +
    "	</div>\n" +
    "	<div class=\"modal-body\">\n" +
    "		{{content.body}}\n" +
    "	</div>\n" +
    "	<div class=\"modal-footer\">\n" +
    "		<button class=\"btn btn-primary\" ng-click=\"ok()\">OK</button>\n" +
    "		<button class=\"btn btn-warning\" ng-click=\"cancel()\">Cancel</button>\n" +
    "	</div>\n" +
    "");
}]);
