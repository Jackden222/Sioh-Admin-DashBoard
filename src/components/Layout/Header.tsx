import { Box, Flex, Input, InputGroup, InputRightElement, IconButton, useColorModeValue, useBreakpointValue } from '@chakra-ui/react';
import { FiSearch, FiBell, FiSettings, FiMenu } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

interface HeaderProps {
  onOpen: () => void;
}

const Header: React.FC<HeaderProps> = ({ onOpen }) => {
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <MotionBox
      as="header"
      bg={bgColor}
      borderBottom="1px"
      borderColor={borderColor}
      px={4}
      py={3}
      position="sticky"
      top={0}
      zIndex={10}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Flex align="center" justify="space-between">
        {isMobile && (
          <IconButton
            aria-label="Open menu"
            icon={<FiMenu />}
            variant="ghost"
            onClick={onOpen}
            size="lg"
            mr={2}
            color={textColor}
            _hover={{ bg: hoverBg }}
          />
        )}
        
        <Flex flex={1} maxW="600px" align="center">
          <InputGroup>
            <Input
              placeholder="Search..."
              borderRadius="xl"
              bg={useColorModeValue('gray.50', 'gray.700')}
              border="none"
              _focus={{
                bg: useColorModeValue('white', 'gray.600'),
                boxShadow: 'md',
                border: '1px solid',
                borderColor: 'blue.500',
              }}
            />
            <InputRightElement>
              <IconButton
                aria-label="Search"
                icon={<FiSearch />}
                variant="ghost"
                color={textColor}
                _hover={{ bg: hoverBg }}
                size="sm"
              />
            </InputRightElement>
          </InputGroup>
        </Flex>

        {!isMobile && (
          <Flex align="center" ml={4}>
            <IconButton
              aria-label="Notifications"
              icon={<FiBell />}
              variant="ghost"
              color={textColor}
              _hover={{ bg: hoverBg }}
              size="lg"
              mr={2}
            />
            <IconButton
              aria-label="Settings"
              icon={<FiSettings />}
              variant="ghost"
              color={textColor}
              _hover={{ bg: hoverBg }}
              size="lg"
            />
          </Flex>
        )}
      </Flex>
    </MotionBox>
  );
};

export { Header }; 