var app=angular.module('app',[]);
app.filter('slice',function(){
  return function(input,start,end){
    //console.log(input);
    return input.slice(start,end);
  }
});
app.controller('ctr1',function($scope,$http){
  $scope.add=0;
  $scope.start=0;
  $scope.end=$scope.start+3;
  $scope.years=[];
  $scope.values=[];
  $http.get("part_1_json.json").success(function(data){
    Object.keys(data).forEach(function(key) {
         $scope.years.push(key);
         $scope.values.push(data[key]);
         $scope.arr=data;
  });
  $scope.yea;
  $scope.search=function(year){
    console.log(year);
  $scope.start=$scope.years.indexOf(year);
  $scope.end=$scope.start+1;
  }
  $scope.pages=[];
  for(var i=0;i<($scope.values.length)/3;i++){
      $scope.pages.push(i+1);
  }
  $scope.click=function(a){
    $scope.start=(a-1)*3;
    $scope.end=parseInt($scope.start)+3;
  }
});
});
