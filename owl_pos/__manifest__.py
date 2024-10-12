# -*- coding: utf-8 -*-
# Part of Odoo. See LICENSE file for full copyright and licensing details.

{
    'name': 'owl pos',
    'version': '1.2',
    'license':'GPL-3',
    'description': 'manage pos',
    'depends': [
        'base', 'web', 'point_of_sale', 'pos_discount'
    ],
    'data': [
    ],

    'assets': {
    
        'point_of_sale.assets': [
                
            'owl_pos/static/src/js/pos_top_button.js',
            'owl_pos/static/src/js/pos_product_button.js',
            'owl_pos/static/src/js/pos_payment_button.js',
            'owl_pos/static/src/js/pos_extend_condition.js',
                    
            'owl_pos/static/src/xml/pos_top_button_view.xml',
            'owl_pos/static/src/xml/pos_product_button_view.xml',
            'owl_pos/static/src/xml/pos_payment_button_view.xml',
        ],
    },
    'installable': True,
    'application': True,
}