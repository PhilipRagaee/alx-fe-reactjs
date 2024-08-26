import create from 'zustand';

const useRecipeStore = create((set) => ({
  recipes: [],
  filteredRecipes: [], // For filtering functionality
  searchTerm: '', // For search functionality

  // Add a new recipe
  addRecipe: (newRecipe) => set((state) => ({
    recipes: [...state.recipes, newRecipe],
    filteredRecipes: [...state.recipes, newRecipe].filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Set the initial list of recipes
  setRecipes: (recipes) => set({
    recipes,
    filteredRecipes: recipes,
  }),

  // Set the search term for filtering recipes
  setSearchTerm: (term) => set((state) => {
    const filteredRecipes = state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(term.toLowerCase())
    );
    return { searchTerm: term, filteredRecipes };
  }),

  // Filter recipes based on the search term
  filterRecipes: () => set((state) => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    ),
  })),

  // Add and remove favorite recipes
  favorites: [],
  addFavorite: (recipeId) => set((state) => ({
    favorites: [...state.favorites, recipeId],
  })),
  removeFavorite: (recipeId) => set((state) => ({
    favorites: state.favorites.filter((id) => id !== recipeId),
  })),

  // Generate recommendations based on favorite recipes
  recommendations: [],
  generateRecommendations: () => set((state) => {
    const recommended = state.recipes.filter((recipe) =>
      state.favorites.includes(recipe.id) && Math.random() > 0.5
    );
    return { recommendations: recommended };
  }),
}));

export { useRecipeStore };
