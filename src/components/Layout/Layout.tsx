import { Box, Flex, useDisclosure, useBreakpointValue } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import Sidebar from './Sidebar';

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <Flex h="100vh">
      {!isMobile && <Sidebar />}
      <Box flex="1" overflow="auto" ml={{ base: 0, md: "250px" }}>
        <Header onOpen={onOpen} />
        <Box as="main" p={4}>
          <Outlet />
        </Box>
      </Box>
      {isMobile && <Sidebar isOpen={isOpen} onClose={onClose} />}
    </Flex>
  );
};

export default Layout; 