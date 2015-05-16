Ext.define('ejemplo2.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'main',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        tabBarPosition: 'top',

        items: [ 
            
            { 
                title: 'Eliminar',
                iconCls: 'delete',
                xclass:'ejemplo2.view.Eliminar',
            
                styleHtmlContent: true,
                scrollable: true,
            
                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
                
            },
            
            { 
                title: 'Favoritos',
                iconCls: 'star',
                xclass:'ejemplo2.view.Agenda2',
            
                styleHtmlContent: true,
                scrollable: true,
            
                html: [
                    
                  



                                      
                ].join("")
                
            },
                        
           
            
            
            {
                title: 'Perfil',
                iconCls: 'user',

                styleHtmlContent: true,
                scrollable: true,

                items: {
                    docked: 'top',
                    xtype: 'titlebar',
                    title: 'Bienvenido'
                },

                html: [
                    "You've just generated a new Sencha Touch 2 project. What you're looking at right now is the ",
                    "contents of <a target='_blank' href=\"app/view/Main.js\">app/view/Main.js</a> - edit that file ",
                    "and refresh to change what's rendered here."
                ].join("")
            },
            {
                title: 'Videos',
                iconCls: 'action',

                items: [
                    {
                        docked: 'top',
                        xtype: 'titlebar',
                        title: 'Videos'
                    },
                    {
                       html: [
                    
                           '<iframe width="560" height="315" src="https://www.youtube.com/embed/LDqczE2pwao" frameborder="0" allowfullscreen></iframe>'
                           
                ].join("")  
                        
                        
                    }
                ]
            }
        ]
    }
});
