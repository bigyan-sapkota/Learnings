import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

function Dropzonea({ className }) {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles);
    if (acceptedFiles?.length) {
      setFiles((previouseFiles) => [
        ...previouseFiles,
        ...acceptedFiles.map((file) =>
          Object.assign(file, { preview: URL.createObjectURL(file) })
        ),
      ]);
    }
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <form>
      <div {...getRootProps({ className: className })}>
        <input {...getInputProps()} />
        {isDragActive ? (
          <p>Drop the files here ...</p>
        ) : (
          <p>Drag 'n' drop some files here, or click to select files</p>
        )}
      </div>
      {/* Preview */}
      <ul>
        {files.map((file) => (
          <li key={file.name}>
            <img src={file.preview} alt="" width={100} height={100} />
          </li>
        ))}
      </ul>
    </form>
  );
}

export default Dropzonea;
// import React, { useCallback, useState } from "react";
// import { useDropzone } from "react-dropzone";

// const Dropzonea = () => {
//   const [selectedImages, setSelectedImages] = useState([]);
//   const onDrop = useCallback((acceptedFiles) => {
//     setSelectedImages(
//       acceptedFiles.map((file) =>
//         Object.assign(file, { preview: URL.createObjectURL(file) })
//       )
//     );
//   }, []);

//   const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
//   const selected_images = selectedImages?.map((file) => (
//     <div>
//       <img src={file.preview} className="w-[200px]" alt="Not Found" />
//     </div>
//   ));

//   return (
//     <div>
//       <div {...getRootProps()}>
//         <input {...getInputProps} />
//         <p>Drop the files here...</p>
//       </div>
//       {selected_images}
//     </div>
//   );
// };

// export default Dropzonea;
