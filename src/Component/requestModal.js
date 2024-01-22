import { Tabs, rem, Textarea } from "@mantine/core";
import {
  IconPhoto,
  IconMessageCircle,
  IconSettings,
} from "@tabler/icons-react";
import "../Stylesheet/User/user-add.css";

function RequestMod() {
  const iconStyle = { width: rem(12), height: rem(12) };

  return (
    <Tabs
      color="orangered"
      variant="pills"
      radius="sm"
      defaultValue="first"
      orientation="vertical"
      className="root"
    >
      <Tabs.List className="list">
        <Tabs.Tab value="first" className="tab">
          Step 1
        </Tabs.Tab>
        <Tabs.Tab value="second" className="tab">
          Step 2
        </Tabs.Tab>
        <Tabs.Tab value="third" className="tab">
          Step 3
        </Tabs.Tab>
        <Tabs.Tab value="fourth" className="tab">
          Step 4
        </Tabs.Tab>
        <Tabs.Tab value="fifth" className="tab">
          Step 5
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" className="panel">
        <input type="text" placeholder="Parcel Country"/>
        <input type="text" placeholder="Parcel State"/>
        <input type="text" placeholder="Parcel City"/>
        <input type="text" placeholder="Parcel Address"/>
      </Tabs.Panel>

      <Tabs.Panel value="second" className="panel">
        <input type="text" placeholder="Recipient Country"/>
        <input type="text" placeholder="Recipient State"/>
        <input type="text" placeholder="Recipient City"/>
        <input type="text" placeholder="Recipient Address"/>
      </Tabs.Panel>

      <Tabs.Panel value="third" className="panel shorter">
        <input type="text" placeholder="Recipient Name"/>
        <input type="text" placeholder="Recipient Email"/>
        <input type="text" placeholder="Recipient Phone"/>
      </Tabs.Panel>

      <Tabs.Panel value="fourth" className="panel">
        <input type="text" placeholder="Parcel Name"/>
        <input type="number" placeholder="Parcel Width"/>
        <input type="number" placeholder="Parcel Length"/>
        <input type="number" placeholder="Parcel Height"/>
      </Tabs.Panel>

      <Tabs.Panel value="fifth" className="panel">
        <Textarea resize="vertical" placeholder="Parcel Description" className="p-desc"/>
      </Tabs.Panel>
    </Tabs>
  );
}

export default RequestMod;
