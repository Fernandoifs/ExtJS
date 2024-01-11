Ext.define('Financer.view.main.MainView', {
  extend: 'Ext.Container',
  xtype: 'mainview',
  controller: 'mainviewcontroller',
  viewModel: {
    type: 'mainviewmodel'
  },
  layout: 'fit',
  items: [{
    xtype: 'mainheader',
    docked: 'top',
    reference: 'headerview'
  }, {
    xtype: 'navpanel',
    html: 'Nav',
    docked: 'left',
    reference: 'navegationview',
    width: 250,
  }, {
    xtype: 'centercontainer',
    html: 'Seja Bem Vindo ao App Financer',


  }]
})
