export class Address {
  city?: City;
  state?: State;
  area?: Area;
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
  isActive: false;
}
export class Area {
  id?: string;
  name?: string;
  cityId?: string;
  cityName?: string;
  isActive: false;
}
