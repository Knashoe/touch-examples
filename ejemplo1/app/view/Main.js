Ext.define('ejemplo1.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'bottom',

        items: [ 
            
            { xclass: 'ejemplo1.view.Lista' },
            
            {
                title: 'Bienvenido',
                iconCls: 'favorites',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Bienvenido seas a mi Nuevo Mundo'
                },

                html: [
                    
                    '<img src="http://cupon.es/magazin/wp-content/uploads/2014/12/perritos.png" width="1000" height="500" >'
                    
                    
                    
                ].join("")
            },
            
             { 
                title: 'Favoritos',
                iconCls: 'star',
                xclass:'ejemplo1.view.catalogo',
            
                styleHtmlContent: true,
                scrollable: true,
            
                html: [
                    
                  



                                      
                ].join("")
                
            },
            
            {
                title: 'Video',
                iconCls: 'delete',

                items: 
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Getting Started'
                    },
                 html: [
                    
                    '<iframe width="420" height="315" src="https://www.youtube.com/embed/LDqczE2pwao" frameborder="0" allowfullscreen></iframe>'
                   
                    
                ].join("")
            }
                
            
        ]
    }
});
