Ext.define('Financer.view.fornecedor.Grid', {
    extend: 'Ext.grid.Grid',
    alias: 'widget.fornecedorgrid',

    requires: [
        'Ext.dataview.plugin.ListPaging',
        'Ext.grid.plugin.Editable'
    ],

    plugins: {
        listpaging: {
            autoPaging: true,
        },
        grideditable: true,
    },

    columns: [{
        text: 'ID',
        dataIndex: 'id',
        width: 50
    }, {
        text: 'Nome',
        dataIndex: 'nome',
        editable: true,
        flex: 1
    }, {
        text: 'Telefone',
        dataIndex: 'telefone',
        width: 250
    }, {
        text: 'Email',
        dataIndex: 'email',
        flex: 1
    }]


})