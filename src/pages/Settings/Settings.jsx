import React from "react";
import Input from "../../components/Input/Input";
import Label from "../../components/Label/Label";
import Select from "../../components/Select/Select";
import Switch from "../../components/Switch/Switch";
import "./Settings.css";

export default function Settings() {
  const languages = [
    {
      label: "PT",
      value: "PT",
    },
    {
      label: "EN",
      value: "EN",
    },
  ];
  const selectedLanguage = languages[0]; //TODO: change this;

  return (
    <div className="settings-page h-100">
      <div className="settings-container">
        <div className="anonymous setting">
          <Label htmlFor="anonymous" text="Anonymous" />
          <Switch />
        </div>
        <div className="display-name setting">
          <Label htmlFor="setting" text="Display name" />
          <Input type="text" placeholder="Display name" />
        </div>
        <div className="app-language setting">
          <Label htmlFor="language" text="Language" />
          <Select
            options={languages}
            placeholder="Select language"
            selectedOption={selectedLanguage}
          />
        </div>
      </div>
    </div>
  );
}
