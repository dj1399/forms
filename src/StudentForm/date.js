import React, {useState} from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Date()
{
    // const [value, onChange] = useState(new Date());


      return(
          <>
         <DatePicker
        // onChange={onChange}
        // value={value}
      />
          </>
      );
}