import {Category} from '../category/category';

export class Expense {
  id?: number;
  category?: Category | number;
  userId?: number;
  name?: string;
  amount?: number;
  type?: string | number;
  date?: string;
}
