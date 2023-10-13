import React from "react";
import UploadContainer from "./UploadContainer";
import { ProductProvider } from "../../context/productContext";
const Upload = () => {
  return (
    <div>
      <div className="mx-auto max-w-lg">

          <UploadContainer />

      </div>
    </div>
  );
};

export default Upload;
