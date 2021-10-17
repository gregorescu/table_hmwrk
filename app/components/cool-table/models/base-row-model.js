import { tracked } from '@glimmer/tracking';

export default class BaseRowModel {
  @tracked isSelected = false;
}