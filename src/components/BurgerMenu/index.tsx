import { Burger, Menu } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { MenuDropdownItems } from "../MenuDropdownItems";

export const BurgerMenu = () => {
  const [isMenuOpened, { toggle }] = useDisclosure(false);

  return (
    <Menu opened={isMenuOpened}>
      <Menu.Target>
        <Burger color="brand-blue.7" opened={isMenuOpened} onClick={toggle} />
      </Menu.Target>
      <Menu.Dropdown>
        <MenuDropdownItems />
      </Menu.Dropdown>
    </Menu>
  );
};
