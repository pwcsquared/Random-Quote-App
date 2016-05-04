var app = angular.module("quoteApp",[]);

app.factory("getQuote",function($http){
  var obj = {};
  obj.myFunc = function(){
    var config = {
      headers: {"X-Mashape-Key": 'IJOV3xrIjCmshFcgsLQaeiB14q7Ap12dLt1jsn7CscrC4AZ2Vx'}
    };
    var url = "https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous";
    return $http.get(url, config);
  };
  return obj;
});

app.controller("myCtrl",function($scope,$http, getQuote){
  $scope.quote = "";
  $scope.author = "";
  $scope.tweet ='https://twitter.com/intent/tweet';
  $scope.newQuote = function(){
    getQuote.myFunc().success(function(response){
      $scope.quote = response.quote;
      $scope.author = response.author;
    });
  }
});