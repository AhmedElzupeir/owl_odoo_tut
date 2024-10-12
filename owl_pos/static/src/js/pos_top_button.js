odoo.define('pos_button.CustomTopButtons', function(require) {
'use strict';


	const { Gui } = require('point_of_sale.Gui');
	const PosComponent = require('point_of_sale.PosComponent');
    const Registries = require('point_of_sale.Registries');

	class CustomTopButtons extends PosComponent{
		onClick(){
			Gui.showPopup("ErrorPopup",{
				title: this.env._t('You made it'),
				body: this.env._t('Go to the next level'),
			});
		}
	}
	CustomTopButtons.template = 'CustomTopButtons';
	Registries.Component.add(CustomTopButtons);
 });