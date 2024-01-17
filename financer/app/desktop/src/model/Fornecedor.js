Ext.define('Financer.model.Fornecedor', {
    extend: 'Financer.model.Base',

    idProperty: 'id',
    
    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Rest',
        'Ext.data.proxy.Ajax',
    ],

    proxy: {
        type: 'ajax',
        url: '/resources/desktop/fornecedores.json',
        reader: {
          type: 'json',
          rootProperty: 'data',
        },
        autoLoad: true
      },
      
    validators: {
        nome: 'presence'
    },

    fields: [
        { name: 'id', type: 'int' },
        { name: 'nome' },
        { name: 'telefone' },
        { name: 'endereco' },
        { name: 'cep' },
        { name: 'email' }
    ]

})