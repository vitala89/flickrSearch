export class ProductInterface {
  id: string;
  name?: string;
  description?: string;
  color?: string[];
  size?: string[];
  img?: string;
  price?: number;
  imgUrl?: Image[];
  reviews?: Review[];
  discount?: number;
  main?: boolean;
  shipping?: boolean;
  discountUntil?: string;
  novelty?: boolean;
}

class Image {
  small?: string;
  medium?: string;
  big?: string;
}

class Review {
  author?: string;
  text?: string;
  rating?: number;
}
