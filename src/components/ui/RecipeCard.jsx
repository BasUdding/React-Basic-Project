import { Box, Image, Center, Text, Heading, Flex, Tag } from '@chakra-ui/react';
import { RecipeInfo } from './RecipeInfo';

export const RecipeCard = ({ recipe, onClick }) => {
  return (
    <Box
      backgroundColor='blue.50'
      width='400px'
      height='500px'
      borderWidth='2px'
      borderRadius='lg'
      overflow='hidden'
      m='25'
      boxShadow='md'
      onClick={onClick}
      _hover={{
        boxShadow: '2xl',
      }}
    >
      <Center>
        <Image
          src={recipe.image}
          alt={recipe.label}
          width='100%'
          height='200px'
          objectFit='cover'
          borderRadius='lg'
        />
      </Center>
      <Box p='6'>
        <RecipeInfo recipe={recipe} />
      </Box>
    </Box>
  );
};
