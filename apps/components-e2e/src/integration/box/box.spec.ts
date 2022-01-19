describe('components: Box component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=box--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to Box!');
    });
});
