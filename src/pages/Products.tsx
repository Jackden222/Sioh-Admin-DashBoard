import { Box, Flex, Text, Input, InputGroup, InputLeftElement, Button, Table, Thead, Tbody, Tr, Th, Td, Badge, IconButton, useColorModeValue, Select, Image, HStack } from '@chakra-ui/react';
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

const products = [
  {
    id: 1,
    name: 'Laptop Pro X',
    category: 'Electronics',
    price: '$1,299',
    stock: 45,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 2,
    name: 'Wireless Mouse',
    category: 'Accessories',
    price: '$29.99',
    stock: 120,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 3,
    name: '4K Monitor',
    category: 'Electronics',
    price: '$499',
    stock: 15,
    status: 'Low Stock',
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 4,
    name: 'Mechanical Keyboard',
    category: 'Accessories',
    price: '$89.99',
    stock: 0,
    status: 'Out of Stock',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    category: 'Accessories',
    price: '$49.99',
    stock: 30,
    status: 'In Stock',
    image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
  }
];

export default function Products() {
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
          <Text fontSize="2xl" fontWeight="bold" mb={2}>Products</Text>
          <Text color={mutedColor}>Manage your product inventory</Text>
        </Box>
        <Button
          leftIcon={<FiPlus />}
          colorScheme="green"
          size="lg"
          borderRadius="xl"
        >
          Add Product
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
            <Input placeholder="Search products..." borderRadius="xl" />
          </InputGroup>
          <Select placeholder="Category" maxW="200px" borderRadius="xl">
            <option value="electronics">Electronics</option>
            <option value="accessories">Accessories</option>
          </Select>
          <Select placeholder="Status" maxW="200px" borderRadius="xl">
            <option value="in-stock">In Stock</option>
            <option value="low-stock">Low Stock</option>
            <option value="out-of-stock">Out of Stock</option>
          </Select>
          <Button leftIcon={<FiFilter />} variant="outline" borderRadius="xl">
            Filter
          </Button>
        </Flex>

        <Box overflowX="auto">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Category</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>Status</Th>
                <Th>Actions</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product.id}>
                  <Td>
                    <HStack>
                      <Image
                        src={product.image}
                        alt={product.name}
                        boxSize="40px"
                        objectFit="cover"
                        borderRadius="md"
                      />
                      <Text fontWeight="medium">{product.name}</Text>
                    </HStack>
                  </Td>
                  <Td>{product.category}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.stock}</Td>
                  <Td>
                    <Badge
                      colorScheme={
                        product.status === 'In Stock'
                          ? 'green'
                          : product.status === 'Low Stock'
                          ? 'yellow'
                          : 'red'
                      }
                      borderRadius="full"
                      px={2}
                      py={1}
                    >
                      {product.status}
                    </Badge>
                  </Td>
                  <Td>
                    <HStack spacing={2}>
                      <IconButton
                        aria-label="Edit product"
                        icon={<FiEdit2 />}
                        size="sm"
                        variant="ghost"
                        colorScheme="blue"
                        borderRadius="lg"
                      />
                      <IconButton
                        aria-label="Delete product"
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
