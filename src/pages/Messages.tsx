import { Box, Flex, Text, Input, InputGroup, InputLeftElement, Button, VStack, HStack, Avatar, Badge, IconButton, useColorModeValue, Select } from '@chakra-ui/react';
import { FiSearch, FiFilter, FiStar, FiMoreVertical } from 'react-icons/fi';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

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


const messages = [
  {
    id: 1,
    sender: 'John Doe',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    subject: 'New Order Confirmation',
    preview: 'Thank you for your order. Your order #12345 has been confirmed.',
    time: '10:30 AM',
    unread: true,
    starred: false
  },
  {
    id: 2,
    sender: 'Sarah Wilson',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    subject: 'Product Feedback',
    preview: 'I recently purchased your product and wanted to share my experience...',
    time: '9:15 AM',
    unread: false,
    starred: true
  },
  {
    id: 3,
    sender: 'Mike Johnson',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    subject: 'Support Request',
    preview: 'I need help with my recent order. The delivery was delayed...',
    time: 'Yesterday',
    unread: true,
    starred: false
  },
  {
    id: 4,
    sender: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    subject: 'Partnership Proposal',
    preview: 'I would like to discuss a potential partnership opportunity...',
    time: 'Yesterday',
    unread: false,
    starred: false
  },
  {
    id: 5,
    sender: 'David Brown',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
    subject: 'Payment Confirmation',
    preview: 'Your payment of $299.99 has been successfully processed.',
    time: '2 days ago',
    unread: false,
    starred: true
  }
];

export default function Messages() {
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
          <Text fontSize={{ base: 'xl', md: '2xl' }} fontWeight="bold" mb={2}>Messages</Text>
          <Text color={mutedColor} fontSize={{ base: 'sm', md: 'md' }}>Manage your communications</Text>
        </Box>
        <Button
          colorScheme="green"
          size={{ base: 'md', md: 'lg' }}
          borderRadius="xl"
        >
          New Message
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
            <Input placeholder="Search messages..." borderRadius="xl" />
          </InputGroup>
          <Select placeholder="Filter by status" maxW={{ base: 'full', md: '200px' }} borderRadius="xl">
            <option value="unread">Unread</option>
            <option value="starred">Starred</option>
            <option value="all">All Messages</option>
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

        <VStack spacing={4} align="stretch">
          {messages.map((message) => (
            <MotionFlex
              key={message.id}
              p={4}
              borderRadius="xl"
              bg={message.unread ? useColorModeValue('blue.50', 'blue.900') : 'transparent'}
              _hover={{ bg: hoverBg }}
              cursor="pointer"
              variants={itemVariants}
              flexDir={{ base: 'column', md: 'row' }}
              gap={{ base: 2, md: 0 }}
            >
              <HStack spacing={4} flex={1}>
                <Avatar src={message.avatar} size="md" />
                <Box flex={1}>
                  <Flex justify="space-between" align="center" mb={1}>
                    <Text fontWeight="bold" fontSize={{ base: 'sm', md: 'md' }}>{message.sender}</Text>
                    <Text fontSize="sm" color={mutedColor}>{message.time}</Text>
                  </Flex>
                  <Text fontWeight="medium" fontSize={{ base: 'sm', md: 'md' }} mb={1}>{message.subject}</Text>
                  <Text fontSize="sm" color={mutedColor} noOfLines={1}>{message.preview}</Text>
                </Box>
              </HStack>
              <HStack spacing={2} justify={{ base: 'flex-end', md: 'flex-start' }}>
                <IconButton
                  aria-label="Star message"
                  icon={<FiStar />}
                  size="sm"
                  variant="ghost"
                  colorScheme={message.starred ? 'yellow' : 'gray'}
                  borderRadius="lg"
                />
                {message.unread && (
                  <Badge colorScheme="blue" borderRadius="full">
                    New
                  </Badge>
                )}
                <IconButton
                  aria-label="More options"
                  icon={<FiMoreVertical />}
                  size="sm"
                  variant="ghost"
                  colorScheme="gray"
                  borderRadius="lg"
                />
              </HStack>
            </MotionFlex>
          ))}
        </VStack>
      </MotionBox>
    </MotionBox>
  );
}
