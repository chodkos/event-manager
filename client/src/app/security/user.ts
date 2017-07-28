export class User {

  name: string
  lastName: string
  description: string
  authorities = []


  constructor(json) {
    this.name = json.login
    this.lastName = json.lastName
    this.description = json.description
    json['authorities'].forEach(authority => this.authorities.push(authority.name.replace('ROLE_', '')))
  }

}
