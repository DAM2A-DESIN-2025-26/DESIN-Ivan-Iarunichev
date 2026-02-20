export interface Item {
  id?: number;
  name: string;
  difficulty: 'easy' | 'medium' | 'hard';
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  ingredients: string;
  instructions: string;
  tags?: string[];
  image?: string;
}
