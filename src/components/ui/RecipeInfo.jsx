import { Text, Flex, Tag, Center, Heading, Box } from '@chakra-ui/react';

export const RecipeInfo = ({ recipe }) => {
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
        <Center>
          <Heading size='md' mb='2'>
            {recipe.label}
          </Heading>
        </Center>
      </Box>
      <Center></Center>
      <Center>
        <Text mt='1' mb='3'>
          <Center>Dish Type:</Center>
          <Flex mt='2' flexWrap='wrap'>
            {recipe.dishType.map((dishType, index) => (
              <Tag key={index}>{dishType.toUpperCase()}</Tag>
            ))}
          </Flex>
        </Text>
      </Center>
      {recipe.healthLabels && (
        <Center>
          <Text mt='1' mb='3'>
            Health Labels:
            <Flex flexWrap='wrap'>
              {recipe.healthLabels
                .filter((label) => label === 'Vegan' || label === 'Vegetarian')
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
          </Text>
        </Center>
      )}
      {recipe.cautions && (
        <Center>
          <Flex flexDirection='column'>
            <Text mt='1' mb='3'>
              Cautions:
            </Text>
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
