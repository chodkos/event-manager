export class Api {

  baseUrl = 'https://localhost:8080/api-v1'
  oauthServer = 'https://localhost:8080/oauth/token'
  activeUser = `${this.baseUrl}/users/active`
  meetings = `${this.baseUrl}/meetings`
  userProfile = 'https://localhost:8080/api-v1/userProfile'

}
