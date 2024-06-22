import { useState } from "react";
import { Container, VStack, Input, Button, Text, Heading, Box } from "@chakra-ui/react";

const Index = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [error, setError] = useState("");

  const calculateBMI = () => {
    if (!weight || !height) {
      setError("Please enter both weight and height.");
      return;
    }

    const weightNum = parseFloat(weight);
    const heightNum = parseFloat(height);

    if (isNaN(weightNum) || isNaN(heightNum)) {
      setError("Please enter valid numbers for weight and height.");
      return;
    }

    const bmiValue = (weightNum / (heightNum * heightNum)).toFixed(2);
    setBmi(bmiValue);
    setError("");
  };

  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4} width="100%">
        <Heading as="h1" size="xl">BMI Calculator</Heading>
        <Input
          placeholder="Enter weight in kg"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
          type="number"
          size="lg"
        />
        <Input
          placeholder="Enter height in meters"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
          type="number"
          size="lg"
        />
        <Button colorScheme="teal" size="lg" onClick={calculateBMI}>Calculate BMI</Button>
        {error && <Text color="red.500">{error}</Text>}
        {bmi && (
          <Box mt={4} p={4} borderWidth={1} borderRadius="md" width="100%" textAlign="center">
            <Text fontSize="2xl">Your BMI is: {bmi}</Text>
          </Box>
        )}
      </VStack>
    </Container>
  );
};

export default Index;