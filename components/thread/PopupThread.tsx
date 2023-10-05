"use client";

import Popup from "reactjs-popup";
import { Button } from "../ui/button";

const PopupThread = () => {
  return (
    <Popup
      trigger={
        <Button className="text-light-1 bg-transparent h-min">...</Button>
      }
      position="bottom right"
      arrowStyle={{ display: "none" }}
    >
      <div className="flex flex-col bg-white rounded-2xl p-4">
        <Button className="text-gray-1 bg-transparent h-min border-b border-b-dark-2 rounded-none">
          Hide
        </Button>
        <Button className="text-gray-1 bg-transparent h-min border-b border-b-dark-2 rounded-none">
          Edit
        </Button>
        <Button className="text-red-500 bg-transparent h-min rounded-none">Block</Button>
      </div>
    </Popup>
  );
};

export default PopupThread;
