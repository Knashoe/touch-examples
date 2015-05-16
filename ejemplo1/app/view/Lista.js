Ext.define('ejemplo1.view.Lista', {

	extend: 'Ext.List',
	xtype: 'lista',

	config: {
		title: 'catalogo',
		itemCls: 'speaker',
        variableHeights: true,
		itemTpl: [
        
			'<h3>{id} {nombre}</h3>',
			'<h4>{autor}</h4>'
            
		]
	}
});