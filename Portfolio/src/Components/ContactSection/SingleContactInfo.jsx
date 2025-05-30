import React from "react";

const SingleContactInfo = ({ icon, text }) => {
  return (
    <div className="flex justify-start gap-4 items-center">
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default SingleContactInfo;
