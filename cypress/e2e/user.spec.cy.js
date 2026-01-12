import LoginPage from '../Pages/loginpage.js'
import DashboardPage from '../Pages/dashboardpage.js'
import MenuPage from '../Pages/menuPage.js'

const loginPage = new LoginPage()

const dashboardPage = new DashboardPage ()

const menuPage = new MenuPage


describe('Orange HRM Tests,', () => {

  const selectorsList = {

    myInfoButton: '[href="/web/index.php/pim/viewMyDetails"]',
    firstNameField: "[name='firstName']",
    lastNameField: "[name='lastName']",
    genericField: ".oxd-input--active",
    dateField: "[placeholder='yyyy-mm-dd']",
    genericComboBox: "[tabindex='0']",
    secondItemCombobox: '.oxd-select-dropdown > :nth-child(3)',
    thirdItemCombobox: '.oxd-select-dropdown > :nth-child(2) > span',
    submitButton: "[type='submit']"
  }

  const userData = {
    userSuccess: {
      username: 'Admin',
      password: 'admin123'
    },

    userFail: {
      username: 'Teste',
      password: 'Teste'
    }

  }

  it.only('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo() 

    
    
    
    cy.get(selectorsList.firstNameField).clear().type('FistNameTest')
    cy.get(selectorsList.lastNameField).clear().type('LastNameTest')
    cy.get(selectorsList.genericField).eq(3).clear().type('NickNameTest')
    cy.get(selectorsList.genericField).eq(4).clear().type('TestEmploy')
    cy.get(selectorsList.genericField).eq(5).clear().type('OtherTest')
    cy.get(selectorsList.genericField).eq(6).clear().type('DriversTST')
    cy.get('body').click()
    cy.get(selectorsList.genericField).eq(7).clear().type('2025-03-10')
    cy.get('body').click()
    cy.get(selectorsList.genericField).eq(8).clear().type('ssnNumberTest')
    cy.get('body').click()
    cy.get(selectorsList.genericField).eq(9).clear().type('sinNumberTest')
    cy.get(selectorsList.genericComboBox).eq(0).click()
    cy.get(selectorsList.secondItemCombobox).click()
    cy.get(selectorsList.genericComboBox).eq('1').click()
    cy.get(selectorsList.thirdItemCombobox).click()



    cy.get(selectorsList.submitButton).eq(1).click()
    cy.get('body').should('contain', 'Successfully Saved')
    cy.get('.oxd-toast-close')

  })


  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get('[name="password"]').type(userData.userFail.password)
    cy.get("[type='submit']").click()
    cy.get(selectorsList.wrongCredentialAlert)


  })

})
