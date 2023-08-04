import { BasePlugin, BaseComponent } from 'vatom-spaces-plugins'


export default class StatusItemTextPlugin extends BasePlugin {

	/** Plugin info */
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
				type: 'text', text: 'Hello'
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
 ***/