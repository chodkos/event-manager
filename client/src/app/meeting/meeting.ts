export class Meeting {

 /* id: number*/
  name: string
  adress: string
  description: string

  constructor(json) {
    /*this.id = json['id']*/
    this.name = json['name']
    this.adress = json['adress']
    this.description = json['description']
  }
}
