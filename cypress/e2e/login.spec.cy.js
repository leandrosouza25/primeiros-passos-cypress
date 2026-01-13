import LoginPage from '../Pages/loginpage.js'
import MenuPage from '../Pages/menuPage.js'
import MyInfoPage from '../Pages/myinfopage.js'
import DashboardPage from '../Pages/dashboardpage.js'



const loginPage = new LoginPage()

const dashboardPage = new DashboardPage ()

const menuPage = new MenuPage()

const myinfopage = new MyInfoPage()


describe('Login Orange HRM Tests', () => {

  const selectorsList = {
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



  it('Login - Fail', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userFail.username, userData.userFail.password)
    loginPage.checkAccessInvalid()
  })

   it('Login - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)
    dashboardPage.checkDashboardPage()
  
  })

})
