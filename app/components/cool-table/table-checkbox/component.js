import Component from '@glimmer/component';
// import { tracked } from '@glimmer/tracking';
// import { AvailableStatus } from '../../../models/table-row';

export default class CoolTableComponent extends Component {
    get checked() {
        return !!this.args.value;
    }
    set checked(v) {

    }

    get readOnly() {
        return false;
    }
}
