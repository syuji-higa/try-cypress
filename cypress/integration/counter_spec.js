describe('インクリメントのテスト', function() {
  beforeEach(() => {
    cy.visit('/')
  })
  it('ボタンを押すとインクリメントされる', () => {
    cy.get('.button').click().get('.count').should('have.text', '1')
  })
})
