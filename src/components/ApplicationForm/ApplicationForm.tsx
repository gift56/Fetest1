import { useState } from "react";
import Card from "../card/Card";

const ApplicationForm = () => {
  return (
    <form className="w-full flex flex-col p-5 md:p-10 gap-6">
      <Card headline="Upload cover image">
        <div></div>
      </Card>
    </form>
  );
};

export default ApplicationForm;
