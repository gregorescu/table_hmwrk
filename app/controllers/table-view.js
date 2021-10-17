import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import TableRow, { AvailableStatus } from '../models/table-row';

const FieldTypesMap = Object.freeze({
  selected: {
    dataKey: 'isSelected',
    dependencyDataKey: 'status',
    component: 'cool-table/table-checkbox',
    customClass: 'table-cell__selected',
    headerText: '',
  },
  name: {
    dataKey: 'name',
    component: 'cool-table/table-text',
    customClass: 'table-cell__name',
    headerText: 'Name',
  },
  device: {
    dataKey: 'device',
    component: 'cool-table/table-text',
    customClass: 'table-cell__device',
    headerText: 'Device',
  },
  path: {
    dataKey: 'path',
    component: 'cool-table/table-text',
    customClass: 'table-cell__path',
    headerText: 'Path',
  },
  status: {
    dataKey: 'status',
    component: 'cool-table/table-status',
    customClass: 'table-cell__status',
    headerText: 'Status',
  },
});

export default class TableViewController extends Controller {
  @tracked tableRowsData;
  @tracked tableConfig;

  get selectedCount() {
    let data = this.tableRowsData;
    let count = 0;
    if (data && data.length) {
      for (let i = 0; i < data.length; i++) {
        if (data[i].isSelected) {
          count++;
        }
      }
    }
    return count;
  }
  get maximumCount() {
      return this.tableRowsData ? this.tableRowsData.length : 0;
  }

  setupTableData(tableData) {
    this.tableConfig = this.createTableConfig(tableData);
    this.tableRowsData = this.convertTableData(tableData);
  }

  convertTableData(tableData) {
    let rows = [];

    for (let i = 0; i < tableData.length; i++) {
      rows.push(new TableRow(tableData[i]));
    }

    return rows;
  }

  createTableConfig(tableData) {
    let tableRow = tableData[0];
    let tableConfig = [];

    tableConfig.push(FieldTypesMap["selected"]);
    for (let tableRowKey in tableRow) {
      tableConfig.push(FieldTypesMap[tableRowKey.toLowerCase()]);
    }

    return tableConfig;
  }

  changeAllItemsSelectedState(selected) {
    for (let i = 0; i < this.tableRowsData.length; i++) {
        this.tableRowsData[i].isSelected = selected;
    }
  }

  @action 
  selectAll() {
    this.changeAllItemsSelectedState(true);
  }

  @action
  deselectAll() {
    this.changeAllItemsSelectedState(false);
  }

  @action
  selectRow(rowId) {
    let row = this.tableRowsData[rowId];
    row.isSelected = !row.isSelected;
  }

  @action
  downloadSelected() {
    let pathArray = [];
    for (let i = 0; i < this.tableRowsData.length; i++) {
        let tableRow = this.tableRowsData[i];

        if(tableRow.isSelected && tableRow.status === AvailableStatus) {
            pathArray.push(tableRow.path);
        }
    }

    if(!pathArray.length) {
        window.alert("cannot download non-available item");
    } else {
        window.alert(pathArray.toString());
    }
  }
}
