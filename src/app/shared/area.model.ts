export class Area {
  id?: string;
  name?: string;
  cityId?: string;
  cityName?: string;
  isActive?: false;
  createDateTime?: any;
  updateDateTime?: any;
  states?: State;
  constructor() {
    this.states = new State();
  }
}
export class State {
  id?: string;
  name?: string;
  createDateTime?: any;
  updateDateTime?: any;

  constructor(obj?: any) {
    this.id = '';
    this.name = '';
    this.createDateTime = '';
    this.updateDateTime = '';
  }
}