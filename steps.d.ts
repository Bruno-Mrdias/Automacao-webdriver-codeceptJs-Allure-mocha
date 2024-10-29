/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type user_login = typeof import('./pages/user_login.js');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any, user_login: user_login }
  interface Methods extends Playwright {}
  interface I extends ReturnType<steps_file> {}
  namespace Translation {
    interface Actions {}
  }
}
