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
          <RecipePage recipe={selectedRecipe} />
        ) : (
          <RecipeListPage onClick={handleRecipeClick} />
        )}
      </Box>
    </Center>
  );
};

// import { useState } from 'react';
// import { RecipePage } from './pages/RecipePage';
// import { RecipeListPage } from './pages/RecipeListPage';
// import { data } from './utils/data'; // Assuming your data.js file is in the same directory
// import { Center, Box } from '@chakra-ui/react';

// export const App = () => {
//   const [selectedRecipe, setSelectedRecipe] = useState(null);

//   const firstRecipe = data.hits[3].recipe;

//   const handleRecipeClick = (recipeIndex) => {
//     setSelectedRecipe(recipeIndex);
//   };

//   return <RecipeListPage />;
// };

//     <Center h='100vh' flexDir='column'>
//       {selectedRecipe ? (
//         <RecipePage />
//       ) : (
//         <>
//           <RecipeListPage onClick={handleRecipeClick} />
//         </>
//       )}
//     </Center>
//   );
// };
// { setRecipe } ? (
//   <RecipePage recipe={setRecipe} onClick={setSelectedRecipe} />
// ) : (
//   <>
//     <RecipeListPage onClick={setSelectedRecipe} />
//   </>
// );

// <RecipePage recipe={firstRecipe} />;

// export const App = () => {
//   const [userDrink, setUserDrink] = useState();

//   const greeting = 'Welcome to our cafe!';

//   return (
//     <Center h="100vh" flexDir="column">
//       {userDrink ? (
//         <DrinkChoice drink={userDrink} clickFn={setUserDrink} />
//       ) : (
//         <>
//           <Heading size="2xl" mb={8} color="blue.200">
//             {greeting}
//           </Heading>
//           <DrinkSearch clickFn={setUserDrink} />
//         </>
//       )}
//     </Center>
//   );
// };
// { setRecipe } ? (
//   <RecipePage recipe={setRecipe} onClick={setSelectedRecipe} />
// ) : (
//   <>
//     <RecipeListPage onClick={setSelectedRecipe} />
//   </>
// );
