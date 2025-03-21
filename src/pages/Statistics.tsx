import { Box, Grid, Flex, Text, Select, useColorModeValue, Icon, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, useBreakpointValue } from '@chakra-ui/react';
import { FiTrendingUp, FiUsers, FiDollarSign, FiShoppingBag } from 'react-icons/fi';
import { motion } from 'framer-motion';
import { AreaChart, Area, BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MotionBox = motion(Box);
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

const monthlyData = [
  { name: 'Jan', revenue: 4000, expenses: 2400, profit: 1600 },
  { name: 'Feb', revenue: 3000, expenses: 1398, profit: 1602 },
  { name: 'Mar', revenue: 2000, expenses: 9800, profit: -7800 },
  { name: 'Apr', revenue: 2780, expenses: 3908, profit: -1128 },
  { name: 'May', revenue: 1890, expenses: 4800, profit: -2910 },
  { name: 'Jun', revenue: 2390, expenses: 3800, profit: -1410 },
  { name: 'Jul', revenue: 3490, expenses: 4300, profit: -810 },
];

const categoryData = [
  { name: 'Electronics', value: 400 },
  { name: 'Clothing', value: 300 },
  { name: 'Food', value: 300 },
  { name: 'Books', value: 200 },
];

const dailyVisitors = [
  { name: '00:00', visitors: 200 },
  { name: '04:00', visitors: 300 },
  { name: '08:00', visitors: 800 },
  { name: '12:00', visitors: 1200 },
  { name: '16:00', visitors: 900 },
  { name: '20:00', visitors: 500 },
  { name: '23:59', visitors: 200 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export default function Statistics() {
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.100', 'gray.700');
  const mutedColor = useColorModeValue('gray.500', 'gray.400');
  const isMobile = useBreakpointValue({ base: true, md: false });

  const stats = [
    { 
      label: 'Total Revenue', 
      value: '$23,456', 
      icon: FiDollarSign,
      change: 23.36,
      duration: 'since last month'
    },
    { 
      label: 'Active Users', 
      value: '1,234', 
      icon: FiUsers,
      change: 12.5,
      duration: 'since last week'
    },
    { 
      label: 'Sales', 
      value: '456', 
      icon: FiShoppingBag,
      change: -5.25,
      duration: 'since yesterday'
    },
    { 
      label: 'Growth Rate', 
      value: '15.3%', 
      icon: FiTrendingUp,
      change: 8.15,
      duration: 'since last quarter'
    }
  ];

  return (
    <MotionBox
      p={{ base: 4, md: 6 }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Flex 
        justify="space-between" 
        align="center" 
        mb={8}
        flexDir={{ base: 'column', md: 'row' }}
        gap={{ base: 4, md: 0 }}
      >
        <Box>
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>Statistics Overview</Text>
          <Text color={mutedColor} fontSize={{ base: 'sm', md: 'md' }}>Detailed analysis and metrics</Text>
        </Box>
        <Select
          w={{ base: 'full', md: '200px' }}
          size={{ base: 'md', md: 'lg' }}
          borderRadius="xl"
          borderColor={borderColor}
          _hover={{ borderColor: 'green.500' }}
        >
          <option value="week">Last 7 days</option>
          <option value="month">Last 30 days</option>
          <option value="year">Last 12 months</option>
        </Select>
      </Flex>

      <MotionGrid
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }}
        gap={6}
        mb={8}
        variants={itemVariants}
      >
        {stats.map((stat) => (
          <MotionBox
            key={stat.label}
            bg={bg}
            p={{ base: 4, md: 6 }}
            borderRadius="xl"
            shadow="lg"
            variants={itemVariants}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <Flex justify="space-between" mb={4}>
              <Icon as={stat.icon} boxSize={{ base: 5, md: 6 }} color="green.500" />
            </Flex>
            <Stat>
              <StatLabel color={mutedColor} fontSize={{ base: 'sm', md: 'md' }}>{stat.label}</StatLabel>
              <StatNumber fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" my={2}>
                {stat.value}
              </StatNumber>
              <StatHelpText fontSize={{ base: 'sm', md: 'md' }}>
                <StatArrow 
                  type={stat.change > 0 ? 'increase' : 'decrease'}
                  color={stat.change > 0 ? 'green.500' : 'red.500'}
                />
                {Math.abs(stat.change)}% {stat.duration}
              </StatHelpText>
            </Stat>
          </MotionBox>
        ))}
      </MotionGrid>

      <MotionGrid 
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
        gap={6} 
        mb={8}
      >
        <MotionBox
          bg={bg}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={4}>Revenue vs Expenses</Text>
          <Box h={{ base: '250px', md: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData}>
                <defs>
                  <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#48BB78" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#48BB78" stopOpacity={0}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#F56565" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#F56565" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
                <XAxis dataKey="name" stroke={useColorModeValue(mutedColor, 'white')} />
                <YAxis stroke={useColorModeValue(mutedColor, 'white')} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: bg,
                    borderColor: borderColor,
                    color: useColorModeValue('#2D3748', 'white'),
                  }}
                />
                <Legend wrapperStyle={{ color: useColorModeValue('#2D3748', 'white') }} />
                <Area
                  type="monotone"
                  dataKey="revenue"
                  stroke="#48BB78"
                  fillOpacity={1}
                  fill="url(#colorRevenue)"
                />
                <Area
                  type="monotone"
                  dataKey="expenses"
                  stroke="#F56565"
                  fillOpacity={1}
                  fill="url(#colorExpenses)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </Box>
        </MotionBox>

        <MotionBox
          bg={bg}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={4}>Daily Visitors</Text>
          <Box h={{ base: '250px', md: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={dailyVisitors}>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
                <XAxis dataKey="name" stroke={useColorModeValue(mutedColor, 'white')} />
                <YAxis stroke={useColorModeValue(mutedColor, 'white')} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: bg,
                    borderColor: borderColor,
                    color: useColorModeValue('#2D3748', 'white'),
                  }}
                />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#805AD5"
                  strokeWidth={2}
                  dot={{ r: 4 }}
                  activeDot={{ r: 8 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Box>
        </MotionBox>
      </MotionGrid>

      <MotionGrid 
        templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} 
        gap={6}
      >
        <MotionBox
          bg={bg}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={4}>Monthly Profit</Text>
          <Box h={{ base: '250px', md: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={borderColor} />
                <XAxis dataKey="name" stroke={useColorModeValue(mutedColor, 'white')} />
                <YAxis stroke={useColorModeValue(mutedColor, 'white')} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: bg,
                    borderColor: borderColor,
                    color: useColorModeValue('#2D3748', 'white'),
                  }}
                />
                <Bar
                  dataKey="profit"
                  fill="#4299E1"
                  radius={[4, 4, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </Box>
        </MotionBox>

        <MotionBox
          bg={bg}
          p={{ base: 4, md: 6 }}
          borderRadius="xl"
          shadow="lg"
          variants={itemVariants}
        >
          <Text fontSize={{ base: 'md', md: 'lg' }} fontWeight="bold" mb={4}>Sales by Category</Text>
          <Box h={{ base: '250px', md: '300px' }}>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={isMobile ? 40 : 60}
                  outerRadius={isMobile ? 60 : 80}
                  fill="#8884d8"
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((_, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: bg,
                    borderColor: borderColor,
                    color: useColorModeValue('#2D3748', 'white'),
                  }}
                />
                <Legend wrapperStyle={{ color: useColorModeValue('#2D3748', 'white') }} />
              </PieChart>
            </ResponsiveContainer>
          </Box>
        </MotionBox>
      </MotionGrid>
    </MotionBox>
  );
}