import { useState } from 'react';
import { RecipePage } from './pages/RecipePage';
import { RecipeListPage } from './pages/RecipeListPage';
import { data } from './utils/data'; // Assuming your data.js file is in the same directory
import { Center, Box } from '@chakra-ui/react';

export const App = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleRecipeClick = (recipeIndex) => {
    setSelectedRecipe(data.hits[recipeIndex].recipe);
  };

  return (
    <Center>
      <Box w='100%'>
        {selectedRecipe ? (
          <RecipePage recipe={selectedRecipe} onClick={setSelectedRecipe} />
        ) : (
          <RecipeListPage onClick={handleRecipeClick} />
        )}
      </Box>
    </Center>
  );
};
