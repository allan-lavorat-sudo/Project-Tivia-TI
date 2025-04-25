describe('Teste de Autenticação - API', () => {
  it('Deve autenticar com sucesso utilizando credenciais válidas', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      body: {
        email: 'usuario@teste.com',
        password: '123456'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token');
    });
  });

  it('Não deve autenticar com credenciais inválidas', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/login',
      failOnStatusCode: false,
      body: {
        email: 'usuario@invalido.com',
        password: 'senha123'
      }
    }).then((response) => {
      expect(response.status).to.eq(401);
    });
  });
});
