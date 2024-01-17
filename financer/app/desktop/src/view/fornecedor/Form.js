Ext.define('Financer.view.fornecedor.Form', {
  extend: 'Ext.form.Panel',
  alias: 'widget.fornecedorform',

  items: [
    { xtype: 'textfield', label: 'Nome' },
    {
      xtype: 'fieldcontainer',
      defaults: {
        flex: 1,
      },

      items: [
        { xtype: 'textfield', label: 'Telefone', margin: '0 5 0 0' },
        { xtype: 'textfield', label: 'Email' },
      ],
    }, {
      xtype: 'fieldcontainer',
      defaults: {
        flex: 1,
      },

      items: [
        { xtype: 'textfield', label: 'CPF', margin: '0 5 0 0' },
        { xtype: 'textfield', label: 'RG' },
      ],
    },{
      xtype: 'textfield',
      label: 'CEP',
      width: '35%',
      triggers: [
        {
          type: 'search',
          handler: 'onSearchCep',
        },
      ],
    }, {
      xtype: 'fieldcontainer',
      defaults: {
      
      },

      items: [
        { xtype: 'textfield', label: 'Endereço', flex: 1,margin: '0 5 0 0' },
        { xtype: 'textfield', label: 'Nº', width: 100, margin: '0 5 0 0' },
        { xtype: 'textfield', label: 'Complemento',flex: 1,},
        
      ],
    },{
      xtype: 'textfield',
      label: 'Bairro'
    }
    
  ],
});
