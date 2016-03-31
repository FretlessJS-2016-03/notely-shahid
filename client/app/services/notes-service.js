(function() {
      angular.module('notely')
        .service('NotesService', NotesService);

      NotesService.$inject = ['$http'];
      function NotesService($http) {
        var _this = this;
        _this.notes = [];

        _this.fetch = function() {
          return $http.get('http://localhost:3030/notes')
            .then(function(response) {
              _this.notes = response.data;
            },
            function(response){
          console.log('aww, snap:' + response);
            }
          );
        };

        _this.getNotes = function() {
          return _this.notes;
        };

        _this.create = function (note){
          return $http.post('http://localhost:3030/notes', {
            note: note
          }).then(function(response){
            _this.notes.unshift(response.data.note);
          })
        };

      }
    }());
