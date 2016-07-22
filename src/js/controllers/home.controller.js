function HomeController ($scope, $http, SERVER) {

  $scope.photos = [];

  init();

  function init () {
    $http.get(SERVER.URL + "?limit=24").then( (res) => {
      $scope.photos = res.data;
    });
  }

}

HomeController.$inject = ['$scope', '$http', 'SERVER'];
export { HomeController };