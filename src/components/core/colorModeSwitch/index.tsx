import { HStack, Switch, useColorMode } from "@chakra-ui/react";
import { useMemo } from "react";

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const isDarkMode = useMemo(() => colorMode === 'dark', [colorMode]);

  //   TODO: Add Icon based upon color mode
  return (
    <HStack>
      <Switch
        colorScheme='green'
        isChecked={isDarkMode}
        onChange={toggleColorMode}
      />
    </HStack>
  );
};

export default ColorModeSwitch;
