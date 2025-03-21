import { Box, Flex, Text, Input, InputGroup, InputLeftElement, Button, HStack, Badge, IconButton, useColorModeValue, Select, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';
import { FiSearch, FiFilter, FiEdit2, FiTrash2, FiEye } from 'react-icons/fi';
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

const orders = [
  {
    id: 'ORD-001',
    customer: 'John Doe',
    date: '2024-03-15',
    total: 299.99,
    status: 'pending',
    items: 3
  },
  {
    id: 'ORD-002',
    customer: 'Sarah Wilson',
    date: '2024-03-14',
    total: 149.99,
    status: 'processing',
    items: 1
  },
  {
    id: 'ORD-003',
    customer: 'Mike Johnson',
    date: '2024-03-14',
    total: 499.99,
    status: 'shipped',
    items: 5
  },
  {
    id: 'ORD-004',
    customer: 'Emma Davis',
    date: '2024-03-13',
    total: 199.99,
    status: 'delivered',
    items: 2
  },
  {
    id: 'ORD-005',
    customer: 'David Brown',
    date: '2024-03-13',
    total: 399.99,
    status: 'cancelled',
    items: 4
  }
];

const getStatusColor = (status: string) => {
  const colors = {
    pending: 'yellow',
    processing: 'blue',
    shipped: 'purple',
    delivered: 'green',
    cancelled: 'red'
  };
  return colors[status as keyof typeof colors] || 'gray';
};

export default function Orders() {
  const bg = useColorModeValue('white', 'gray.800');
  const mutedColor = useColorModeValue('gray.500', 'gray.400');
  const hoverBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <MotionBox
      p={{ base: 4, md: 6 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Flex justify="space-between" align="center" mb={8}>
        <Box>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>Orders</Text>
          <Text color={mutedColor} fontSize={{ base: 'sm', md: 'md' }}>Manage your orders</Text>
        </Box>
        <Button
          colorScheme="green"
          size={{ base: 'md', md: 'lg' }}
          borderRadius="xl"
        >
          New Order
        </Button>
      </Flex>

      <MotionBox
        bg={bg}
        p={{ base: 4, md: 6 }}
        borderRadius="xl"
        shadow="lg"
        variants={itemVariants}
      >
        <Flex 
          gap={4} 
          mb={6}
          flexDir={{ base: 'column', md: 'row' }}
        >
          <InputGroup maxW={{ base: 'full', md: '300px' }}>
            <InputLeftElement pointerEvents="none">
              <FiSearch color={mutedColor} />
            </InputLeftElement>
            <Input placeholder="Search orders..." borderRadius="xl" />
          </InputGroup>
          <Select placeholder="Filter by status" maxW={{ base: 'full', md: '200px' }} borderRadius="xl">
            <option value="pending">Pending</option>
            <option value="processing">Processing</option>
            <option value="shipped">Shipped</option>
            <option value="delivered">Delivered</option>
            <option value="cancelled">Cancelled</option>
          </Select>
          <Button 
            leftIcon={<FiFilter />} 
            variant="outline" 
            borderRadius="xl"
            w={{ base: 'full', md: 'auto' }}
          >
            Filter
          </Button>
        </Flex>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order ID</Th>
                <Th>Customer</Th>
                <Th>Date</Th>
                <Th>Items</Th>
                <Th>Total</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {orders.map((order) => (
                <Tr key={order.id} _hover={{ bg: hoverBg }}>
                  <Td fontWeight="bold">{order.id}</Td>
                  <Td>{order.customer}</Td>
                  <Td>{order.date}</Td>
                  <Td>{order.items}</Td>
                  <Td>${order.total.toFixed(2)}</Td>
                  <Td>
                    <Badge colorScheme={getStatusColor(order.status)} borderRadius="full">
                      {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        aria-label="View order"
                        icon={<FiEye />}
                        size="sm"
                        variant="ghost"
                        colorScheme="blue"
                        borderRadius="lg"
                      />
                      <IconButton
                        aria-label="Edit order"
                        icon={<FiEdit2 />}
                        size="sm"
                        variant="ghost"
                        colorScheme="green"
                        borderRadius="lg"
                      />
                      <IconButton
                        aria-label="Delete order"
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
