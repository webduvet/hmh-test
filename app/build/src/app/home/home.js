/**
 * Each section of the site has its own module. It probably also has
 * submodules, though this boilerplate is too simple to demonstrate it. Within
 * 'src/app/home', however, could exist several additional folders representing
 * additional modules that would then be listed as dependencies of this one.
 * For example, a 'note' section could have the submodules 'note.create',
 * 'note.delete', 'note.edit', etc.
 *
 * Regardless, so long as dependencies are managed correctly, the build process
 * will automatically take take of the rest.
 */
(function(module) {

    // As you add controllers to a module and they grow in size, feel free to place them in their own files.
    //  Let each module grow organically, adding appropriate organization and sub-folders as needed.
    module.controller('HomeController', function ($scope, $q, Db, mModal) {
        // The top section of a controller should be lean and make it easy to see the "signature" of the controller
        //  at a glance.  All function definitions should be contained lower down.
        var model = this;
        model.someVar = 'blue';
        model.dataList = null;
		model.currentPage = 0;
		model.currentOrderBy = 'resource_type';
		model.orderStyles = ['resource_type', 'media_type', 'display_title', 'language'];
        model.loadResults = loadResults;
		model.next = next;
		model.previous = previous;
		model.orderBy = orderBy;
		model.reOrder = reOrder;
		model.viewDetail = viewDetail;

        init();

        function init() {
            // A definitive place to put everything that needs to run when the controller starts. Avoid
            //  writing any code outside of this function that executes immediately.
        }

        function loadResults() {
			var result = Db.search(model.currentOrderBy, model.currentPage);
			result.then(function(data){
				model.dataList = data.data;
			});
        }

		function next(){
			model.currentPage++;
			loadResults();
		}

		function previous(){
			model.currentPage--;
			loadResults();
		}

		function orderBy(index){
			model.currentOrderBy = model.orderStyles[index];
			loadResulrs();
		}

		function reOrder(query){
			model.currentOrderBy = query;
			loadResults();
		}

		function viewDetail(item){
			console.log(mModal);
			var result = mModal.open({
				title: "Record Details",
				content: item.content.resource
			});
			result.then(function(result){
				console.log(result);
				if(result){
				}
			}, function(reason){
				console.log("reason:", reason);
			});

		}

		

    });

// The name of the module, followed by its dependencies (at the bottom to facilitate enclosure)
}(angular.module("hmhSearch.home")));
