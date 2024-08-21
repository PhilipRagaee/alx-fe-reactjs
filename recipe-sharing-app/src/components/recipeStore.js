import create from 'zustand';

const useRecipeStore = create(set => ({
  recipes: [],
  searchTerm: '',
  setSearchTerm: (term) => set(state => {
    state.searchTerm = term;
    state.filterRecipes(); 
  }),
  filteredRecipes: [],
  filterRecipes: () => set(state => ({
    filteredRecipes: state.recipes.filter(recipe =>
      recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
    )
  })),
  addRecipe: (newRecipe) => set(state => {
    state.recipes = [...state.recipes, newRecipe];
    state.filterRecipes(); 
  }),
  deleteRecipe: (id) => set(state => {
    state.recipes = state.recipes.filter(recipe => recipe.id !== id);
    state.filterRecipes(); 
  }),
  updateRecipe: (updatedRecipe) => set(state => {
    state.recipes = state.recipes.map(recipe =>
      recipe.id === updatedRecipe.id ? updatedRecipe : recipe
    );
    state.filterRecipes(); 
  }),
}));

export default useRecipeStore;
