describe('Gerenciamento de Usuários - API', () => {
  it('Deve cadastrar um novo administrador', () => {
    cy.request({
      method: 'POST',
      url: 'https://serverest.dev/usuarios',
      body: {
        nome: 'Administrador Teste',
        email: 'admin@teste.com',
        password: '123456',
        administrador: 'true'
      }
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.message).to.eq('Cadastro realizado com sucesso');
    });
  });

  it('Deve listar todos os usuários', () => {
    cy.request({
      method: 'GET',
      url: 'https://serverest.dev/usuarios'
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('usuarios');
    });
  });
});
