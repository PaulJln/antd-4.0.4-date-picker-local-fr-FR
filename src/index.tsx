import React from "react";
import ReactDOM from "react-dom";
import { DatePicker } from "antd";
import FR_datePickerLocale from "antd/lib/date-picker/locale/fr_FR";
import US_datePickerLocale from "antd/lib/date-picker/locale/en_US";

import "antd/dist/antd.css";
import "./index.css";

ReactDOM.render(
  <div className="App">
    <div>
      <DatePicker locale={FR_datePickerLocale} />
    </div>
    <div>
      <DatePicker locale={US_datePickerLocale} />
    </div>
  </div>,
  document.getElementById("root")
);
