import {v4 as uuidv4} from 'uuid';

export class ProductModel {
  _id: string = uuidv4();
  _name: string = '';
  _description: string = '';
  _color: string[] = [];
  _size: string[] = [];
  _img: string = '';
  _price: number = 0;
  _discount?: number = 0;
  _discountUntil?: string = '';
  _main?: boolean = false;
  _shipping?: boolean = false;
  _novelty?: boolean = false;
  _imgUrl?: any = [];
  _reviews?: any = [{
    author: 'Unknow',
    text: 'Unknow',
    rating: 0
  }];

  get id() {
    return this._id;
  }

  set id(id) {
    this._id = id;
  }

  get name() {
    return this._name;
  }

  set name(name) {
    this._name = name;
  }

  get description() {
    return this._description;
  }

  set description(description) {
    this._description = description;
  }

  get color() {
    return this._color;
  }

  set color(color) {
    this._color = color;
  }

  get size() {
    return this._size;
  }

  set size(size) {
    this._size = size;
  }

  get img() {
    return this._img;
  }

  set img(img) {
    this._img = img;
  }

  get price() {
    return this._price;
  }

  set price(price) {
    this._price = price;
  }

  get imgUrl() {
    return this._imgUrl;
  }

  set imgUrl(imgUrl) {
    this._imgUrl = imgUrl;
  }

  get reviews() {
    return this._reviews;
  }

  set reviews(reviews) {
    this._reviews = reviews;
  }

  get discount() {
    return this._discount;
  }

  set discount(reviews) {
    this._discount = reviews;
  }

  get main() {
    return this._main;
  }

  set main(main) {
    this._main = main;
  }

  get shipping() {
    return this._shipping;
  }

  set shipping(shipping) {
    this._shipping = shipping;
  }

  get discountUntil() {
    return this._discountUntil;
  }

  set discountUntil(discountUntil) {
    this._discountUntil = discountUntil;
  }

  get novelty() {
    return this._novelty;
  }

  set novelty(novelty) {
    this._novelty = novelty;
  }
}
