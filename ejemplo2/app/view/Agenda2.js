Ext.define('ejemplo2.view.Agenda2', {

	extend: 'Ext.NavigationView',
	xtype: 'agendaContainer',

	config: {

		tab: {
			
			iconCls: 'team'
		},

        autoDestroy: false,

		items: [
			{
				
                cambio
				store: 'Nombres',
				grouped: false,
				pinHeaders: false,
                xtype: 'lista'
			}
		]
	}
});
