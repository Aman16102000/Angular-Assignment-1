(function()
{
    angular.module("lunchApp",[])
    .controller("lunchController",lunchController);

    lunchController.$inject=['$scope'];
    function lunchController($scope)
    {
        $scope.lunchMessage="";
        $scope.items="";
        $scope.lunchChecker=function()
        {
            var message=$scope.lunchMessage;
            var items=$scope.items;
            var itemsLen=items.split(",").length;
            if(items==="")
            message="Enter something";
            else if(itemsLen<4)
            message="Enjoy!";
            else
            message="To much!";

            $scope.lunchMessage=message;

            console.log(itemsLen);
        }
    }
})();