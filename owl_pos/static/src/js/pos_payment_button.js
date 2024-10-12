odoo.define('owl_pos.CustomPaymentButtons', function(require) {
'use strict';
  const { Gui } = require('point_of_sale.Gui');
  const Registries = require('point_of_sale.Registries');
  const PaymentScreen = require('point_of_sale.PaymentScreen');

     const CustomPaymentButtons = (PaymentScreen) =>
    	class extends PaymentScreen {
    		
    		IsCustomButton() {
    		
    			Gui.showPopup("ConfirmPopup",{
					title: this.env._t('You did it'),
					body: this.env._t('Nice job ---keep it up..!'),
    			});
    		}
      };
   Registries.Component.extend(PaymentScreen, CustomPaymentButtons);
   return CustomPaymentButtons;
});