'use strict';

/* Controllers */

angular.module('myApp.controllers', []).

  controller('HomeCtrl', ['$scope','Youtube','Playlist',function($scope, Youtube,Playlist) {

    $scope.result = [];
    $scope.playlist = Playlist.getAll();

    $scope.searchVideo = function(){

        Youtube.search($scope.term, function(response){

            $scope.result.length = 0; // Reset the search array

            var entries = response.feed.entry || [];

            angular.forEach(entries, function(value, key){
                $scope.result.push(value); // Only get the entries
            });

        });
    };

    $scope.addVideo = function(video){
        $scope.playlist = Playlist.add(video);
    };

    $scope.resetPlaylist = function(){

    };

  }])
  .controller('MyCtrl2', [function() {

  }]);
