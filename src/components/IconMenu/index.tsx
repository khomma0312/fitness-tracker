import { useState } from "react";
import { Menu } from "@mantine/core";
import { UserCircleIcon } from "../UserCircleIcon";
import { MenuDropdownItems } from "../MenuDropdownItems";

export const IconMenu = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const iconHandleOnClick = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <Menu width={200} opened={isMenuOpened}>
      <Menu.Target>
        <UserCircleIcon
          isMenuOpened={isMenuOpened}
          handleOnClick={iconHandleOnClick}
        />
      </Menu.Target>
      <Menu.Dropdown>
        <MenuDropdownItems />
      </Menu.Dropdown>
    </Menu>
  );
};
