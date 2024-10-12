odoo.define('pos_control-button.CustomProductButtons', function(require) {
'use strict';


	const { Gui } = require('point_of_sale.Gui');
	const PosComponent = require('point_of_sale.PosComponent');
	const ProductScreen = require('point_of_sale.ProductScreen');
	const { useListener } = require("@web/core/utils/hooks");
    const Registries = require('point_of_sale.Registries');

	class CustomProductButtons extends PosComponent{
		setup(){
			super.setup();
			useListener('click', this.onClick);
		}
		async onClick() {
			Gui.showPopup('ErrorPopup',{
				title: this.env._t('pos Product Button'),
				body: (this.env.pos.get_cashier()).name,
			});
		}
	}
	CustomProductButtons.template = 'CustomProductButtons';
	ProductScreen.addControlButton({
		component:CustomProductButtons,
		condition:function(){
			return this.env.pos;
		},
	});
	Registries.Component.add(CustomProductButtons);
 });