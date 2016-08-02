/**
 * @name HomeController
 * @memberof controller
 *
 * @summary
 * Displays the home section of the application.
 *
 * @description
 * An example of an controller.
 *
 */
(function() {
    'use strict';

    angular
        .module('app')
        .controller('HomeController', Controller);

    //Controller.$inject = ['$log'];

    /* @ngInject */
    function Controller($log) {
        var vm = this;

        vm.openDialog = function(){
            alert('Hi again!');
        }

        $log.debug('HomeController - loaded!');
    }
})();
