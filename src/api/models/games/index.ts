export default class Game {
  id: number;
  name: string;
  slug: string;
  metacritic: number;
  released: Date;
  background_image: string;

  constructor(data: Game) {
    this.id = data.id;
    this.name = data.name;
    this.slug = data.slug;
    this.metacritic = data.metacritic;
    this.released = new Date(data.released);
    this.background_image = data.background_image;
  }
}
