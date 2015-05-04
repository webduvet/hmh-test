angular.module("common.data",[])

/**
 * simulates the extrnal data resource
 */
.provider('data', function($injector){
	var inj = angular.injector(['ng']);
	var $http = inj.get('$http');

	var dataP = $http.get('http://localhost:3001/content.json');
	var _content;

	dataP
		.then(function(response){
			// now we have the json content
			_content = response;
		});

	this.$get = ['$q', function($q){
		return {
			promise: dataP,
			data: _content
		};
	}];

})

.service('searchDb', function(){


  return {
    /**
     * reaturns the searched content - fake search
	 *
	 * @param {string} query, does nothing - just a fake
	 * @param {int} mage number, page contains 5 records 
     *
     * @returns {Promise} array of records from db
     */
    searchContent:
      function(query, page){
        // TODO do some housekeeping for parameters
				// defaults
		var
            apipoint = 'http://localhost:3001/content?page=',
            url = apipoint + page,
            result;

        return $http.get(url);
      }
  };
})

;
