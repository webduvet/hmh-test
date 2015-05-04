angular.module('templates-app', ['about/about.tpl.html', 'home/home.tpl.html']);

angular.module("about/about.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("about/about.tpl.html",
    "<h1>About</h1>\n" +
    "\n" +
    "<p>This is what this is about.</p>");
}]);

angular.module("home/home.tpl.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("home/home.tpl.html",
    "<h1>Mockup Search Page</h1>\n" +
    "\n" +
    "<p>This page display search results, use page next, previous to navigate and sort dropdown to try different order</p>\n" +
    "\n" +
    "<p>\n" +
    "    <button class=\"btn btn-primary\" ng-click=\"model.loadResults()\">Search</button>\n" +
    "</p>\n" +
    "\n" +
    "<div class=\"btn-group\">\n" +
    "  <button type=\"button\" class=\"btn btn-danger\">Order By</button>\n" +
    "  <button type=\"button\" class=\"btn btn-danger dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\">\n" +
    "    <span class=\"caret\"></span>\n" +
    "    <span class=\"sr-only\">Toggle Dropdown</span>\n" +
    "  </button>\n" +
    "  <ul class=\"dropdown-menu\" role=\"menu\">\n" +
    "	  <li ng:repeat=\"item in model.orderStyles\"><a href ng:click=\"model.reOrder(item)\">{{item}}</a></li>\n" +
    "  </ul>\n" +
    "</div>\n" +
    "\n" +
    "<div class=\"panel-group\" id=\"accordion\" role=\"tablist\" aria-multiselectable=\"true\">\n" +
    "\n" +
    "  <div class=\"panel panel-default\" ng:repeat=\"item in model.dataList\">\n" +
    "	  <div class=\"panel-heading\" role=\"tab\" id=\"item{{$index}}\">\n" +
    "      <h5 class=\"panel-title\">\n" +
    "		  <a data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapse{{$index}}\" aria-expanded=\"false\" aria-controls=\"collapse{{$index}}\">\n" +
    "			  <div class=\"row\">\n" +
    "				  <div class=\"col-sm-3\">{{item.content.resource.resource_type}}</div>\n" +
    "				  <div class=\"col-sm-3\">{{item.content.resource.display_title}}</div>\n" +
    "				  <div class=\"col-sm-3\">{{item.content.resource.media_type}}</div>\n" +
    "				  <div class=\"col-sm-3\">{{item.content.resource.language}}</div>\n" +
    "			  </div>\n" +
    "        </a>\n" +
    "      </h5>\n" +
    "    </div>\n" +
    "	<div id=\"collapse{{$index}}\" class=\"panel-collapse collapse\" role=\"tabpanel\" aria-labelledby=\"headingOne\">\n" +
    "      <div class=\"panel-body\">\n" +
    "		  <p>\n" +
    "		  <label>meaningful description</label>\n" +
    "		  {{item.content.resource.meaningful_description}}\n" +
    "		  </p>\n" +
    "		  <p>\n" +
    "		  <label>additional text</label>\n" +
    "		  {{item.content.resource.additional_text}}\n" +
    "		  </p>\n" +
    "		  <p>\n" +
    "		  <label>categorization</label>\n" +
    "		  {{item.content.resource.categorization}}\n" +
    "		  </p>\n" +
    "		  <p ng:show=\"!!item.content.resource.standards\">\n" +
    "		  <label>standards</label>\n" +
    "		  <ul>\n" +
    "			  <li ng:repeat=\"item in item.content.resource.standards.standard\">\n" +
    "			  {{item.id || item}}\n" +
    "			  </li>\n" +
    "		  </ul>\n" +
    "		  </p>\n" +
    "		  <div class='row center-block' style=\"padding: 5px;\" ng-show=\"{{item.content.resource.viewable}}\">\n" +
    "			  <button class='btn btn-default center-block' ng:click=\"model.viewDetail(item)\">detail</button>\n" +
    "		  </div>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "\n" +
    "</div>\n" +
    "<nav>\n" +
    "  <ul class=\"pager\">\n" +
    "    <li><a href=\"#\" ng:click=\"model.previous()\">Previous</a></li>\n" +
    "    <li><a href=\"#\" ng:click=\"model.next()\">Next</a></li>\n" +
    "  </ul>\n" +
    "</nav>\n" +
    "");
}]);
