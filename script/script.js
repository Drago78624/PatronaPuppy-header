document.getElementById("blog").addEventListener("click", () => {
  const dropdownDisplay = document.querySelector(
    ".navbar-dropdown__option--menu"
  );
  dropdownDisplay.classList.toggle("u-display-none");
  document.getElementById("blog").classList.toggle("u-color-black");
});

angular.module("patrona", []).controller("mainController", [
  "$scope",
  function ($scope) {
    $scope.count = 0;
    $scope.hamburger_menu = undefined;
    $scope.blog_dropdown = undefined;
    $scope.myFunc = function () {
      $scope.count++;
    };
  },
]);
