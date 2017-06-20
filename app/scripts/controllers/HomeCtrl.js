(function() {
    function HomeCtrl(Room, $scope) {
      rooms = Room.all;
      this.rooms = rooms
    }

    angular
        .module('blocChat')
        .controller('HomeCtrl', ['Room', '$scope', HomeCtrl]);
})();
