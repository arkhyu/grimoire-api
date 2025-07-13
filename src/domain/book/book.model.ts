export interface Book {
  id: string;
  title: string;
  author: string;
  boundIn?: 'leather' | 'dragon hide' | 'do not ask';
  isCursed: boolean;                
}