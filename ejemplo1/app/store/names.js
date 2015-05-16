Ext.define('ejemplo1.store.names', {
	extend: 'Ext.data.Store',

    config: {
        model: 'ejemplo1.model.names',

       proxy: {
                type: 'ajax',
                url : 'libro.json',
            reader: 'json'
    },
    autoLoad: true
    }
});