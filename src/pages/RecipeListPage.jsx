import { Flex, Center, Heading, Button, Box, Tag } from '@chakra-ui/react';
import { data } from '../utils/data';
import { SearchInput } from '../components/ui/SearchInput';
import { useState } from 'react';
import { RecipeCard } from '../components/ui/RecipeCard';

export const RecipeListPage = ({ recipe, onClick }) => {
  const [searchQuery, setSearchQuery] = useState('');

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

  const greeting = 'Winc Recipe Searcher';

  return (
    <Center>
      <Flex direction='column' alignItems='center'>
        <Box textAlign='center' mb='3'>
          <Heading mt='4' p='3'>
            {' '}
            {greeting}
          </Heading>
        </Box>
        <Box mb='4'>
          <SearchInput
            w={250}
            mb={1}
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
            <RecipeCard
              key={index}
              recipe={recipe.recipe}
              onClick={() =>
                onClick(
                  data.hits.findIndex((item) => item.recipe === recipe.recipe)
                )
              }
            />
          ))}
        </Flex>
      </Flex>
    </Center>
  );
};
