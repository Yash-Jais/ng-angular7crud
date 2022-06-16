export class Gallary {
  id?: string;
  caption?: string;
  category?: string;
  description?: string;
  imageUrlC?: string;
  imageUrlM?: string;
  isDeleted?: boolean;
  createdDateTime?: any;
  updatedDateTime?: any;

  constructor(obj?: any) {
    this.id = "";
    this.caption = "";
    this.imageUrlC = "";
    this.imageUrlM = "";
    this.isDeleted = false;
    this.createdDateTime = "";
    this.updatedDateTime = "";
  }
}
