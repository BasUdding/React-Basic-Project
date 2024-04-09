import { Box, Image, Button, Text, Heading, Flex, Tag } from '@chakra-ui/react';
import { RecipeInfo } from './RecipeInfo';

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Box
      width='290px'
      height='600px'
      borderWidth='2px'
      borderRadius='lg'
      overflow='hidden'
      m='50'
      boxShadow='md'
      cursor='pointer'
      onClick={onClick}
    >
      <Image
        src={recipe.image}
        alt={recipe.label}
        width='100%'
        height='200px'
        objectFit='cover'
        borderRadius='lg'
      />

      <Box p='6'>
        <RecipeInfo recipe={recipe} />
      </Box>
    </Box>
  );
};
