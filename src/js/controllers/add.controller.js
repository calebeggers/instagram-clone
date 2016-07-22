function AddController ($scope, $http, SERVER) {
	
	$scope.submit = function (photo) {
		photo.likes = 0;
		$http.post(SERVER.URL, photo).then(function(res){
			console.log(res)
		})
		$scope.photo = {};
	}
};

AddController.$inject = ['$scope', '$http', 'SERVER'];
export { AddController };