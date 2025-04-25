describe('Gerenciamento de Carrinhos - API', () => {
  it('Deve criar um carrinho para o usuário', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/carrinhos',
      body: {
        produtos: [
          { idProduto: '12345', quantidade: 1 },
          { idProduto: '67890', quantidade: 2 }
        ]
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('Deve excluir um carrinho existente', () => {
    cy.request({
      method: 'DELETE',
      url: 'https://serverest.dev/carrinhos/concluir-compra',
      headers: {
        Authorization: 'Bearer SEU_TOKEN_AQUI'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.message).to.eq('Registro excluído com sucesso');
    });
  });
});
