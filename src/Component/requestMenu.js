import { Menu, Button, Text, rem } from '@mantine/core';
import {
  IconSettings,
  IconSearch,
  IconPhoto,
  IconMessageCircle,
  IconTrash,
  IconArrowsLeftRight,
} from '@tabler/icons-react';
import { SlOptionsVertical } from "react-icons/sl";

const ReqMenu =()=> {
  return (
    <Menu shadow="md" width={200}>
      <Menu.Target>
        <Button style={{fontSize: '20px', backgroundColor: 'transparent', color: 'grey'}}>
          <SlOptionsVertical/>
        </Button>
      </Menu.Target>

      <Menu.Dropdown>
        <Menu.Label>Handle Requests</Menu.Label>
        <Menu.Item leftSection={<IconSettings style={{ width: rem(14), height: rem(14) }} />}>
          Accept
        </Menu.Item>
        <Menu.Item leftSection={<IconMessageCircle style={{ width: rem(14), height: rem(14) }} />}>
          Decline
        </Menu.Item>
        <Menu.Item leftSection={<IconPhoto style={{ width: rem(14), height: rem(14) }} />}>
          Deploy
        </Menu.Item>
      </Menu.Dropdown>
    </Menu>
  );
}

export default ReqMenu;