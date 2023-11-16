import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const Dropzonea = () => {
  const [selectedImages, setSelectedImages] = useState([]);
  const onDrop = useCallback((acceptedFiles) => {
    setSelectedImages(
      acceptedFiles.map((file) =>
        Object.assign(file, { preview: URL.createObjectURL(file) })
      )
    );
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  const selected_images = selectedImages?.map((file) => (
    <div>
      <img src={file.preview} className="w-[200px]" alt="Not Found" />
    </div>
  ));

  return (
    <div>
      <div {...getRootProps()}>
        <input {...getInputProps} />
        <p>Drop the files here...</p>
      </div>
      {selected_images}
    </div>
  );
};

export default Dropzonea;
