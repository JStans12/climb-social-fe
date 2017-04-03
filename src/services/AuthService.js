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
      sessionStorage.setItem('auth_token', tokens.auth_token)
      sessionStorage.setItem('refresh_token', tokens.refresh_token)
    })
    .catch(function(error) {
      console.log(error);
  });
  }
}

export default AuthService;
