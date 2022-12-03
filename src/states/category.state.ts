import { atom } from "recoil";
import { Category, Type } from "../services/article.type";

interface CategoryState {
  category: Category;
  type: Type;
}

export const categoryState = atom<CategoryState>({
  key: 'CATEGORY_STATE',
  default: {
    category: "it",
    type: 'entrylist',
  },
});
