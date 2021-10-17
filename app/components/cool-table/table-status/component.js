import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { AvailableStatus } from '../../../models/table-row';

export default class CoolTableComponent extends Component {
    get showCircle() {
        return this.args.value === AvailableStatus;
    }
}
