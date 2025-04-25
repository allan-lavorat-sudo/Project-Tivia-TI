describe('Testes de API', () => {
  it('Deve retornar todos os usuários - GET', () => {
    cy.request('GET', 'http://localhost:3000/usuarios').then((response) => {
      expect(response.status).to.eq(200); // Sucesso esperado
      expect(response.body).to.have.property('usuarios'); // Valida propriedade no corpo
    });
  });

  it('Deve criar um novo usuário - POST', () => {
    cy.request('POST', 'http://localhost:3000/usuarios', {
      nome: 'Allan Teste',
      email: 'allan.teste@exemplo.com',
      senha: '123456'
    }).then((response) => {
      expect(response.status).to.eq(201); // Sucesso na criação
      expect(response.body).to.have.property('id'); // Valida ID retornado
    });
  });
});
