Ext.define('ejemplo2.store.Nombres', {
	extend: 'Ext.data.Store',

    config: {
        model: 'ejemplo2.model.Nombres',

       proxy: {
                type: 'ajax',
                url : 'agenda.json',
            reader: 'json'
    },
    autoLoad: true
    }
});