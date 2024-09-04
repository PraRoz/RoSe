import React from "react";
import Input from "antd/lib/input";
import Button from "antd/lib/button";
import Dropdown from "antd/lib/dropdown";
import { HexColorPicker } from "react-colorful";

export default function InputColor({ name, register}:any ) {
    console.log("")
 

  const [internalColor, setInternalColor] = React.useState("");

  console.log(internalColor);

  const overlay = (
    <div>
      <HexColorPicker  onChange={setInternalColor} />
    </div>
  );

  return (
    <>
      <Input
        className="shadow appearance-none border rounded w-full py-4 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        value={internalColor || ""}
        onChange={(e) => setInternalColor(e.target.value)}
        suffix={
          <Dropdown trigger={["click"]} overlay={overlay}>
            <Button style={{ background: internalColor }}> </Button>
          </Dropdown>
        }
        {...register(name)}
      />
    </>
  );
}
