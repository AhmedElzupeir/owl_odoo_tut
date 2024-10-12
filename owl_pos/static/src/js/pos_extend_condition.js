odoo.define('owl_pos.Codition', function(require) {
'use strict';


	const { Gui } = require('point_of_sale.Gui');
	const ProductScreen = require('point_of_sale.ProductScreen');
    const DiscountButton = require('point_discount.DiscountButton');

    ProductScreen.addControlButton({
    	component: DiscountButton,
    	condition : function(){
    		var cashier = (this.env.pos.get_cashier()).name;
    		let hasdiscount = false;
    		let chok = "Mitchell Admin";

    		if (cashier == chok){
    			hasdiscount = false;
    		}

    		return this.env.pos.config.model_pos_discount && env.pos.config.discount_product_id && hasdiscount;

    	},
    	position: ['replace', 'DiscountButton'],
    });
});




// 	class CustomTopButtons extends PosComponent{
// 		onClick(){
// 			Gui.showPopup("ErrorPopup",{
// 				title: this.env._t('You made it'),
// 				body: this.env._t('Go to the next level'),
// 			});
// 		}
// 	}
// 	CustomTopButtons.template = 'CustomTopButtons';
// 	Registries.Component.add(CustomTopButtons);
 // });