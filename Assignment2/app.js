(function() {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyController', ToBuyController)
  .controller('AlreadyBoughtController', AlreadyBoughtController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyController.$inject = ['ShoppingListCheckOffService'];

  function ToBuyController(ShoppingListCheckOffService) {
    var toBuyList = this;
    toBuyList.items = ShoppingListCheckOffService.getItems();

    toBuyList.itemName = "";
    toBuyList.itemQuantity = "";

    toBuyList.addItem = function (itemName,itemQuantity,itemIndex) {
      ShoppingListCheckOffService.addItem(itemName,itemQuantity,itemIndex);
    }
  }

  AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

  function AlreadyBoughtController(ShoppingListCheckOffService) {
    var boughtItems = this;
    boughtItems.items = ShoppingListCheckOffService.getBoughtItems();
  }

  function ShoppingListCheckOffService() {
    var service = this;

    var toBuyItems = [
    {
      name: "Milk",
      quantity: "2"
    },
    {
      name: "Donuts",
      quantity: "200"
    },
    {
      name: "Cookies",
      quantity: "300"
    },
    {
      name: "Chocolate",
      quantity: "5"
    }
    ];

    var boughtItems = [];

    service.addItem = function(itemName,itemQuantity,itemIndex) {
      var item = {
        name: itemName,
        quantity: itemQuantity
      };
      boughtItems.push(item);
      toBuyItems.splice(itemIndex, 1);
      };

    service.getItems = function () {
      return toBuyItems;
    };

    service.getBoughtItems = function () {
      return boughtItems;
    };

  }

}());
