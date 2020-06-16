var app = angular.module('myApp', []); 
app.controller('todoCtrl', function($scope) {
    $scope.todoList = [];

    $scope.todoAdd = function() {
        $scope.todoList.push({todoText:$scope.todoInput, done:false,});
        $scope.todoInput = "";
    };

    $scope.remove = function() {
        $scope.todoList.splice(this.$index,1);
    };

    $scope.complete = function() {
        var oldList = $scope.todoList;
        
        angular.forEach(oldList, function(x) {
            x.done = !x.done;
            let comp = document.querySelector('#comp');
            if(x.done) {
              comp.className = 'tasks__item__toggle--completed';  
            }
            else comp.className = 'tasks__item__toggle';
               
        });
    };
});