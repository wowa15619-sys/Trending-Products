export interface Product {
  id: number;
  categoryId: number;
  name: string;
  price: string;
  image: string;
  rating: number;
}

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

export enum MessageAuthor {
  USER = 'user',
  BOT = 'bot',
}

export interface ChatMessage {
  author: MessageAuthor;
  text: string;
}