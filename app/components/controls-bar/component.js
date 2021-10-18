import Component from '@glimmer/component';

export default class CoolTableComponent extends Component {
  set checked(checked) {
    if (this.args.selectedCount === this.args.maximumCount) {
      this.args.deselectAll();
    } else {
      this.args.selectAll();
    }
  }

  get checked() {
    return this.args.selectedCount === this.args.maximumCount;
  }

  get indeterminate() {
      return this.args.selectedCount > 0 && this.args.selectedCount < this.args.maximumCount;
  }

  get checkboxLabel() {
    let maximumCount = this.args.maximumCount;
    let label = 'Select All';

    let count = this.args.selectedCount;
    if (count === 0) {
      label = 'None Selected';
    } else if (count === maximumCount) {
      label = 'All Selected';
    } else {
      label = `Selected ${count}`;
    }

    return label;
  }
}
