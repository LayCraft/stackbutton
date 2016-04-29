sbapp.directive('createProject', function () {
  return {
    restrict: 'E',
    replace: true,
    transclude: true,
    scope: {title: '@', template: '@', options: '@'},
    template: '' +
    '<md-card style="max-width: 1200px;">'+
    '<div layout="row" layout-padding>'+
    '<p class="md-headline">Create New Project</p>'+
    '</div>'+
    '<form name="userForm">'+
    '<!-- Project Name -->'+
    '<md-card-content>'+
    '<md-input-container>'+
    '<label>Project Name</label>'+
    '<input name="projectName" id="projectName" type="text" ng-model="vm.projectName">'+
    '<div ng-messages="userForm.lastName.$error" ng-show="userForm.lastName.$dirty">'+
    '<div ng-message="required">This is required!</div>'+
    '</div>'+
    '</md-input-container>'+
    '</md-card-content>'+
    '<!-- Project Type -->'+
    '<md-card-content>'+
    '<md-input-container>'+
    '<label>Type</label>'+
    '<input name="projectType" id="projectType" type="text" ng-model="vm.projectType">'+
    '</md-input-container>'+
    '</md-card-content>'+
    '<!-- Project Description -->'+
    '<md-card-content>'+
    '<md-input-container>'+
    '<label>Description</label>'+
    '<textarea name="projectDescription" id="projectDescription" type="text" ng-model="vm.projectDescription"></textarea>'+
    '</md-input-container>'+
    '</md-card-content>'+
    '<!-- Project TimeLine -->'+
    '<md-card-content>'+
    '<md-input-container>'+
    '<label>Start-Date</label>'+
    '<input name="projectTimeLine" id="projectStartDate" type="text" ng-model="vm.projectStartDate">'+
    '</md-input-container>'+
    '<md-input-container>'+
    '<label>End-Date</label>'+
    '<input name="projectTimeLine" id="projectEndDate" type="text" ng-model="vm.projectEndDate">'+
    '</md-input-container>'+
    '</md-card-content>'+
    '</form>'+
    '<md-divider></md-divider>'+
    '<md-card-actions layout="row" layout-align="end center">'+
    '<md-button class="md-warn" ui-sref="home.projects">Cancel</md-button>'+
    '<md-button>Save</md-button>'+
    '<md-button class="md-primary">Next</md-button>'+
    '</md-card-actions>'+
    '</md-card>',

    compile: function (element, attrs, linker) {
      return function (scope, element) {
        linker(scope, function (clone) {
          element.append(clone);
        });
      };
    }
  };
});