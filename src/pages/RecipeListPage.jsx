import { Flex, Center, Heading, Box } from '@chakra-ui/react';
import { data } from '../utils/data';
import { SearchInput } from '../components/ui/SearchInput';
import { useState } from 'react';
import { RecipeCard } from '../components/ui/RecipeCard';
import { RecipePage } from './RecipePage';

export const RecipeListPage = ({ onClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const filteredRecipes = data.hits.filter((recipe) => {
    const { label, healthLabels } = recipe.recipe;
    const lowerCaseQuery = searchQuery.toLowerCase();
    const nameMatch = label.toLowerCase().includes(lowerCaseQuery);
    const healthLabelsMatch = healthLabels.some((label) =>
      label.toLowerCase().includes(lowerCaseQuery)
    );

    return nameMatch || healthLabelsMatch;
  });

  const handleRecipeClick = (index) => {
    setSelectedRecipe(filteredRecipes[index]);
  };

  const greeting = 'Winc Recipe Searcher';

  return (
    <Center>
      <Flex direction='column' alignItems='center'>
        <Box textAlign='center' mb='4'>
          <Heading mt='4' p='3'>
            {' '}
            {greeting}
          </Heading>
        </Box>
        <Box mb='4'>
          <SearchInput
            w={250}
            mb={4}
            onChange={handleSearch}
            value={searchQuery}
          />
        </Box>
        <Flex
          flexWrap='wrap'
          justifyContent='center'
          alignItems='center'
          mt='5'
        >
          {filteredRecipes.map((recipe, index) => (
            <Box
              key={index}
              onClick={() => handleRecipeClick(index)}
              cursor='pointer'
            >
              <RecipeCard recipe={recipe.recipe} />
            </Box>
          ))}
        </Flex>
        {selectedRecipe && <RecipePage recipe={selectedRecipe.recipe} />}
      </Flex>
    </Center>
  );
};
