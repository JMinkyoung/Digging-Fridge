export default interface Recipe {
  _id: {string: string},
  title: string,
  image ?: string,
  nutriment ?: object,
  ingredient: string[],
  ingredientKey: string,
  type: string
};