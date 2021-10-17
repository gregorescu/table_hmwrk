import { tracked } from '@glimmer/tracking';

export const AvailableStatus = "available";

export default class BaseRowModel {
  @tracked isSelected = false;
}