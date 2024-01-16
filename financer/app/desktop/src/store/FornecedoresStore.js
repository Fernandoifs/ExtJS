Ext.define('MyModernApp.store.FornecedoresStore', {
    extend: 'Ext.data.Store',
    alias: 'store.fornecedores',
    model: 'MyModernApp.model.Fornecedores',

    data: {
        data: [
            {
              "id": 1,
              "nome": "João",
              "sobrenome": "Silva",
              "telefone": "(11) 1234-5678",
              "endereco": "Rua A, 123",
              "cep": "12345-678",
              "email": "joao.silva@email.com"
            },
            {
              "id": 2,
              "nome": "Maria",
              "sobrenome": "Souza",
              "telefone": "(21) 9876-5432",
              "endereco": "Avenida B, 456",
              "cep": "87654-321",
              "email": "maria.souza@email.com"
            },
            {
              "id": 3,
              "nome": "Carlos",
              "sobrenome": "Ferreira",
              "telefone": "(31) 5555-1234",
              "endereco": "Travessa C, 789",
              "cep": "11111-222",
              "email": "carlos.ferreira@email.com"
            },
            {
              "id": 4,
              "nome": "Ana",
              "sobrenome": "Oliveira",
              "telefone": "(41) 4444-5678",
              "endereco": "Praça D, 012",
              "cep": "33333-444",
              "email": "ana.oliveira@email.com"
            }
        ]
    }
});
          