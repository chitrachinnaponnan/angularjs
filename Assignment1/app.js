(function() {
  angular.module('FoodItemsApp',[])
  .controller('FoodItemsController',FoodItemsController)
  FoodItemsController.$inject = ['$scope'];
  function FoodItemsController($scope) {
    $scope.fooditems="";
    $scope.noOfFoodItems=0;
    $scope.status="";
    $scope.calculateNoOfFoodItems = function() {
    if($scope.fooditems == "")
      $scope.status = "Please enter data first";
    return;
    var totalItems = parseAndCalculate($scope.fooditems);
    $scope.noOfFoodItems = totalItems;
    if(totalItems<=3)
      $scope.status = "Enjoy";
    else {
      $scope.status = "Too much";
    }
  };
  function parseAndCalculate(string) {
    var totalNumberOfFoodItems = 0 ;
    var res = string.split(",");
    for(var i = 0 ; i <res.length;i++){
      totalNumberOfFoodItems++;
    }
    return totalNumberOfFoodItems;
  }
}
}());
