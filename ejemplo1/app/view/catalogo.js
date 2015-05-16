Ext.define('ejemplo1.view.catalogo', {

	extend: 'Ext.NavigationView',
	xtype: 'agendaContainer',

	config: {

		tab: {
			title: 'Catalogo',
			iconCls: 'team'
		},

        autoDestroy: false,

		items: [
			{
				xtype: 'lista',
				store: 'names',
				grouped: false,
				pinHeaders: false
			}
		]
        
	}
});
