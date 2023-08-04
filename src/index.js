import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'


export default class StatusItemTextPlugin extends BasePlugin {

    /** Plugin info */
    static id = "status-item-text"
    static name = "Status Item Text Plugin"
    static description = "A Vatom Spaces plugin to test Status Item Text."

    /** Called on load */
    onLoad() {

        // Create a button in the toolbar
        this.menus.register({
            icon: this.paths.absolute('button-icon.png'),
            text: 'Btn A',
            action: () => this.onButtonPress()
        })

    }

    /** Called when the user presses the action button */
    onButtonPress() {

        // Show alert
        this.menus.alert(`Hello from ${this.constructor.name} version ${require('../package.json').version}!`, 'Hello world!', 'info')

    }

}
