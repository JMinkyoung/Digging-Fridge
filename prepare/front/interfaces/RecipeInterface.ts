export default interface Recipe {
  _id: string,
  title: string,
  image ?: string,
  nutriment ?: object,
  ingredient: string[],
  recipe: string[],
  ingredientKey: string,
  type: string
};