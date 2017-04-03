import axios from 'axios';

class AuthService {
  constructor() {
    this.api = 'http://localhost:3000'
  }

  authenticate(email, password) {
    axios.post(this.api, {
      email: email,
      password: password
    })
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log(error);
  });
  }
}

export default AuthService;
