import React from "react";
import Image from "next/image";

const Heroavatar = () => {
  return (
    <div className="md:mt-2 md:w-3/5">
      <Image src="/headshot.svg" alt="PFP" width={325} height={325} />
    </div>
  );
};

export default Heroavatar;
