import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Button,
} from '@chakra-ui/react';

const ProfileDropdown: React.FC = () => {
  const { user, isAuthenticated } = useAuth0();

  if (!isAuthenticated) {
    return null;
  }

  return ( 
    <Menu>
      <MenuButton as={Button} rounded={'full'}>
        <Avatar size={'sm'} src={user?.picture} name={user?.name} />
      </MenuButton>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
