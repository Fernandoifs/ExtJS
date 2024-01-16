Ext.define('Financer.view.fornecedor.MainViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.fornecedorview',

    // stores: {
    //     fornecedores: {
    //         model: 'Financer.model.Fornecedor',
    //         autoLoad: true
    //     }
    // }
    stores: {
        fornecedores: {
            proxy: {
                type: 'ajax',
                reader: 'json',
                url: '/resources/desktop/fornecedores.json',
            },
            autoLoad: true
        }
    }
})