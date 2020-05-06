import { BosunDatasource } from './datasource';
import { BosunDatasourceQueryCtrl } from './query_ctrl';

class BosunConfigCtrl {
  static templateUrl = 'datasource/partials/config.html';
}

class BosunQueryOptionsCtrl {
  static templateUrl = 'datasource/partials/query.options.html';
}

class BosunAnnotationsQueryCtrl {
  static templateUrl = 'datasource/partials/annotations.editor.html';

  showHelp: number;

  constructor() {
    this.showHelp = 0;
  }
}

export {
  BosunDatasource as Datasource,
  BosunDatasourceQueryCtrl as QueryCtrl,
  BosunConfigCtrl as ConfigCtrl,
  BosunQueryOptionsCtrl as QueryOptionsCtrl,
  BosunAnnotationsQueryCtrl as AnnotationsQueryCtrl,
};
