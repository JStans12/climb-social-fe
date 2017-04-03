import axios from 'axios';

class AuthService {
  constructor() {
    this.api = 'http://localhost:3000'
  }

  authenticate(email, password) {
    axios.post(`${this.api}/authenticate`, {
      email: email,
      password: password
    })
    .then(function(response) {
      let tokens = response.data["tokens"];
      let sessionExpiration = new Date(new Date().getTime() + (6.9 * 24 * 60 * 60 * 1000));
      sessionStorage.setItem('auth_token', tokens.auth_token);
      sessionStorage.setItem('refresh_token', tokens.refresh_token);
      sessionStorage.setItem('sessionExpiration', sessionExpiration);
    })
    .catch(function(error) {
      console.log(error);
  });
  }
}

export default AuthService;
