import { tracked } from '@glimmer/tracking';
import BaseRowModel from '../components/cool-table/models/base-row-model';

export const AvailableStatus = 'available';

export default class TableRow extends BaseRowModel {
  name; //'7za.exe',
  device; //'Baratheon',
  path; //'\\Device\\HarddiskVolume1\\temp\\7za.exe',
  status; //'scheduled',

  constructor(args) {
    super(args);
    this.name = args.name;
    this.device = args.device;
    this.path = args.path;
    this.status = args.status;
  }
}
