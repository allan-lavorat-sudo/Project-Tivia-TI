describe('Teste de Login', () => {
  it('Deve realizar login com sucesso', () => {
    cy.visit('https://front.serverest.dev/');
    cy.get('[data-testid="email"]').type('usuario@teste.com');
    cy.get('[data-testid="senha"]').type('123456');
    cy.get('[data-testid="entrar"]').click();
    cy.contains('Bem-vindo').should('be.visible');
  });
});

