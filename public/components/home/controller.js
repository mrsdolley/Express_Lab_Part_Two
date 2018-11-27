"use strict";

{
    angular.module('app')
        .controller("HomeController", function(HomeService){
            const $ctrl = this;

        //     $HomeService.get('get').then(response => {
        //         console.log(response);
        // })

        function changes(response) {
            $ctrl.items = response.data;
          }   

          $ctrl.updateItem = (item) => {
            HomeService.updateItem(item).then(changes);
          };

          HomeService.getData().then(changes);

          $ctrl.removeItem = (id) => {
            HomeService.removeItem(id).then(changes);
          };


          $ctrl.postData = (addItem) => {
              HomeService.postData(addItem).then(changes);
          };

    })
}