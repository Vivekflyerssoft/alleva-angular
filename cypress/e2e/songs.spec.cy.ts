import { page_objects } from "./page_objects";

describe('Song Page', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(page_objects.home_page.next_url).click();
    });

    it('should have create button', () => {
        cy.get(page_objects.songs_page.creat_btn)
            .should('contain.text', 'CREATE');
    });

    it('should have remove button for all rows', () => {
        cy.get(page_objects.songs_page.table_row).contains('REMOVE')
    });

    it('should update button for all rows', () => {
        cy.get(page_objects.songs_page.table_row).contains('UPDATE')
    });

    it('should not contain form by default', () => {
        cy.get(page_objects.songs_page.upsert_form).should('not.exist');
    });
});

describe('remove', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(page_objects.home_page.next_url).click();
        cy.get(page_objects.songs_page.table_row).first().get(page_objects.songs_page.artist).invoke('text').as('artist')

        cy.get(page_objects.songs_page.table_row).first().contains('REMOVE').click()

    });

    it('should remove the song', () => {
        cy.get(page_objects.songs_page.table_row).first().get(page_objects.songs_page.artist).should('not.contain.text', '@artist')
    });
});

describe('Create Song, with valid input', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(page_objects.home_page.next_url).click();
        cy.get(page_objects.songs_page.creat_btn).click();
    });

    it('should create song', () => {
        cy.get(page_objects.songs_page.artist_txt)
            .should('be.visible')
            .type('test-artist');
        cy.get(page_objects.songs_page.title_txt)
            .should('be.visible')
            .type('test-text');
        cy.get(page_objects.songs_page.year_txt)
            .should('be.visible')
            .type('1980');

        cy.get(page_objects.songs_page.submit_button)
            .should('not.be.disabled')
            .click()
    });
});

describe('Song Page Create Button Click', () => {
    beforeEach(() => {
        cy.visit('/')
        cy.get(page_objects.home_page.next_url).click();
        cy.get(page_objects.songs_page.creat_btn).click();
    });

    it('should show create form', () => {
        cy.get(page_objects.songs_page.artist_txt).should('be.visible');
        cy.get(page_objects.songs_page.title_txt).should('be.visible');
        cy.get(page_objects.songs_page.year_txt).should('be.visible');
    });

    it('should have submit disabled by default', () => {
        cy.get(page_objects.songs_page.submit_button).should('be.disabled');
    });

    it('should have cancel button enabled', () => {
        cy.get(page_objects.songs_page.cancel).should('be.enabled');
    });
});