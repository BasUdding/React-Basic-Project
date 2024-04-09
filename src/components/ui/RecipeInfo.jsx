import { Text, Flex, Tag, Center, Heading, Box } from '@chakra-ui/react';

export const RecipeInfo = ({ recipe, onClick }) => {
  return (
    <Flex flexDirection='column'>
      <Center>
        <Text mb='5'>
          {recipe.mealType.map((mealType, index) => (
            <Tag key={index}>{mealType.toUpperCase()}</Tag>
          ))}
        </Text>
      </Center>
      <Box>
        <Flex justifyContent='center' alignItems='center' mb='2'>
          <Heading size='md'>{recipe.label}</Heading>
        </Flex>
      </Box>
      <Center>
        <Box mt='1' mb='3'>
          {recipe.dishType.map((dishType, index) => (
            <Tag key={index} colorScheme='blue' variant='subtle'>
              {dishType.toUpperCase()}
            </Tag>
          ))}
        </Box>
      </Center>
      {recipe.healthLabels &&
        recipe.healthLabels.some(
          (label) => label === 'Vegan' || label === 'Vegetarian'
        ) && (
          <Box mt='1' mb='3'>
            <Center>Health Labels:</Center>
            <Center>
              <Flex mt='2' flexWrap='wrap'>
                {recipe.healthLabels
                  .filter(
                    (label) => label === 'Vegan' || label === 'Vegetarian'
                  )
                  .map((healthLabel, index) => (
                    <Tag
                      key={index}
                      variant='subtle'
                      colorScheme='green'
                      mr='2'
                      mb='1'
                    >
                      {healthLabel.toUpperCase()}
                    </Tag>
                  ))}
              </Flex>
            </Center>
          </Box>
        )}
      {recipe.cautions && recipe.cautions.length > 0 && (
        <Center>
          <Flex flexDirection='column'>
            <Box mt='1' mb='3'>
              <Center> Cautions: </Center>
            </Box>
            <Flex flexWrap='wrap'>
              {recipe.cautions.map((caution, index) => (
                <Tag
                  key={index}
                  variant='subtle'
                  colorScheme='red'
                  mr='2'
                  mb='1'
                >
                  {caution.toUpperCase()}
                </Tag>
              ))}
            </Flex>
          </Flex>
        </Center>
      )}
    </Flex>
  );
};
