import { Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";

export const BurgerMenu = () => {
  const [isMenuOpened, { toggle }] = useDisclosure(false);

  return <Burger color="brand-blue.7" opened={isMenuOpened} onClick={toggle} />;
};
