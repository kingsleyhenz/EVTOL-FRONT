import { Tabs, rem } from '@mantine/core';
import { IconPhoto, IconMessageCircle, IconSettings } from '@tabler/icons-react';
import '../Stylesheet/User/user-add.css'

function RequestMod() {
    const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs color="orange" variant="pills" radius="sm" defaultValue="gallery" orientation="vertical" className='root'>
      <Tabs.List className='list'>
        <Tabs.Tab value="gallery" className='tab'>
          Step 1
        </Tabs.Tab>
        <Tabs.Tab value="messages" className='tab'>
          Step 2
        </Tabs.Tab>
        <Tabs.Tab value="settings" className='tab'>
          Step 3
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="gallery">
        Gallery tab content
      </Tabs.Panel>

      <Tabs.Panel value="messages">
        Messages tab content
      </Tabs.Panel>

      <Tabs.Panel value="settings">
        Settings tab content
      </Tabs.Panel>
    </Tabs>
  );
}

export default RequestMod