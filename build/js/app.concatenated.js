angular.module('app.admin', []);

angular.module('app.blog',[
    'blogers',
    'articles',
    'contacts'
    ]);
angular.module('app.admin.contentManager', []);
angular.module('app.admin.userInfo', []);
angular.module('app.blog.articles',[]).config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  // $urlRouterProvider.otherwise("/state1");
  // //
  // // Now set up the states
    $stateProvider
        .state('articles', {
            url: '/articles1',
            templateUrl: 'js/app/blog/articles/articlesDirective.html'
        })
});
angular.module('app.blog.blogers',[]).config(function ($stateProvider, $urlRouterProvider) {

// For any unmatched url, redirect to /state1
// $urlRouterProvider.otherwise("/state1");

    $stateProvider
        .state('blogers', {
            abstract: true,
            url: '/blogers',
            templateUrl: 'js/app/blog/blogers/blogersDirective.html',
            controller: 'blogersCtrl'
        })
        .state('blogers.list', {
            url: '',
            templateUrl: 'js/app/blog/blogers/blogersDirective.list.html',
        })
        .state('blogers.detail', {
            url: '/{blogerId:[0-9]{1,4}}',
            templateUrl: 'js/app/blog/blogers/blogersDirective.list.detail.html',
            controller: 'blogersDetailCtrl'
            //controller: function($scope) {
            //$scope.items = ['A', 'List', 'Of', 'Items'];
            //}
    })
});
angular.module('app.blog.contacts',[])
// angular.module('app',[
//     'ui.router',
//     'app.admin',
//     'app.blog'
// ]);

angular.module('app',[
    'ui.router',
    'app.admin'
    //'app.blog'
]);

angular.module('app.admin', ['app.admin.contentManager', 'app.admin.userInfo']);
//angular.module('app.blog', ['app.blog.articles', 'app.blog.blogers']);
angular.module('contentManager').controller('cmCtrl', ['$scope', function ($scope) {
    $scope.check = 'check value from contentManagerCtrl modified 5'; 
    console.log('content manager ready...')
}]);


angular.module('userInfo').controller('userInfoCtrl', ['$scope', function ($scope) {
    $scope.check = 'check value from userInfo controller'; 
    console.log('user info ready...')
}]);





angular.module('blogers').controller('blogersCtrl', ['$scope', '$stateParams', function ($scope,  $stateParams) {

    // console.log($stateParams, '$stateParams')

    // $scope.blogerId = $stateParams.blogerId;

    // console.log($scope)

    console.log('blogers main Ctrl')
}]);
angular.module('blogers').controller('blogersDetailCtrl', ['$scope', '$stateParams', function ($scope,  $stateParams) {


    //console.log($stateParams, '$stateParams')

    $scope.blogerId = $stateParams.blogerId;

    //console.log($scope)

    console.log($scope.blogerId,'blogers detail controller')
}]);




