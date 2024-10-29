var validacao = require('assert');
const { faker } = require('@faker-js/faker');
const { userCreatedLogin } = require('../pages/user_login');
const { loginPageAccess } = require('../pages/login_page');
const { I } = inject()

Feature('login');


Before(async ({ I }) => {
    await I.amOnPage('/'); // Navega para a página inicial antes de cada teste
  });


Scenario('Teste login com sucesso', async  ({ user_login, login_page,  }) => {

    
    I.wait(2)
    //Accessar área de Login
    login_page.loginPageAccess();


    //logar com user
   user_login.userCreatedLogin(faker.internet.email(), faker.internet.password({length: 6}))
   //botao de entrar
    user_login.logBut();

    //teste login com sucesso
    I.see('Login realizado', '#swal2-title');
});

Scenario('Teste login com sucesso com auto login', async  ({ login  }) => {

    await login('user')
   
});

 Scenario('Teste login sem preencher dados',  ({ I,user_login, login_page }) => {

    //Accessar área de Login
    login_page.loginPageAccess();

    //tentar logar com user
    user_login.userFail(faker.internet.email())

    //botão de entrar
    user_login.logBut();

    //checar senha invalida
    I.see('Senha inválida.')
});

Scenario('Teste login sem senha preenchida',  ({ I,user_login, login_page }) => {

     //Accessar área de Login
     login_page.loginPageAccess();

      //tentar logar com user
    user_login.passFail(faker.internet.password({length: 6}))

    //botão de entrar
    user_login.logBut();
    
    I.see('E-mail inválido.')

});

Scenario('Teste validação tela de login', async ({ I }) => {

    I.amOnPage('https://automationpratice.com.br/')
    I.click('Login')
    var title = await I.grabTextFrom('.account_form h3')
    validacao.equal(title, 'Login')

    I.wait(5);

});

Scenario('Teste login preencher dados', async ({ I,user_login, login_page }) => {


     //Accessar área de Login
     login_page.loginPageAccess();

    //botão de entrar
    user_login.logBut();
    
    I.see('E-mail inválido.')

}).tag('@teste1')
       