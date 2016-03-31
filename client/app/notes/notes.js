(function() {
  angular.module('notely.notes', [
    'ui.router'
  ])
  .config(notesConfig);

  notesConfig.$inject = ['$stateProvider'];
  function notesConfig($stateProvider) {
    $stateProvider

      .state('notes', {
        url: '/notes',
        templateUrl: '/notes/notes.html',
        controller: NotesController
      })

      .state('notes.form', {
        url: '/:noteId',
        templateUrl: '/notes/notes-form.html'
      });
  }

  NotesController.$inject = ['$scope', '$state', 'NotesService'];
  function NotesController($scope, $state, NotesService) {
    $scope.note = {};
    NotesService.fetch().then(function() {
      $scope.notes = NotesService.getNotes();
    });

 // $scope.note = {
 //   title: 'Static Note',
 //   body_html: 'Something Something Something'
 // };
 $scope.save = function(){
    NotesService.create($scope.note);
 };
 $scope.clearNote = function(){
   $scope.note = {};
 };
    $state.go('notes.form');
  }
})();
