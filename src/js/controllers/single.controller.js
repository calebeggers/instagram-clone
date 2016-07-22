function SingleController ($scope, $stateParams, $http, SERVER) {
	$scope.singlePhoto = {};

	init();
	function init () {
		$http.get(SERVER.URL + $stateParams.photoId).then( (res) => {
			$scope.singlePhoto = res.data;
		}
	)};

	
	$scope.count = function () {

		$scope.singlePhoto.likes++

		$http.put(SERVER.URL + $stateParams.photoId, {
			likes: $scope.singlePhoto.likes
		})
		return $scope.singlePhoto.likes;
	};

	$scope.likes = function (currCount) {
		if (currCount === 1) {
			return "Like"
		} else {
			return "Likes"
		}
	};
};

SingleController.$inject = ['$scope', '$stateParams', '$http', 'SERVER'];
export { SingleController };