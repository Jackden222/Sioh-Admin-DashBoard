import { Box, Flex, Text, Button, HStack, VStack, useColorModeValue, Switch, FormControl, FormLabel, Badge, Divider, useToast, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FiShield, FiLock, FiKey, FiSmartphone, FiAlertCircle, FiCheckCircle, FiXCircle } from 'react-icons/fi';
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

// Моковые данные для активности
const activities = [
  {
    id: 1,
    type: 'login',
    device: 'Chrome on Windows',
    location: 'New York, USA',
    time: '2024-03-15 10:30 AM',
    status: 'success'
  },
  {
    id: 2,
    type: 'password_change',
    device: 'Safari on iPhone',
    location: 'San Francisco, USA',
    time: '2024-03-14 03:15 PM',
    status: 'success'
  },
  {
    id: 3,
    type: '2fa_enabled',
    device: 'Chrome on Mac',
    location: 'London, UK',
    time: '2024-03-13 09:20 AM',
    status: 'success'
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    success: 'green',
    failed: 'red',
    warning: 'yellow'
  };
  return colors[status as keyof typeof colors] || 'gray';
};

export default function Security() {
  const bg = useColorModeValue('white', 'gray.800');
  const mutedColor = useColorModeValue('gray.500', 'gray.400');
  const toast = useToast();
  const [twoFactor, setTwoFactor] = useState(false);
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [loginAlerts, setLoginAlerts] = useState(true);

  const handleSave = () => {
    toast({
      title: 'Security settings updated',
      description: 'Your security settings have been saved successfully.',
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
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>Security</Text>
          <Text color={mutedColor} fontSize={{ base: 'sm', md: 'md' }}>Manage your account security</Text>
        </Box>
        <Button
          leftIcon={<FiShield />}
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
          {/* Security Features */}
          <Box>
            <HStack spacing={4} mb={4}>
              <FiLock size={20} color={mutedColor} />
              <Text fontSize="lg" fontWeight="bold">Security Features</Text>
            </HStack>
            <Divider mb={6} />
            <VStack spacing={4} align="stretch">
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Two-Factor Authentication</FormLabel>
                <Switch
                  isChecked={twoFactor}
                  onChange={(e) => setTwoFactor(e.target.checked)}
                  colorScheme="green"
                />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Email Notifications</FormLabel>
                <Switch
                  isChecked={emailNotifications}
                  onChange={(e) => setEmailNotifications(e.target.checked)}
                  colorScheme="green"
                />
              </FormControl>
              <FormControl display="flex" alignItems="center">
                <FormLabel mb="0">Login Alerts</FormLabel>
                <Switch
                  isChecked={loginAlerts}
                  onChange={(e) => setLoginAlerts(e.target.checked)}
                  colorScheme="green"
                />
              </FormControl>
              <Button
                leftIcon={<FiKey />}
                colorScheme="blue"
                variant="outline"
                borderRadius="xl"
                alignSelf="flex-start"
              >
                Manage API Keys
              </Button>
            </VStack>
          </Box>

          {/* Connected Devices */}
          <Box>
            <HStack spacing={4} mb={4}>
              <FiSmartphone size={20} color={mutedColor} />
              <Text fontSize="lg" fontWeight="bold">Connected Devices</Text>
            </HStack>
            <Divider mb={6} />
            <VStack spacing={4} align="stretch">
              <HStack justify="space-between">
                <Box>
                  <Text fontWeight="medium">Chrome on Windows</Text>
                  <Text fontSize="sm" color={mutedColor}>Last active: 2 hours ago</Text>
                </Box>
                <Button size="sm" colorScheme="red" variant="ghost" borderRadius="xl">
                  Remove
                </Button>
              </HStack>
              <HStack justify="space-between">
                <Box>
                  <Text fontWeight="medium">Safari on iPhone</Text>
                  <Text fontSize="sm" color={mutedColor}>Last active: 1 day ago</Text>
                </Box>
                <Button size="sm" colorScheme="red" variant="ghost" borderRadius="xl">
                  Remove
                </Button>
              </HStack>
            </VStack>
          </Box>

          {/* Recent Activity */}
          <Box>
            <HStack spacing={4} mb={4}>
              <FiAlertCircle size={20} color={mutedColor} />
              <Text fontSize="lg" fontWeight="bold">Recent Activity</Text>
            </HStack>
            <Divider mb={6} />
            <Box overflowX="auto">
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Type</Th>
                    <Th>Device</Th>
                    <Th>Location</Th>
                    <Th>Time</Th>
                    <Th>Status</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {activities.map((activity) => (
                    <Tr key={activity.id}>
                      <Td>
                        <HStack spacing={2}>
                          {activity.status === 'success' ? (
                            <FiCheckCircle color="green" />
                          ) : activity.status === 'failed' ? (
                            <FiXCircle color="red" />
                          ) : (
                            <FiAlertCircle color="yellow" />
                          )}
                          <Text>{activity.type.replace('_', ' ').toUpperCase()}</Text>
                        </HStack>
                      </Td>
                      <Td>{activity.device}</Td>
                      <Td>{activity.location}</Td>
                      <Td>{activity.time}</Td>
                      <Td>
                        <Badge colorScheme={getStatusColor(activity.status)} borderRadius="full">
                          {activity.status.toUpperCase()}
                        </Badge>
                      </Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            </Box>
          </Box>
        </VStack>
      </MotionBox>
    </MotionBox>
  );
}