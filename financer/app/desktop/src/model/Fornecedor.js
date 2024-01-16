Ext.define('Financer.model.Fornecedor', {
    extend: 'Financer.model.Base',

    idProperty: 'id',

    proxy: {
        type: 'ajax', 
        url: '/resources/desktop/fornec.json',
        reader: {
            type: 'json',
            rootProperty: 'data'
        },
        writer: {
            type: 'json'
        }
    },

    requires: [
        'Ext.data.validator.Presence',
        'Ext.data.proxy.LocalStorage',
        'Ext.data.proxy.Rest',
        'Ext.data.proxy.Ajax',
    ],
    // proxy: {
    //     type: 'rest',
    //     url: '/store/data.json',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'data'
    //     },
    //     writer: {
    //         type: 'json'
    //     }
    // },

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