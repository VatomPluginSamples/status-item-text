
// NOTE:
// For manual upload of plugin use the following instead of
// 'import  and 'export default' statements.
// module.exports = class ...
//
// For sideloading from http://localhost:9000/plugin.js via yarn start use the following
// import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'
// export default class ...

module.exports = class StatusItemTextPlugin extends BasePlugin {

	// Plugin info
	static get id() {
		return "Test Plugin";
	}
	static get name() {
		return "Test Plugin";
	}
	static get description() {
		return "Plugin to test some functionalities.";
	}


	async onLoad() {
		// Globl configuration
		this.menus.register({
			id: 'EYFoundry.test-config',
			section: 'plugin-settings',
			panel: {
					fields: [
							{ type: 'text', id: 'objectID', name: 'Object ID', help: 'Set the object ID.' },
							{ type: 'text', id: 'imageURL', name: 'Image URL', help: 'Set the image URL.' }                                                            
					]
			}
		});

		const menuId = await this.menus.register({
			id: 'EYFoundry.get-help',
			title: 'Test',
			text: 'Test',
			adminOnly: false,
			currentUser: true,
			inAccordion: true,
			section: 'controls',
			icon: '',
			action: e => this.testPlugin(e)
		});

		const id = await this.objects.createStatusItem({
			userID: 'vatominc:brapm9i',
			size: 0.2, width: 10, height: 10
		},{
			type: 'text', text: 'Hello', textBold: true
		});
	}


	async testPlugin() {
		const objectID = this.getField('objectID') || '';
		const imageURL = this.getField('imageURL') || '';
		await this.objects.update(objectID, {url: imageURL}, false);                
	}

	onUnload() {}
}

 