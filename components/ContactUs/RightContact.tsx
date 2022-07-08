import React from "react";
import { Formik, Form } from "formik";
import Input from "./Input";
import TextArea from "./TextArea";
interface MyFormValues {
  name: string;
  phone: string;
  email: string;
  subject: string;
  message: string;
}
function RightContact() {
  const initialValues: MyFormValues = {
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  };

  return (
    <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
      <div className="p-4">
        <Formik
          initialValues={initialValues}
          onSubmit={(values, actions) => {
            actions.setSubmitting(false);
          }}
        >
          <Form>
            <div className="grid md:grid-cols-2 gap-4 w-full py-2">
              <Input
                label={"Name"}
                name={"name"}
                type={"text"}
                divclass={"flex flex-col"}
              />
              <Input
                label={"Phone number"}
                name={"phone"}
                type={"text"}
                divclass={"flex flex-col"}
              />
            </div>
            <div className="grid md:grid-cols-1 gap-4 w-full py-2">
              <Input
                label={"Email"}
                name={"email"}
                type={"email"}
                divclass={"flex flex-col py-2"}
              />
              <Input
                label={"Subject"}
                name={"subject"}
                type={"text"}
                divclass={"flex flex-col py-2"}
              />
              <TextArea
                label={"Message"}
                name={"message"}
                divclass={"flex flex-col py-2"}
              />
            </div>
            <button className="w-full p-4 text-gray-800 mt-4">
              Send Message
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
}

export default RightContact;
