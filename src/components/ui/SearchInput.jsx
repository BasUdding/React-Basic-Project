import { Box, Input } from '@chakra-ui/react';

// export const TextInput = ({ changeFn, ...props }) => (
//   <Input variant="flushed" onChange={changeFn} {...props} />
// );

export const SearchInput = ({ onChange, ...props }) => {
  return (
    <Box mb='4'>
      <Input
        placeholder='Search for recipes'
        variant='flushed'
        w={500}
        mb={8}
        onChange={onChange}
        {...props}
      />
    </Box>
  );
};
