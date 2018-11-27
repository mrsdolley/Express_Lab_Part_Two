"use strict";
angular.module('app')
.service("HomeService", function($http) { 
    const service = this;

    
    service.postData = (addItem) => {
      return $http({
        method: "POST",
        url: "/items",
        data: addItem 
      });
    };

    
    service.updateItem = (item) => {
      return $http({
        method: "PUT",
        url: `/items/${item.id}`, 
        data: item
      });
    };

    
    service.removeItem = (id) => {
      return $http({
        method: "DELETE",
        url: `/items/${id}`  
      });
    };

    
    service.getData = () => {
      return $http({
        method: "GET",
        url: "/items"
      });
    };
  });