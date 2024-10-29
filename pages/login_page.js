const { button } = require("./user_login");

const { I } = inject();

module.exports = {

button: {
  loginAccess: 'Login'
 },

 loginPageAccess(){
  I.click(this.button.loginAccess)
 }
}
