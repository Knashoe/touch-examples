Ext.define('ejemplo2.view.Lista', {

	extend: 'Ext.List',
	xtype: 'lista',

	config: {
		title: 'Agenda',
		itemCls: 'speaker',
        variableHeights: true,
		itemTpl: [
        
			'<h3>{name} {apellido}</h3>',
			'<h4>{telefono}</h4>'
            
		]
	}
});