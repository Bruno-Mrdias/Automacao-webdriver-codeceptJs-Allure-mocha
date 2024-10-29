const { I } = inject();

var validacao = require('assert');
const { faker } = require('@faker-js/faker');

module.exports = {

  fields: {
    userEmail: '#user',
    userPass: '#password'
  },

  button: {
    userlog: '#btnLogin'
  },

  message:{
    userLogged: 'Login realizado',
    
  },

  userCreatedLogin(email, senha){
  I.fillField(this.fields.userEmail, email)
  I.wait(3)
  I.fillField(this.fields.userPass, senha)
  },

  logBut(){
    I.click(this.button.userlog)
    I.wait(2)
  },

  userFail(email){
    I.fillField(this.fields.userEmail, email)
    I.wait(3)
  },
  
  passFail(senha){
    I.fillField(this.fields.userPass,senha)
  }
 
  // insert your locators and methods here

}
