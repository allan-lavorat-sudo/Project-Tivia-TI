describe('Teste de Navegação', () => {
  it('Deve navegar entre as páginas', () => {
    cy.visit('https://front.serverest.dev/');
    cy.get('[data-testid="menu-produtos"]').click();
    cy.url().should('include', '/produtos');
    cy.get('[data-testid="menu-usuarios"]').click();
    cy.url().should('include', '/usuarios');
  });
});
