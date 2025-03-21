import { Box, Flex, Text, Input, InputGroup, InputLeftElement, Button, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, useColorModeValue, Avatar, HStack, Select } from '@chakra-ui/react';
import { FiSearch, FiEdit2, FiTrash2, FiPlus, FiFilter } from 'react-icons/fi';
import { motion } from 'framer-motion';

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


const customers = [
  {
    id: 1,
    name: 'John Doe',
    email: 'john@example.com',
    phone: '+1 234 567 890',
    status: 'Active',
    lastOrder: '2024-03-20',
    totalSpent: '$1,234',
    avatar: 'https://bit.ly/dan-abramov'
  },
  {
    id: 2,
    name: 'Jane Smith',
    email: 'jane@example.com',
    phone: '+1 234 567 891',
    status: 'Inactive',
    lastOrder: '2024-03-15',
    totalSpent: '$856',
    avatar: 'https://bit.ly/kent-c-dodds'
  },
  {
    id: 3,
    name: 'Mike Johnson',
    email: 'mike@example.com',
    phone: '+1 234 567 892',
    status: 'Active',
    lastOrder: '2024-03-18',
    totalSpent: '$2,345',
    avatar: 'https://bit.ly/ryan-florence'
  },
  {
    id: 4,
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    phone: '+1 234 567 893',
    status: 'Active',
    lastOrder: '2024-03-19',
    totalSpent: '$987',
    avatar: 'https://bit.ly/prosper-baba'
  },
  {
    id: 5,
    name: 'Tom Brown',
    email: 'tom@example.com',
    phone: '+1 234 567 894',
    status: 'Inactive',
    lastOrder: '2024-03-10',
    totalSpent: '$1,567',
    avatar: 'https://bit.ly/code-beast'
  }
];

export default function Customers() {
  const bg = useColorModeValue('white', 'gray.800');
  const mutedColor = useColorModeValue('gray.500', 'gray.400');

  return (
    <MotionBox
      p={6}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Text fontSize="2xl" fontWeight="bold" mb={2}>Customers</Text>
          <Text color={mutedColor}>Manage your customers and their information</Text>
        </Box>
        <Button
          leftIcon={<FiPlus />}
          colorScheme="green"
          size="lg"
          borderRadius="xl"
        >
          Add Customer
        </Button>
      </Flex>

      <MotionBox
        bg={bg}
        p={6}
        borderRadius="xl"
        shadow="lg"
        variants={itemVariants}
      >
        <Flex gap={4} mb={6}>
          <InputGroup maxW="300px">
            <InputLeftElement pointerEvents="none">
              <FiSearch color={mutedColor} />
            </InputLeftElement>
            <Input placeholder="Search customers..." borderRadius="xl" />
          </InputGroup>
          <Select placeholder="Status" maxW="200px" borderRadius="xl">
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </Select>
          <Button leftIcon={<FiFilter />} variant="outline" borderRadius="xl">
            Filter
          </Button>
        </Flex>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Customer</Th>
                <Th>Contact</Th>
                <Th>Status</Th>
                <Th>Last Order</Th>
                <Th>Total Spent</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {customers.map((customer) => (
                <Tr key={customer.id}>
                  <Td>
                    <HStack>
                      <Avatar size="sm" src={customer.avatar} />
                      <Text fontWeight="medium">{customer.name}</Text>
                    </HStack>
                  </Td>
                  <Td>
                    <Box>
                      <Text>{customer.email}</Text>
                      <Text fontSize="sm" color={mutedColor}>{customer.phone}</Text>
                    </Box>
                  </Td>
                  <Td>
                    <Badge
                      colorScheme={customer.status === 'Active' ? 'green' : 'gray'}
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      {customer.status}
                    </Badge>
                  </Td>
                  <Td>{customer.lastOrder}</Td>
                  <Td>{customer.totalSpent}</Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        aria-label="Edit customer"
                        icon={<FiEdit2 />}
                        size="sm"
                        variant="ghost"
                        colorScheme="blue"
                        borderRadius="lg"
                      />
                      <IconButton
                        aria-label="Delete customer"
                        icon={<FiTrash2 />}
                        size="sm"
                        variant="ghost"
                        colorScheme="red"
                        borderRadius="lg"
                      />
                    </HStack>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </MotionBox>
    </MotionBox>
  );
}
