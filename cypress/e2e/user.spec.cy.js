import LoginPage from '../Pages/loginpage.js'
import DashboardPage from '../Pages/dashboardpage.js'
import MenuPage from '../Pages/menuPage.js'
import MyInfoPage from '../Pages/myinfopage.js'

const Chance = require('chance')


const chance = new Chance()

const loginPage = new LoginPage()

const dashboardPage = new DashboardPage ()

const menuPage = new MenuPage()

const myinfopage = new MyInfoPage()


describe('Orange HRM Tests,', () => {

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

  it('User info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    myinfopage.fillPersonalDetails(chance.first(), chance.last(), chance.string())
    myinfopage.fillEmployeeDetails('employeeId', 'otherId', 'Drivers Number', '2025-07-29', '123456', '0987654')
    myinfopage.fillStatus()
    myinfopage.saveForm()

  })



})
