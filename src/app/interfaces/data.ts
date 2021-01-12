export interface Data {
  id: string;
  name?: string;
  description?: string;
  color?: string[];
  size?: string[];
  img: string;
  price?: number;
  imgUrl?: Image[];
  discount?: number;
  main?: boolean;
  shop?: string;
  shipping?: string;
  discountUntil?: string;
  new?: boolean;
  reviews?: Review[];
}

class Review {
  author?: string;
  text?: string;
  rating?: number;
}
class Image {
  small?: string;
  medium?: string;
  big?: string;
}
