import Component from '@glimmer/component';

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
