import React from "react";

import { Divider } from "@nextui-org/react";

const TitleSections = ({ title }: any) => {
  return (
    <>
      <h2 className="text-zinc-200 text-center mt-20 top-10 text-4xl lg:text-7xl font-extrabold">
        {title}
      </h2>
      <div className="flex justify-center items-center mt-5 mb-5 ">
        <Divider className="my-4 w-96" />
      </div>
    </>
  );
};

export default TitleSections;
