import React from "react";
import Input from "./Input";
function RightContact() {
  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <form>
          <div className="grid md:grid-cols-2 gap-4 w-full py-2">
            <Input label={"Name"} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default RightContact;
