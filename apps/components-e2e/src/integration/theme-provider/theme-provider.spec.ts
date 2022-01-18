describe('components: ThemeProvider component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=themeprovider--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to ThemeProvider!');
    });
});
