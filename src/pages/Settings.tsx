import { Box, Flex, Text, Input, Button, HStack, VStack, useColorModeValue, Switch, FormControl, FormLabel, Avatar, Divider, useToast } from '@chakra-ui/react';
import { FiUpload, FiSave, FiUser, FiLock, FiBell, FiShield } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};

export default function Settings() {
  const bg = useColorModeValue('white', 'gray.800');
  const mutedColor = useColorModeValue('gray.500', 'gray.400');
  const toast = useToast();
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    toast({
      title: 'Settings saved',
      description: 'Your changes have been saved successfully.',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <MotionBox
      p={{ base: 4, md: 6 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>Settings</Text>
          <Text color={mutedColor} fontSize={{ base: 'sm', md: 'md' }}>Manage your account settings</Text>
        </Box>
        <Button
          leftIcon={<FiSave />}
          colorScheme="green"
          size={{ base: 'md', md: 'lg' }}
          borderRadius="xl"
          onClick={handleSave}
        >
          Save Changes
        </Button>
      </Flex>

      <MotionBox
        bg={bg}
        p={{ base: 4, md: 6 }}
        borderRadius="xl"
        shadow="lg"
        variants={itemVariants}
      >
        <VStack spacing={8} align="stretch">
          {/* Profile Section */}
          <Box>
            <HStack spacing={4} mb={4}>
              <FiUser size={20} color={mutedColor} />
              <Text fontSize="lg" fontWeight="bold">Profile Settings</Text>
            </HStack>
            <Divider mb={6} />
            <Flex direction={{ base: 'column', md: 'row' }} gap={6} align="start">
              <Box>
                <Avatar size="xl" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
                <Button
                  leftIcon={<FiUpload />}
                  size="sm"
                  mt={2}
                  variant="outline"
                  borderRadius="xl"
                >
                  Change Photo
                </Button>
              </Box>
              <VStack flex={1} spacing={4} align="stretch">
                <FormControl>
                  <FormLabel>Full Name</FormLabel>
                  <Input placeholder="John Doe" borderRadius="xl" />
                </FormControl>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" placeholder="john@example.com" borderRadius="xl" />
                </FormControl>
                <FormControl>
                  <FormLabel>Phone</FormLabel>
                  <Input placeholder="+1 (555) 000-0000" borderRadius="xl" />
                </FormControl>
              </VStack>
            </Flex>
          </Box>

          {/* Security Section */}
          <Box>
            <HStack spacing={4} mb={4}>
              <FiLock size={20} color={mutedColor} />
              <Text fontSize="lg" fontWeight="bold">Security</Text>
            </HStack>
            <Divider mb={6} />
            <VStack spacing={4} align="stretch">
              <FormControl>
                <FormLabel>Current Password</FormLabel>
                <Input type="password" placeholder="Enter current password" borderRadius="xl" />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input type="password" placeholder="Enter new password" borderRadius="xl" />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm New Password</FormLabel>
                <Input type="password" placeholder="Confirm new password" borderRadius="xl" />
              </FormControl>
              <Button
                leftIcon={<FiShield />}
                colorScheme="blue"
                variant="outline"
                borderRadius="xl"
                alignSelf="flex-start"
              >
                Change Password
              </Button>
            </VStack>
          </Box>

          {/* Preferences Section */}
          <Box>
            <HStack spacing={4} mb={4}>
              <FiBell size={20} color={mutedColor} />
              <Text fontSize="lg" fontWeight="bold">Preferences</Text>
            </HStack>
            <Divider mb={6} />
            <VStack spacing={4} align="stretch">
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Dark Mode</FormLabel>
                <Switch
                  isChecked={darkMode}
                  onChange={(e) => setDarkMode(e.target.checked)}
                  colorScheme="green"
                />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Email Notifications</FormLabel>
                <Switch
                  isChecked={notifications}
                  onChange={(e) => setNotifications(e.target.checked)}
                  colorScheme="green"
                />
              </FormControl>
              <FormControl>
                <FormLabel>Language</FormLabel>
                <Input placeholder="English" borderRadius="xl" />
              </FormControl>
              <FormControl>
                <FormLabel>Time Zone</FormLabel>
                <Input placeholder="UTC" borderRadius="xl" />
              </FormControl>
            </VStack>
          </Box>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
}
