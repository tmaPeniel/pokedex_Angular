export class Pokemon {
  id: number;
  hp: number;
  cp: number;
  name: string;
  picture: string;
  types: Array<string>;
  created: Date;

  //Initialisation d'un pokemon par defaut pour la creation
  constructor(
    hp: number=100,
    cp: number=10,
    name: string='Entrer un nom...',
    picture: string='https://assets.pokemon.com/assets/cms2/img/pokedex/full/xxx.png',
    types: Array<string>=['Normal'],
    created = new Date()
  ){
    this.hp = hp;
    this.cp = cp;
    this.name = name;
    this.picture = picture;
    this.types = types;
    this.created = created;
  }
}