function config ($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.tmpl.html',
      controller: 'HomeController'
    })
    .state('single', {
      url: '/photo/:photoId',
      templateUrl: 'templates/single.tmpl.html',
      controller: 'SingleController'
    })
    .state('add', {
      url: '/add',
      templateUrl: 'templates/add.tmpl.html',
      controller: 'AddController'
    });

  $urlRouterProvider.otherwise('/');
}

config.$inject = ['$stateProvider', '$urlRouterProvider'];
export { config };