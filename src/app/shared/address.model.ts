export class Address {
  city?: City;
  state?: State;
  area?: Area;

  constructor(obj?: any) {
    this.city = new City();
    this.state = new State();
    this.area = new Area();
  }
}
export class State {
  id?: string;
  name?: string;
}
export class City {
  id?: string;
  name?: string;
  stateId?: string;
  stateName?: string;
  isActive?: false;
  createDateTime?: string;
  updateDateTime?: string;
}
export class Area {
  id?: string;
  name?: string;
  cityId?: string;
  cityName?: string;
  isActive: false;
}
