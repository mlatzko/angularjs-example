/**
 * @name ExampleController
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
        .controller('ExampleController', Controller);

    Controller.$inject = ['$log'];

    /* @ngInject */
    function Controller($log) {
        var vm = this;

        $log.debug('ExampleController - loaded!');
    }
})();
