import React, { useState } from "react";
import { Tabs, rem, Textarea } from "@mantine/core";
import "../Stylesheet/User/user-add.css";

function RequestMod() {
  const iconStyle = { width: rem(12), height: rem(12) };

  // Array of tab values
  const tabValues = ["first", "second", "third", "fourth", "fifth"];

  // State to track the current tab index
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to handle Next button click
  const handleNext = () => {
    if (currentIndex < tabValues.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  // Function to handle Back button click
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
      value={tabValues[currentIndex]} // Set the current tab value based on the index
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
        <input type="text" placeholder="Parcel Country" />
        <input type="text" placeholder="Parcel State" />
        <input type="text" placeholder="Parcel City" />
        <input type="text" placeholder="Parcel Address" />
      </Tabs.Panel>

      <Tabs.Panel value="second" className="panel">
        <input type="text" placeholder="Recipient Country" />
        <input type="text" placeholder="Recipient State" />
        <input type="text" placeholder="Recipient City" />
        <input type="text" placeholder="Recipient Address" />
      </Tabs.Panel>

      <Tabs.Panel value="third" className="panel shorter">
        <input type="text" placeholder="Recipient Name" />
        <input type="text" placeholder="Recipient Email" />
        <input type="text" placeholder="Recipient Phone" />
      </Tabs.Panel>

      <Tabs.Panel value="fourth" className="panel">
        <input type="text" placeholder="Parcel Name" />
        <input type="number" placeholder="Parcel Width" />
        <input type="number" placeholder="Parcel Length" />
        <input type="number" placeholder="Parcel Height" />
      </Tabs.Panel>

      <Tabs.Panel value="fifth" className="panel">
        <Textarea resize="vertical" placeholder="Parcel Description" className="p-desc" />
      </Tabs.Panel>
    </Tabs>
  );
}

export default RequestMod;
