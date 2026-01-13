class MyInfoPage {

    selectorsList() {
        const selectors = {
            firstNameField: "[name='firstName']",
            lastNameField: "[name='lastName']",
            genericField: ".oxd-input--active",
            dateField: "[placeholder='yyyy-mm-dd']",
            genericComboBox: "[tabindex='0']",
            secondItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
            thirdItemCombobox: '.oxd-select-dropdown > :nth-child(2) > span',
            submitButton: "[type='submit']"

        }


        return selectors

    }

    fillPersonalDetails(firstName, lastName, nickName) {
        cy.get(this.selectorsList().firstNameField).clear().type(firstName)
        cy.get(this.selectorsList().lastNameField).clear().type(lastName)
        cy.get(this.selectorsList().genericField).eq(3).clear().type(nickName)
    }

    fillEmployeeDetails(employeeId, otherId, driversLicenseNumber, expiryDate, ssnNumber, sinNumber) {
        cy.get(this.selectorsList().genericField).eq(4).clear().type(employeeId)
        cy.get(this.selectorsList().genericField).eq(5).clear().type(otherId)
        cy.get(this.selectorsList().genericField).eq(6).clear().type(driversLicenseNumber)
        cy.get('body').click()
        cy.get(this.selectorsList().genericField).eq(7).clear().type(expiryDate)
        cy.get('body').click()
        cy.get(this.selectorsList().genericField).eq(8).clear().type(ssnNumber)
        cy.get('body').click()
        cy.get(this.selectorsList().genericField).eq(9).clear().type(sinNumber)
    }

    saveForm() {
        cy.get(this.selectorsList().submitButton).eq(1).click()
        cy.get('body').should('contain', 'Successfully Saved')
        cy.get('.oxd-toast-close')

    }

    fillStatus() {
        cy.get(this.selectorsList().genericComboBox).eq(0).click()
        cy.get(this.selectorsList().secondItemCombobox).click()
        cy.get(this.selectorsList().genericComboBox).eq('1').click()
        cy.get(this.selectorsList().thirdItemCombobox).click()

    }

}

export default MyInfoPage