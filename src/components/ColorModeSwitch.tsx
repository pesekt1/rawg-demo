import { HStack, Text } from "@chakra-ui/layout";
import { Switch } from "@chakra-ui/switch";
import { useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <HStack>
        <Switch
          onChange={toggleColorMode}
          isChecked={colorMode === "dark"}
          colorScheme="green"
        />
        <Text>Dark Mode</Text>
      </HStack>
    </>
  );
};

export default ColorModeSwitch;
