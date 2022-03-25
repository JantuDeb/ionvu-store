import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
const Loading = () => {
  return <div className="flex center p-4 radius-md h-80">{<AiOutlineLoading3Quarters size={40} color="red"  className="icon-loading"/>}</div>;
};

export default Loading;
