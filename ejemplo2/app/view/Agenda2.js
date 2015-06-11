Ext.define('ejemplo2.view.Agenda2', {

	extend: 'Ext.NavigationView',
	xtype: 'agendaContainer',

	config: {

		tab: {
			title: 'Agenda',
			iconCls: 'team'
		},

        autoDestroy: false,

		items: [
			{
				xtype: 'lista',
				store: 'Nombres',
				grouped: false,
				pinHeaders: false
			}
		]
	}
});
