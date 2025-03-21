import { ChakraProvider, Box, IconButton, useColorMode } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { FiMoon, FiSun } from 'react-icons/fi';
import Layout from './components/Layout/Layout';
import { Dashboard } from './pages/Dashboard';
import Statistics from './pages/Statistics';
import Customers from './pages/Customers';
import Products from './pages/Products';
import Messages from './pages/Messages';
import Orders from './pages/Orders';
import Settings from './pages/Settings';
import Security from './pages/Security';
import theme from './theme';

const ColorModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Box position="fixed" bottom={4} right={4}>
      <IconButton
        aria-label="Toggle color mode"
        icon={colorMode === 'light' ? <FiMoon /> : <FiSun />}
        onClick={toggleColorMode}
        size="lg"
        borderRadius="full"
        shadow="lg"
      />
    </Box>
  );
};

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Dashboard />} />
            <Route path="statistics" element={<Statistics />} />
            <Route path="customers" element={<Customers />} />
            <Route path="products" element={<Products />} />
            <Route path="messages" element={<Messages />} />
            <Route path="orders" element={<Orders />} />
            <Route path="settings" element={<Settings />} />
            <Route path="security" element={<Security />} />
          </Route>
        </Routes>
        <ColorModeToggle />
      </Router>
    </ChakraProvider>
  );
}

export default App;
