(function() {
    'use strict';

    angular
        .module('app', ['ngRoute', 'ngCookies'])
        .config(routes)
        .run(listener);

    routes.$inject = ['$routeProvider'];
    listener.$inject = ['$rootScope', '$route'];

    /**
     * @name routes
     *
     * @description
     * Application routes configuration.
     *
     * @param {Object} $routeProvider
     */
    function routes($routeProvider) {
        $routeProvider
            .when('/home',{
                title: 'Home',
                templateUrl: 'js/angular/app/components/home/homeView.html'
            })
            .otherwise({ redirectTo: '/home' });
    }

    /**
     * @name listener
     *
     * @description
     * Add listener on route changes to change page title.
     *
     * @param {Object} $rootScope
     * @param {Object} $route
     */
    function listener($rootScope, $route){
        $rootScope.$on('$routeChangeSuccess', function(next, current) {
            if (next !== current) {
                $rootScope.pageTitle = $route.current.title;
            }
        });
    }
})();
