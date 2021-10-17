import { tracked } from '@glimmer/tracking';

export const AvailableStatus = "available";

export default class TableRow {
  @tracked isSelected = false;
  name; //'7za.exe',
  device; //'Baratheon',
  path; //'\\Device\\HarddiskVolume1\\temp\\7za.exe',
  status; //'scheduled',

  constructor(args) {
    this.name = args.name;
    this.device = args.device;
    this.path = args.path;
    this.status = args.status;
  }
}