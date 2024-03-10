// import { useState } from "react";
"use client";
import React, { useState } from "react";
import { Cascader } from "antd";
import { Switch } from "antd";

const GoogleMap = () => {
  const [selectedOption, setSelectedOption] = useState("");
  //   radio button onchange function is start here
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
    console.log("radiobutton", event.target.value);
  };
  //   radio button onchange function is end here

  //   cascader option array and onchanfe function is start from here function
  const options = [
    {
      value: "zhejiang",
      label: "Zhejiang",
      children: [
        {
          value: "hangzhou",
          label: "Hangzhou",
          children: [
            {
              value: "xihu",
              label: "West Lake",
            },
          ],
        },
      ],
    },
    {
      value: "jiangsu",
      label: "Jiangsu",
      children: [
        {
          value: "nanjing",
          label: "Nanjing",
          children: [
            {
              value: "zhonghuamen",
              label: "Zhong Hua Men",
            },
          ],
        },
      ],
    },
  ];
  const onChange = (value) => {
    console.log("i am cascader", value);
  };
  // casecader function is end here
  //   switch on change function is start from here
  const onChangeSwitch = (checked) => {
    console.log("switch to", checked);
  };
  //   switch on change function is end here
  return (
    <div>
      <h1>Google Map</h1>

      <div>
        <label>
          <input
            type="radio"
            value="parent"
            checked={selectedOption === "parent"}
            onChange={handleOptionChange}
          />
          Option 1
        </label>

        <label>
          <input
            type="radio"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleOptionChange}
          />
          Option 2
        </label>

        <label>
          <input
            type="radio"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleOptionChange}
          />
          Option 3
        </label>

        <p>Selected option: {selectedOption}</p>
      </div>

      <h1>Cascader</h1>
      <Cascader
        options={options}
        onChange={onChange}
        placeholder="Please select"
      />

      {/* switch component is start from here */}
      <h1>Switch Button</h1>
      <Switch defaultChecked onChange={onChangeSwitch} />
    </div>
  );
};

export default GoogleMap;
