class DashboardPage {

    selectorsList() {
        const selectors = {
                dashBoardGrid: '.oxd-layout-context',

        }
        return selectors

    }

    checkDashboardPage() {
        cy.location('pathname').should('equal', '/web/index.php/dashboard/index')
        cy.get(this.selectorsList().dashBoardGrid).should('be.visible')
    }
}

export default DashboardPage 