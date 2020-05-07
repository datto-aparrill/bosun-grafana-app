import _ from 'lodash';

class BosunIncidentListPanelEditorCtrl {
  panelCtrl: any;
  panel: any;
  $q: any;
  datasourceSrv: any;
  datasource: any;
  datasources: any;
  templateSrv: any;

  /** @ngInject */
  constructor($scope, $rootScope, $q, uiSegmentSrv, datasourceSrv, templateSrv) {
    $scope.editor = this;
    this.panelCtrl = $scope.ctrl;
    this.panel = this.panelCtrl.panel;
    this.$q = $q;
    this.datasourceSrv = datasourceSrv;
    var datasources = _.filter(this.datasourceSrv.getMetricSources(), (datasource: any) => {
      return datasource.meta.id === 'bosun-datasource';
    });
    this.datasources = _.map(datasources, 'name');
    if (!this.panel.datasource) {
      this.panel.datasource = this.datasources[0];
    }
    this.datasourceSrv.get(this.panel.datasource).then((datasource: any) => {
      this.datasource = datasource;
      this.panelCtrl.refresh();
    });
    this.templateSrv = templateSrv;
    this.panel.showMutli = this.panel.showMutli;
  }

  datasourceChanged() {
    this.panelCtrl.refresh();
  }
}

export function bosunIncidentListPanelEditor() {
  return {
    restrict: 'E',
    scope: true,
    templateUrl: 'public/plugins/bosun-app/panels/incident-list/editor.html',
    controller: BosunIncidentListPanelEditorCtrl,
  };
}
