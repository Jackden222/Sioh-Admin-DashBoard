import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        bg: 'gray.50',
        _dark: {
          bg: 'gray.900'
        }
      }
    }
  },
  components: {
    Button: {
      baseStyle: {
        fontWeight: 'medium',
      },
      variants: {
        solid: {
          bg: 'green.500',
          color: 'white',
          _hover: {
            bg: 'green.600',
          },
          _dark: {
            bg: 'green.200',
            color: 'gray.800',
            _hover: {
              bg: 'green.300',
            },
          },
        },
      },
    },
  },
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
});

export default theme; 