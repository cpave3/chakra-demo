import { Box, Button, Heading, Text } from "@chakra-ui/react";
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Box maxW="32rem">
      <Heading mb={4}>Chakra UI Demo</Heading>
      <Text fontSize="xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias excepturi
        voluptas numquam assumenda debitis facere nobis fuga quis laborum quia
        sunt inventore tenetur illo dolorem perferendis, ad id ex eaque.
      </Text>
      <Button size="lg" colorScheme={"teal"} mt="24px">
        Do something fun today
      </Button>
    </Box>
  );
}

export default App;
