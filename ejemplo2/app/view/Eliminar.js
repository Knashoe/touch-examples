Ext.define('ejemplo2.view.Eliminar', {
    extend: 'Ext.List',
    xtype: 'Eliminar',
    config: {
    variableHeights: true,
        title: 'Eliminar',
        iconCls: 'chat',
        cls: 'tweets',

        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Eliminar'
            }
        ]
    }
});
