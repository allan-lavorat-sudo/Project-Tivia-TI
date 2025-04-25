describe('Teste de Registro', () => {
  it('Deve registrar um novo usuário', () => {
    cy.visit('https://front.serverest.dev/');
    cy.get('[data-testid="nome"]').type('Novo Usuário');
    cy.get('[data-testid="email"]').type('novo@teste.com');
    cy.get('[data-testid="senha"]').type('123456');
    cy.get('[data-testid="registrar"]').click();
    cy.contains('Usuário registrado com sucesso!').should('be.visible');
  });
});
