import { Button, HStack, useColorMode } from "@chakra-ui/react";
import { useMemo } from "react";
import { HiMoon, HiSun } from 'react-icons/hi';

const ColorModeSwitch = () => {
  const { toggleColorMode, colorMode } = useColorMode();

  const isDarkMode = useMemo(() => colorMode === 'dark', [colorMode]);
  const icon = isDarkMode ? <HiSun size={24} /> : <HiMoon size={24} />
  
  return (
    <HStack>
      <Button variant='solid' size='sm' onClick={toggleColorMode} leftIcon={icon}>{isDarkMode ? 'Light' : 'Dark'}</Button>
    </HStack>
  );
};

export default ColorModeSwitch;
