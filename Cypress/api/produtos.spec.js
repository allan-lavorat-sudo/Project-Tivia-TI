describe('Gerenciamento de Produtos - API', () => {
  it('Deve listar produtos cadastrados', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/produtos'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('produtos');
    });
  });

  it('Deve adicionar um novo produto como administrador', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/produtos',
      body: {
        nome: 'Produto Teste',
        preco: 100,
        descricao: 'Descrição do Produto Teste',
        quantidade: 10
      },
      headers: {
        Authorization: 'Bearer SEU_TOKEN_AQUI'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });
});
