import { Button, Box, Flex, Image, Heading, Text, Tag } from '@chakra-ui/react';

export const RecipePage = ({ recipe, onClick }) => {
  return (
    <Box
      backgroundColor='blue.50'
      borderWidth='1px'
      borderRadius='lg'
      overflow='hidden'
      boxShadow='md'
      p='4'
      maxW='900px'
      m='auto'
    >
      <Box mb='4'>
        <Button colorScheme='teal' variant='solid' onClick={() => onClick()}>
          Back
        </Button>
      </Box>

      <Box mb='4'>
        <Image
          src={recipe.image}
          alt={recipe.label}
          w='100%'
          h='300px'
          objectFit='cover'
          borderRadius='lg'
        />
      </Box>

      <Flex>
        <Box w='50%' pr='4'>
          <Heading pl='4' mb='2' size='md'>
            {recipe.label}
          </Heading>
          <Text pl='4' mb='2'>
            Cooking Time: {recipe.totalTime} minutes
          </Text>
          <Text pl='4' mb='2'>
            Servings: {recipe.yield}
          </Text>
          <Text as='b' pl='4' fontSize='2xl' mb='4'>
            Ingredients:
          </Text>
          {recipe.ingredientLines.map((ingredient, index) => (
            <Text pl='4' key={index}>
              {ingredient}
            </Text>
          ))}
        </Box>

        <Box w='50%' pl='4'>
          <Text mb='2'>Health Labels:</Text>
          <Flex flexWrap='wrap'>
            {recipe.healthLabels.map((label, index) => (
              <Tag
                key={index}
                variant='subtle'
                colorScheme='purple'
                mr='2'
                mb='1'
              >
                {label}
              </Tag>
            ))}
          </Flex>
          <Text mb='2' mt='4'>
            Diet Labels:
          </Text>
          <Flex flexWrap='wrap'>
            {recipe.dietLabels.map((label, index) => (
              <Tag
                key={index}
                variant='subtle'
                colorScheme='green'
                mr='2'
                mb='1'
              >
                {label}
              </Tag>
            ))}
          </Flex>
          <Text mb='2' mt='4'>
            Cautions:
          </Text>
          <Flex flexWrap='wrap'>
            {recipe.cautions.map((caution, index) => (
              <Tag key={index} variant='subtle' colorScheme='red' mr='2' mb='1'>
                {caution}
              </Tag>
            ))}
          </Flex>
        </Box>
      </Flex>

      <Box mt='6' w='100%' pl='4'>
        <Heading size='md'>Nutrition Information</Heading>
        <Text mb='2'>
          Calories: {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)} kcal
        </Text>
        <Text mb='2'>
          Protein: {Math.round(recipe.totalNutrients.PROCNT.quantity)} g
        </Text>
        <Text mb='2'>
          Fat: {Math.round(recipe.totalNutrients.FAT.quantity)} g
        </Text>
        <Text mb='2'>
          Carbohydrates: {Math.round(recipe.totalNutrients.CHOCDF.quantity)} g
        </Text>
        <Text mb='2'>
          Cholesterol: {Math.round(recipe.totalNutrients.CHOLE.quantity)} mg
        </Text>
        <Text mb='2'>
          Sodium: {Math.round(recipe.totalNutrients.NA.quantity)} mg
        </Text>
      </Box>
    </Box>
  );
};
