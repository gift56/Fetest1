import { useState } from "react";
import Card from "../card/Card";

const ApplicationForm = () => {
  return (
    <form className="w-full flex flex-col p-5 md:p-10 gap-6">
      <Card headline="Upload cover image">
        <div className="w-full border-dashed"></div>
      </Card>
    </form>
  );
};

export default ApplicationForm;
