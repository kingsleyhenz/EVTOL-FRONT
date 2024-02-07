import React, { useState } from "react";
import { Tabs, rem, Textarea, Transition } from "@mantine/core";
import "../Stylesheet/User/user-add.css";

function RequestMod() {
  const iconStyle = { width: rem(12), height: rem(12) };

  const tabValues = ["first", "second", "third", "fourth", "fifth"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const [parcelDetails, setParcelDetails] = useState({
    country: "",
    state: "",
    city: "",
    address: "",
  });

  const [recipientDetails, setRecipientDetails] = useState({
    country: "",
    state: "",
    city: "",
    address: "",
    name: "",
    email: "",
    phone: "",
  });

  const [parcelDimensions, setParcelDimensions] = useState({
    name: "",
    width: "",
    length: "",
    height: "",
  });

  const [parcelDescription, setParcelDescription] = useState("");

  const isNextEnabled = () => {
    switch (currentIndex) {
      case 0:
        return Object.values(parcelDetails).every((value) => value.trim() !== "");
      case 1:
        return Object.values(recipientDetails).slice(0, 4).every((value) => value.trim() !== "");
      case 2:
        return Object.values(recipientDetails).slice(4).every((value) => value.trim() !== "");
      case 3:
        return Object.values(parcelDimensions).every((value) => value.trim() !== "");
      case 4:
        return parcelDescription.trim() !== "";
      default:
        return false;
    }
  };

  const handleNext = () => {
    if (isNextEnabled()) {
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
        <Tabs.Tab value="next" className="tab" onClick={handleNext} disabled={!isNextEnabled()}>
        {currentIndex < tabValues.length - 1 ? "Next" : "Complete"}
        </Tabs.Tab>
        <Tabs.Tab value="back" className="tab" onClick={handleBack}>
          Back
        </Tabs.Tab>
      </Tabs.List>

      <Transition
        mounted={currentIndex === 0}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="first" className="panel" style={styles}>
            <div className="panel-inp">
              <label>Parcel Country</label>
              <input
                type="text"
                placeholder="Parcel Country"
                value={parcelDetails.country}
                onChange={(e) => setParcelDetails({ ...parcelDetails, country: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Parcel State</label>
              <input
                type="text"
                placeholder="Parcel State"
                value={parcelDetails.state}
                onChange={(e) => setParcelDetails({ ...parcelDetails, state: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Parcel City</label>
              <input
                type="text"
                placeholder="Parcel City"
                value={parcelDetails.city}
                onChange={(e) => setParcelDetails({ ...parcelDetails, city: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Parcel Address</label>
              <input
                type="text"
                placeholder="Parcel Address"
                value={parcelDetails.address}
                onChange={(e) => setParcelDetails({ ...parcelDetails, address: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 1}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="second" className="panel" style={styles}>
            <div className="panel-inp">
              <label>Recipient Country</label>
              <input
                type="text"
                placeholder="Recipient Country"
                value={recipientDetails.country}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, country: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Recipient State</label>
              <input
                type="text"
                placeholder="Recipient State"
                value={recipientDetails.state}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, state: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Recipient City</label>
              <input
                type="text"
                placeholder="Recipient City"
                value={recipientDetails.city}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, city: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Recipient Address</label>
              <input
                type="text"
                placeholder="Recipient Address"
                value={recipientDetails.address}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, address: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 2}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="third" className="panel shorter" style={styles}>
            <div className="panel-inp">
              <label>Recipient Name</label>
              <input
                type="text"
                placeholder="Recipient Name"
                value={recipientDetails.name}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, name: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Recipient Email</label>
              <input
                type="text"
                placeholder="Recipient Email"
                value={recipientDetails.email}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, email: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Recipient Phone</label>
              <input
                type="text"
                placeholder="Recipient Phone"
                value={recipientDetails.phone}
                onChange={(e) => setRecipientDetails({ ...recipientDetails, phone: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 3}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="fourth" className="panel" style={styles}>
            <div className="panel-inp">
              <label>Parcel Name</label>
              <input
                type="text"
                placeholder="Parcel Name"
                value={parcelDimensions.name}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, name: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Parcel Width</label>
              <input
                type="number"
                placeholder="Parcel Width"
                value={parcelDimensions.width}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, width: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Parcel Length</label>
              <input
                type="number"
                placeholder="Parcel Length"
                value={parcelDimensions.length}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, length: e.target.value })}
              />
            </div>
            <div className="panel-inp">
              <label>Parcel Height</label>
              <input
                type="number"
                placeholder="Parcel Height"
                value={parcelDimensions.height}
                onChange={(e) => setParcelDimensions({ ...parcelDimensions, height: e.target.value })}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>

      <Transition
        mounted={currentIndex === 4}
        transition="fade"
        duration={500}
        timingFunction="ease"
      >
        {(styles) => (
          <Tabs.Panel value="fifth" className="panel" style={styles}>
            <div className="panel-inp">
              <label>Parcel Description</label>
              <Textarea
                resize="vertical"
                placeholder="Parcel Description"
                className="p-desc"
                value={parcelDescription}
                onChange={(e) => setParcelDescription(e.target.value)}
              />
            </div>
          </Tabs.Panel>
        )}
      </Transition>
    </Tabs>
  );
}

export default RequestMod;
