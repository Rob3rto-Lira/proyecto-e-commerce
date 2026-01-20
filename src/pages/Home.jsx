import React from 'react';
import { Box, Heading, Text, Button, SimpleGrid, Stack } from '@chakra-ui/react';
// Importamos los íconos de una forma que no cause conflictos
import { FaBitcoin, FaChartLine, FaWallet } from 'react-icons/fa'; 

const Home = () => {
  return (
    <Box>
      {/* Sección HERO */}
      <Box 
        bg="gray.900" // Fondo oscuro sólido (más seguro para v3)
        color="white" 
        py={{ base: "40px", md: "80px" }} 
        textAlign="center"
        px="20px"
      >
        <Heading 
          as="h1" 
          size="2xl" 
          fontWeight="bold" 
          mb="4"
        >
          Bienvenido al Futuro de las Cripto
        </Heading>
        <Text 
          fontSize="lg" 
          maxW="600px" 
          mx="auto" 
          mb="8" 
          color="gray.400"
        >
          Explora, intercambia y gestiona tus activos digitales con total seguridad.
        </Text>
        <Button 
          bg="blue.600" 
          color="white" 
          size="lg" 
          borderRadius="full"
          _hover={{ bg: "blue.700" }}
          px="8"
        >
          Empezar Ahora
        </Button>
      </Box>

      {/* Sección de Cards */}
      <Box py="60px" px="20px" maxW="1200px" mx="auto">
        <SimpleGrid columns={{ base: 1, md: 3 }} gap="10">
          
          {/* Card 1 */}
          <Box p="6" shadow="md" borderRadius="lg" border="1px solid" borderColor="gray.200" textAlign="center">
            <Stack align="center" gap="4">
              <FaWallet size="40px" color="#3182ce" />
              <Heading size="md">Billetera Segura</Heading>
              <Text color="gray.600">Protección de activos con tecnología de última generación.</Text>
            </Stack>
          </Box>

          {/* Card 2 */}
          <Box p="6" shadow="md" borderRadius="lg" border="1px solid" borderColor="gray.200" textAlign="center">
            <Stack align="center" gap="4">
              <FaChartLine size="40px" color="#3182ce" />
              <Heading size="md">Gráficos en Vivo</Heading>
              <Text color="gray.600">Sigue el mercado en tiempo real con datos precisos.</Text>
            </Stack>
          </Box>

          {/* Card 3 */}
          <Box p="6" shadow="md" borderRadius="lg" border="1px solid" borderColor="gray.200" textAlign="center">
            <Stack align="center" gap="4">
              <FaBitcoin size="40px" color="#3182ce" />
              <Heading size="md">Trading Veloz</Heading>
              <Text color="gray.600">Compra y vende en segundos con las comisiones más bajas.</Text>
            </Stack>
          </Box>

        </SimpleGrid>
      </Box>
    </Box>
  );
};

export default Home;