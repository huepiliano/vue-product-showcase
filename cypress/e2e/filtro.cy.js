describe('Filtro de productos', () => {
  beforeEach(() => {
    cy.visit('http://localhost:8080')
  })

  it('muestra productos al cargar la página', () => {
    cy.get('.product-card').should('have.length.greaterThan', 0)
  })

  it('filtra productos al hacer clic en una categoría', () => {
    cy.get('.filter-btn').contains('electronics').click()
    cy.get('.product-card').should('have.length.greaterThan', 0)
    cy.get('.product-card__category').each(($el) => {
      expect($el.text().toLowerCase()).to.include('electronics')
    })
  })

  it('muestra todos los productos al hacer clic en Todas', () => {
    cy.get('.filter-btn').contains('electronics').click()
    cy.get('.filter-btn').contains('Todas').click()
    cy.get('.product-card').should('have.length.greaterThan', 0)
  })
})