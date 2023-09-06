import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
  Menu,
  MenuButton,
  Avatar,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";

interface ProfileDropdownProps {
  onSignOut: () => void;
}

const ProfileDropdown: React.FC<ProfileDropdownProps> = ({ onSignOut }) => {
  const { user, isAuthenticated } = useAuth0();

  const navigate = useNavigate();

  if (!isAuthenticated) {
    return null;
  }

  const handleGoToProfile = () => {
    navigate("profile");
  };

  return (
    <Menu>
      <MenuButton
        backgroundColor={"transparent"}
        shadow={"md"}
        borderRadius={"full"}
      >
        <Avatar
          size={"lg"}
          src={user?.picture}
          name={user?.name}
          border={"1px solid lightgray"}
        />
      </MenuButton>
      <MenuList fontSize={"lg"}>
        <MenuItem onClick={handleGoToProfile}>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={onSignOut}>Sign Out</MenuItem>
      </MenuList>
    </Menu>
  );
};

export default ProfileDropdown;
