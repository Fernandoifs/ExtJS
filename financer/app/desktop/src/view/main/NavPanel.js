Ext.define('Financer.view.main.NavPanel',{    
    extend: 'Ext.Panel',
    alias: 'widget.navpanel',
    title: 'Nav Panel',

    layout: 'fit',
    shadow: true,
    margin: '0 5 0 0',
    items: [{
        xtype: 'menulist',
    }]
});