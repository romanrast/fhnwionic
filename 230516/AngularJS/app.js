var app = angular.module('myApp', []); //my app name of the module, [] is the list of dependencies


 app.directive('moviequotes', function () {
    	return {
    		restrict: 'E', // E = html element, A = attribute
    		templateUrl: 'moviequotes.html'
    	};
    });

 app.directive('moviequotesa', function () {
    	return {
    		restrict: 'A', //E = html element, A=attribute
    		templateUrl: 'moviequotes.html'
    	};
    });


app.controller('MyCtrl', ['$scope', function ($scope) {

	$scope.name = 'Tom Hanks';
	$scope.movie = 'Forrest Gump';
	$scope.year = 1994;

	$scope.fullInfo = function(){
		return $scope.name + " palyed in " + $scope.movie + " which was released in " + $scope.year;
	}

	$scope.showImage = true;
	$scope.forrestGumpImage = "img/runForrest.gif";

	$scope.toggleShow = function(){
      $scope.showImage = !$scope.showImage;
    };


    $scope.form = {};
    $scope.addMovie = function(){
    	$scope.movies.push($scope.form);
    	$scope.form = {}; //prevent dublicate entry 
    }

    $scope.movies = [
	    {
	    	actor: 'Tom Hanks',
	    	title: 'Forrest Gump',
	    	year: 1994
	    },
	     {
	    	actor: 'Tom Hanks',
	    	title: 'Saving Private Ryan',
	    	year: 1998
	    },
	    {
	    	actor: 'Tom Hanks',
	    	title: 'You\'ve Got Mail',
	    	year: 1998
	    },
	    {
	    	actor: 'Leonardo DiCaprio',
	    	title: 'Catch Me If You Can',
	    	year: 2002
	    },
	    {
	    	actor: 'Leonardo DiCaprio',
	    	title: 'The Wolf of Wall Street',
	    	year: 2013
	    }
    ]
	
}]);