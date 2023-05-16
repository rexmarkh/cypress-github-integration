import homePage from '../pages/homePage'
import githubPage from '../pages/githubPage'

describe('Home Page', () => {
  beforeEach(() => {
    homePage.goto()
  })

  it('should display 7 posts per page', async () => {
    homePage.posts().should('have.length', 7)
  }).tags('@smoke')

  // NOTE: cypress cannot handle multiple windows nor multiple domains...
  it.skip('should open social media link in new window', () => {
    cy.get(homePage.githubLink).click()

    githubPage.userAvatar().should('exist')
  }).tags('@sanity')

  // NOTE: cypress does NOT want you to test if an element exists
  // this used to work in previous versions but no more...
  it.skip('should find an older post by loading more', () => {
    const postTitle = 'Cypress.io Review'
    homePage.findPostByPaging(postTitle)

    homePage.postTitleExists(postTitle).should('be.visible')
  }).tags('@smoke')
})
