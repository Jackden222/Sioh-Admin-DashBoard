import { Box, Grid, Flex, Text, Button, VStack, HStack, Icon, useColorModeValue } from '@chakra-ui/react';
import { FiArrowUp, FiArrowDown, FiMoreHorizontal } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);
const MotionGrid = motion(Grid);

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

const data = {
  stats: {
    netIncome: 193000,
    netIncomeChange: 35,
    totalReturn: 32000,
    totalReturnChange: -24
  },
  transactions: [
    { name: 'Premium T-Shirt', status: 'Completed', date: 'Jul 12th 2024', id: 'OJWEJS7ISNC' },
    { name: 'Playstation 5', status: 'Pending', date: 'Jul 12th 2024', id: 'OJWEJS7ISNC' },
    { name: 'Hoodie Gembung', status: 'Pending', date: 'Jul 12th 2024', id: 'OJWEJS7ISNC' },
    { name: 'iPhone 15 Pro Max', status: 'Completed', date: 'Jul 12th 2024', id: 'OJWEJS7ISNC' },
  ],
  revenueData: [
    { month: 'Jan', income: 150000, expenses: 120000 },
    { month: 'Feb', income: 170000, expenses: 130000 },
    { month: 'Mar', income: 160000, expenses: 125000 },
    { month: 'Apr', income: 180000, expenses: 140000 },
    { month: 'May', income: 193000, expenses: 150000 },
  ],
  performanceData: [
    { name: 'View Count', value: 68 },
    { name: 'Percentage', value: 23 },
    { name: 'Sales', value: 9 },
  ]
};

export const Dashboard = () => {
  const bgCard = useColorModeValue('white', 'gray.700');
  const bgHover = useColorModeValue('gray.50', 'gray.600');

  return (
    <MotionBox
      p={{ base: 4, md: 6 }}
      as="section"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <MotionFlex
        justify="space-between"
        align="center"
        mb={6}
        variants={itemVariants}
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 0 }}
      >
        <Box>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={1}>Dashboard</Text>
          <Text color="gray.500" fontSize={{ base: 'sm', md: 'md' }}>An any way to manage sales with care and precision.</Text>
        </Box>
        <Button
          variant="outline"
          _hover={{ bg: bgHover }}
          size={{ base: 'md', md: 'lg' }}
          fontWeight="medium"
          w={{ base: 'full', md: 'auto' }}
        >
          January 2024 - May 2024
        </Button>
      </MotionFlex>

      <MotionGrid 
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
        gap={6} 
        mb={6}
      >
        <MotionBox
          p={{ base: 4, md: 6 }}
          bg={bgCard}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Flex justify="space-between" mb={4}>
            <Text color="gray.500" fontSize={{ base: 'md', md: 'lg' }}>Net Income</Text>
            <Icon as={FiMoreHorizontal} />
          </Flex>
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={2}>${data.stats.netIncome.toLocaleString()}</Text>
          <Flex align="center" color={data.stats.netIncomeChange > 0 ? "green.500" : "red.500"}>
            <Icon as={data.stats.netIncomeChange > 0 ? FiArrowUp : FiArrowDown} mr={1} />
            <Text fontSize={{ base: 'md', md: 'lg' }}>{Math.abs(data.stats.netIncomeChange)}% from last month</Text>
          </Flex>
        </MotionBox>

        <MotionBox
          p={{ base: 4, md: 6 }}
          bg={bgCard}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Flex justify="space-between" mb={4}>
            <Text color="gray.500" fontSize={{ base: 'md', md: 'lg' }}>Total Return</Text>
            <Icon as={FiMoreHorizontal} />
          </Flex>
          <Text fontSize={{ base: '2xl', md: '4xl' }} fontWeight="bold" mb={2}>${data.stats.totalReturn.toLocaleString()}</Text>
          <Flex align="center" color={data.stats.totalReturnChange > 0 ? "green.500" : "red.500"}>
            <Icon as={data.stats.totalReturnChange > 0 ? FiArrowUp : FiArrowDown} mr={1} />
            <Text fontSize={{ base: 'md', md: 'lg' }}>{Math.abs(data.stats.totalReturnChange)}% from last month</Text>
          </Flex>
        </MotionBox>
      </MotionGrid>

      <MotionGrid 
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
        gap={6}
      >
        <MotionBox
          bg={bgCard}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Flex justify="space-between" mb={6}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">Transaction</Text>
            <Icon as={FiMoreHorizontal} />
          </Flex>
          <VStack spacing={4} align="stretch">
            {data.transactions.map((transaction, index) => (
              <MotionFlex
                key={transaction.name}
                justify="space-between"
                align="center"
                p={3}
                borderRadius="lg"
                _hover={{ bg: bgHover }}
                cursor="pointer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                flexDir={{ base: 'column', md: 'row' }}
                gap={{ base: 2, md: 0 }}
              >
                <HStack spacing={4} w={{ base: 'full', md: 'auto' }}>
                  <Box
                    w={10}
                    h={10}
                    bg="gray.100"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  />
                  <Box>
                    <Text fontWeight="bold">{transaction.name}</Text>
                    <Text fontSize="sm" color="gray.500">{transaction.date}</Text>
                  </Box>
                </HStack>
                <Text
                  px={3}
                  py={1}
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight="medium"
                  bg={transaction.status === 'Completed' ? 'green.100' : 'orange.100'}
                  color={transaction.status === 'Completed' ? 'green.700' : 'orange.700'}
                >
                  {transaction.status}
                </Text>
              </MotionFlex>
            ))}
          </VStack>
        </MotionBox>

        <MotionBox
          bg={bgCard}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.2 }}
        >
          <Flex justify="space-between" mb={6}>
            <Text fontSize={{ base: 'lg', md: 'xl' }} fontWeight="bold">Revenue</Text>
            <Icon as={FiMoreHorizontal} />
          </Flex>
          <Box h={{ base: '250px', md: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data.revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke={useColorModeValue('#eee', 'gray.700')} />
                <XAxis dataKey="month" stroke={useColorModeValue('#2D3748', 'white')} />
                <YAxis stroke={useColorModeValue('#2D3748', 'white')} />
                <Bar
                  dataKey="income"
                  fill={useColorModeValue('#2D3748', '#48BB78')}
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
                <Bar
                  dataKey="expenses"
                  fill={useColorModeValue('#48BB78', '#2B6CB0')}
                  radius={[4, 4, 0, 0]}
                  animationDuration={1500}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </MotionBox>
      </MotionGrid>
    </MotionBox>
  );
}; 