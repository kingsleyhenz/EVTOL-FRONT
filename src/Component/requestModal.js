import React, { useState } from "react";
import { Tabs, rem, Textarea } from "@mantine/core";
import "../Stylesheet/User/user-add.css";

function RequestMod() {
  const iconStyle = { width: rem(12), height: rem(12) };

  const tabValues = ["first", "second", "third", "fourth", "fifth"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < tabValues.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handleBack = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <Tabs
      color="orangered"
      variant="pills"
      radius="sm"
      value={tabValues[currentIndex]}
      orientation="vertical"
      className="root"
      placement="right"
    >
      <Tabs.List className="list">
        <Tabs.Tab value="next" className="tab" onClick={handleNext}>
          Next
        </Tabs.Tab>
        <Tabs.Tab value="back" className="tab" onClick={handleBack}>
          Back
        </Tabs.Tab>
      </Tabs.List>

      <Tabs.Panel value="first" className="panel">
        <div className="panel-inp">
          <label>Parcel Country</label>
          <input type="text" placeholder="Parcel Country" />
        </div>
        <div className="panel-inp">
          <label>Parcel State</label>
          <input type="text" placeholder="Parcel State" />
        </div>
        <div className="panel-inp">
          <label>Parcel City</label>
          <input type="text" placeholder="Parcel City" />
        </div>
        <div className="panel-inp">
          <label>Parcel Address</label>
          <input type="text" placeholder="Parcel Address" />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="second" className="panel">
        <div className="panel-inp">
          <label>Recipient Country</label>
          <input type="text" placeholder="Recipient Country" />
        </div>
        <div className="panel-inp">
          <label>Recipient State</label>
          <input type="text" placeholder="Recipient State" />
        </div>
        <div className="panel-inp">
          <label>Recipient City</label>
          <input type="text" placeholder="Recipient City" />
        </div>
        <div className="panel-inp">
          <label>Recipient Address</label>
          <input type="text" placeholder="Recipient Address" />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="third" className="panel shorter">
        <div className="panel-inp">
          <label>Recipient Name</label>
          <input type="text" placeholder="Recipient Name" />
        </div>
        <div className="panel-inp">
          <label>Recipient Email</label>
          <input type="text" placeholder="Recipient Email" />
        </div>
        <div className="panel-inp">
          <label>Recipient Phone</label>
          <input type="text" placeholder="Recipient Phone" />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="fourth" className="panel">
        <div className="panel-inp">
          <label>Parcel Name</label>
          <input type="text" placeholder="Parcel Name" />
        </div>
        <div className="panel-inp">
          <label>Parcel Width</label>
          <input type="number" placeholder="Parcel Width" />
        </div>
        <div className="panel-inp">
          <label>Parcel Length</label>
          <input type="number" placeholder="Parcel Length" />
        </div>
        <div className="panel-inp">
          <label>Parcel Height</label>
          <input type="number" placeholder="Parcel Height" />
        </div>
      </Tabs.Panel>

      <Tabs.Panel value="fifth" className="panel">
        <div className="panel-inp">
          <label>Parcel Description</label>
          <Textarea
            resize="vertical"
            placeholder="Parcel Description"
            className="p-desc"
          />
        </div>
      </Tabs.Panel>
    </Tabs>
  );
}

export default RequestMod;
