import { Box, VStack, Text, Icon, Flex, useColorModeValue, Drawer, DrawerContent, useBreakpointValue, IconButton } from '@chakra-ui/react';
import { FiGrid, FiBarChart2, FiUsers, FiBox, FiMessageCircle, FiDollarSign, FiSettings, FiShield, FiX } from 'react-icons/fi';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionVStack = motion(VStack);

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

const sidebarVariants = {
  hidden: { x: -250 },
  visible: {
    x: 0,
    transition: {
      duration: 0.4,
      type: "spring",
      stiffness: 100,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

const Sidebar: React.FC<SidebarProps> = ({ isOpen = false, onClose = () => {} }) => {
  const location = useLocation();
  const isMobile = useBreakpointValue({ base: true, md: false });
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');
  const textColor = useColorModeValue('gray.600', 'gray.300');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');
  const activeBg = useColorModeValue('blue.50', 'blue.900');
  const activeColor = useColorModeValue('blue.500', 'blue.200');

  const menuItems = [
    { icon: FiGrid, label: 'Dashboard', path: '/' },
    { icon: FiBarChart2, label: 'Statistics', path: '/statistics' },
    { icon: FiUsers, label: 'Customers', path: '/customers' },
    { icon: FiBox, label: 'Products', path: '/products' },
    { icon: FiMessageCircle, label: 'Messages', path: '/messages' },
    { icon: FiDollarSign, label: 'Orders', path: '/orders' },
  ];

  const generalItems = [
    { icon: FiSettings, label: 'Settings', path: '/settings' },
    { icon: FiShield, label: 'Security', path: '/security' },
  ];

  const SidebarContent = () => (
    <MotionVStack
      spacing={0}
      align="stretch"
      h="100%"
      bg={bgColor}
      borderRight="1px"
      borderColor={borderColor}
      py={4}
    >
      <Flex align="center" px={4} mb={8}>
        <Text fontSize="xl" fontWeight="bold" color={textColor}>
          Sioh
        </Text>
      </Flex>

      <VStack spacing={1} align="stretch" flex={1}>
        {menuItems.map((item) => (
          <MotionFlex
            key={item.path}
            as={RouterLink}
            to={item.path}
            align="center"
            px={4}
            py={3}
            cursor="pointer"
            color={location.pathname === item.path ? activeColor : textColor}
            bg={location.pathname === item.path ? activeBg : 'transparent'}
            _hover={{ bg: hoverBg }}
            whileHover={{ x: 4 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon as={item.icon} mr={3} />
            <Text>{item.label}</Text>
          </MotionFlex>
        ))}
      </VStack>

      <VStack spacing={1} align="stretch" mt={4}>
        {generalItems.map((item) => (
          <MotionFlex
            key={item.path}
            as={RouterLink}
            to={item.path}
            align="center"
            px={4}
            py={3}
            cursor="pointer"
            color={location.pathname === item.path ? activeColor : textColor}
            bg={location.pathname === item.path ? activeBg : 'transparent'}
            _hover={{ bg: hoverBg }}
            whileHover={{ x: 4 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Icon as={item.icon} mr={3} />
            <Text>{item.label}</Text>
          </MotionFlex>
        ))}
      </VStack>
    </MotionVStack>
  );

  if (isMobile) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerContent>
          <Flex justify="flex-end" p={4}>
            <IconButton
              aria-label="Close menu"
              icon={<FiX />}
              variant="ghost"
              onClick={onClose}
              size="lg"
            />
          </Flex>
          <SidebarContent />
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <MotionBox
      as="aside"
      w="250px"
      h="100vh"
      position="fixed"
      left={0}
      top={0}
      variants={sidebarVariants}
      initial="closed"
      animate="open"
    >
      <SidebarContent />
    </MotionBox>
  );
};

export default Sidebar; 