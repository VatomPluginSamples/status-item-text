/***/
module.exports = class StatusItemTextPlugin extends BasePlugin {


/***
import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'


export default class StatusItemTextPlugin extends BasePlugin {
/***/

	// Plugin info 
	static id = "status-item-text"
	static name = "Status Item Text Plugin"
	static description = "A Vatom Spaces plugin to test Status Item Text."

	// Client instance properties
	myUserId = null;
	myStatusItemId = null;
	myStatusIconId = null;

	async onLoad() {
		this.myUserId = await this.user.getID();
		console.log('myUserId: ', this.myUserId);
	
		// Create a buttons in the toolbar
		this.menus.register({
			icon: this.paths.absolute('button-icon.png'),
			text: 'Toggle Text',
			action: () => this.onBtnA()
		})
		this.menus.register({
			icon: this.paths.absolute('button-icon.png'),
			text: 'Toggle Icon',
			action: () => this.onBtnB()
		})
		this.menus.register({
			icon: this.paths.absolute('button-icon.png'),
			text: 'Show IDs',
			action: () => this.onBtnC()
		})
		
		// Admin settings
		this.menus.register({
			section: 'plugin-settings',
			panel: {
				fields: [{
					id: 'status-item-scale',
					name: 'scale',
					help: 'text scale factor',
					type: 'slider',
					default: 1.0,
					min: 0.1,
					max: 20.0,
					showValue: true,
					precision: 1
				}]
			}
		});
	}


	async onBtnA() {
		if (!! this.myStatusItemId){
			this.objects.removeStatusItem(this.myUserId, this.myStatusItemId);
			console.log('StatusItem removed: ', this.myStatusItemId);
			this.myStatusItemId = null;
		}else{
			this.myStatusItemId = await this.objects.createStatusItem({
				userID: this.myUserId,
				size: 0.50
			},{
				type: 'text',
				text: 'Hello',
				scale: this.getField('status-item-scale')
			});
			console.log('new StatusItem: ', this.myStatusItemId);
		}
	}

	async onBtnB() {
		if (!! this.myStatusIconId){
			this.objects.removeTopStatusIcon(this.myUserId, this.myStatusIconId);
			console.log('StatusIcon removed: ', this.myStatusIconId);
			this.myStatusIconId = null;
		}else{
			this.myStatusIconId = await this.objects.createTopStatusIcon({
				userID: this.myUserId,
				size: 0.50
			},{
				type: 'image', url: this.paths.absolute('button-icon.png')
			});
			console.log('new StatusIcon: ', this.myStatusIconId);
		}
	}

	onBtnC() {
		this.menus.alert(
			`myUserId: ${this.myUserId}` + " --- " +
			`myStatusItemId: ${this.myStatusItemId}` + " --- " +
			`myStatusIconId: ${this.myStatusIconId}`,
			'Diagnostic Info v0.0.001', 'info');
	}

}// class StatusItemTextPlugin



 /***
		this.myStatusItemId = await this.objects.createStatusItem({
			userID: this.myUserId,
			size: 1.0
		},{
			type: 'text', text: 'Hello', textBold: true
		});
		
		
		
		
module.exports = class test extends BasePlugin {
		
 ***
 
// NOTE:
// For manual upload of plugin use the following instead of
// 'import  and 'export default' statements.
// module.exports = class ...
//
// For sideloading from http://localhost:9000/plugin.js via yarn start use the following
// import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'
// export default class ...

export default class StatusItemTextPlugin extends BasePlugin {

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
/***/

 