angular.module('starter.controllers', ['firebase'])

.controller('LoginCtrl', LoginCtrl)

.controller('DashCtrl', DashCtrl)

.controller('ChatsCtrl', ChatsCtrl)

.controller('ChatDetailCtrl', ChatDetailCtrl)

.controller('AccountCtrl', AccountCtrl);

function LoginCtrl(Auth, $state) {
       var user={};
  this.loginWithGoogle = function loginWithGoogle() {
    Auth.$authWithOAuthPopup('google')
      .then(function(authData) {
           
        console.log(authData);
       // user.pname=authData.user.displayName;
          // user.photo=authData.user.profileImageURL;
          console.log(authData.google.displayName);
           user.name=authData.google.displayName;
           user.photo=authData.google.profileImageURL;
          console.log(authData.google.profileImageURL);
        $state.go('tab.dash');
      });
  };

}
LoginCtrl.$inject = ['Auth', '$state'];

function DashCtrl() {}

function ChatsCtrl($scope, Chats) {
  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
}
ChatsCtrl.$inject = ['$scope', 'Chats'];

function ChatDetailCtrl($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
}
ChatDetailCtrl.$inject = ['$scope', '$stateParams', 'Chats'];

function AccountCtrl($scope) {
  $scope.settings = {
    enableFriends: true
  };
}
AccountCtrl.$inject = ['$scope'];
