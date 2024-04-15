import {IDrink, IDrinkDetails} from "../models/drink.model";

export function getAvailableLanguages(drink: IDrink): string[] {
  const languages: string[] = ['en'];

  for (const key in drink) {
    if (key.startsWith('strInstructions') && key !== 'strInstructions') {
      const languageCode = key.slice('strInstructions'.length).toLowerCase();

      if (drink[key as keyof typeof drink] !== null) {
        languages.push(languageCode);
      }
    }
  }

  return languages;
}

export function getIngredients(drink: IDrinkDetails): string[] {
  const ingredients: string[] = [];
  for (let i = 1; i <= 15; i++) {
    const ingredient = drink[`strIngredient${i}` as keyof IDrinkDetails];
    const measure = drink[`strMeasure${i}` as keyof IDrinkDetails];
    if (ingredient && measure) {
      ingredients.push(`${ingredient} ${measure}`);
    }
  }

  return ingredients;
}
