var app = angular.module('todoApp', [])
    app.controller('todoCtrl', function($scope){
        
        const tasks = JSON.parse(localStorage.getItem('tasks'));
        $scope.tasks = Array.isArray(tasks) ? tasks : [];
        
        localStorage.setItem('tasks', JSON.stringify($scope.tasks));
        
        $scope.newTask = {
                id: cuid(),
                addItem: '',
                addDesc: '',
                addDate: '',
                done: false
            };
        
/*************************************************/
        
        $scope.add = function(){
            
            $scope.newTask.id = cuid();
            $scope.tasks.push($scope.newTask);
            
            $scope.newTask = {
                id: cuid(),
                addItem: '',
                addDesc: '',
                addDate: '',
                done: false
            };
            
            localStorage.setItem('tasks', JSON.stringify($scope.tasks));
        };
        
/*************************************************/
        
        $scope.save = function(){
            localStorage.setItem('tasks', JSON.stringify($scope.tasks));
        };
        
/*************************************************/
        
        $scope.delete = function($index){
            $scope.task.splice(this.$index, 1);
            //localStorage.setItem('tasks', JSON.stringify($scope.tasks));
        };
        
/*************************************************/
        
// this is the end, don't get rid of it!        
});