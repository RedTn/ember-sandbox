import Controller from '@ember/controller';
import { alias } from '@ember/object/computed';

export default Controller.extend({
    sideNavOpen: false,
    appModel: alias('model'),
    actions: {
        toggleSideNav() {
            this.toggleProperty('sideNavOpen');
        }
    }
});
