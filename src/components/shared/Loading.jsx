import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return <div className="card flex center p-4 radius-md">{<AiOutlineLoading3Quarters size={40} />}</div>;
};

export default Loading;
