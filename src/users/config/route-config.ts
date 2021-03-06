export class UserRouterConfig {
    configureRouter(config) {
      config.map([
        { route: 'login', moduleId:'../view-models/login-user', title:"Logowanie"},
        { route: 'register', moduleId:'../view-models/register-user', title:"Rejestracja"},
        { route: 'logout', moduleId:'../view-models/logout-user', title:"Wylogowywanie"},
        { route: 'activate/:id', moduleId:'../view-models/activate-user', title:"Aktywacja konta"}

      ])
  
    }
  }