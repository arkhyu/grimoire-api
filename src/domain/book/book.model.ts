export const allowedBoundInValues = ['leather', 'dragon hide', 'do not ask'] as const;
export type BoundIn = typeof allowedBoundInValues[number];

export interface Book {
  id: string;
  title: string;
  author: string;
  boundIn?: BoundIn;
  isCursed: boolean;                
}