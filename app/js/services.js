'use strict';

/* Services */


// Demonstrate how to register services
// In this case it is a simple value service.
angular.module('myApp.services', ['LocalStorageModule'])

    .value('version', '0.1')

    // Factory that communicates with Youtube API
    .factory('Youtube',  ['$http', function($http) {

        // Create the query url for the Youtube api
        var getUrl = function(query) {
            return 'http://gdata.youtube.com/feeds/api/videos?q=' + query + '&alt=json';
        };

        return {
            search: function(term, callback) {
                return $http.get(getUrl(term)).success(callback);
            }
        };

    }])

    // Factory that uses that interacts with Localstorage API (HTML 5)
    // and has a fallback with cookies for older browsers
    .factory('localStorage', ['localStorageService', function(localStorageService) {

        return {
            add: function(key, value) {
                localStorageService.add(key, value);
            },

            get: function(key) {
                return localStorageService.get(key);
            }
        };

    }])

    .factory('Playlist',  ['localStorage', function(localStorage) {

        var list = [];

        return {
            add: function(video){

                var isPresent = false;
                list = localStorage.get('list') || [];

                for (var i = list.length-1; i >= 0; i--) {

                    if (list[i].$$hashKey === video.$$hashKey) { // if it's already in the list
                        isPresent = true;
                        break;
                    }
                }

                if(!isPresent){
                    list.push(video);
                    localStorage.add('list',JSON.stringify(list));
                }

                return list;
            },
            getAll: function(){
                return localStorage.get('list');
            },
            reset: function(){
                localStorage.add('list',[]);
                return [];
            }

        };

    }]);

