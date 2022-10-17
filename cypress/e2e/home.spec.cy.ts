import { page_objects } from "./page_objects";

describe('Home page', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should be the landing page', () => {
    cy.contains('Alleva Test')
  })

  it('should contain link to Songs page', () => {
    cy.get(page_objects.home_page.next_url).contains('Next page');
  });

  it('should navigate to songs clicking on Next Page', () => {
    cy.get(page_objects.home_page.next_url).click();
    cy.contains('ALLEVA PLAYLIST');
  });
})
