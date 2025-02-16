// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useDropzone } from "react-dropzone";

// const BackgroundRemover = () => {
//   const navigate = useNavigate();
//   const [selectedImages, setSelectedImages] = useState([]);

//   // Handle file selection from input
//   const handleFileChange = (event) => {
//     const files = Array.from(event.target.files);
//     processFiles(files);
//   };

//   // Handle drag-and-drop selection
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     accept: "image/*",
//     maxSize: 5 * 1024 * 1024, // Max 5MB per image
//     onDrop: (acceptedFiles, rejectedFiles) => {
//       if (rejectedFiles.length) {
//         alert("Some files are too large (max: 5MB).");
//       }
//       processFiles(acceptedFiles);
//     },
//   });

//   // Process and set selected images
//   const processFiles = (files) => {
//     const imageObjects = files.map((file) => ({
//       file,
//       preview: URL.createObjectURL(file),
//     }));
//     setSelectedImages(imageObjects);
//   };

//   // Clean up memory when component unmounts
//   useEffect(() => {
//     return () => {
//       selectedImages.forEach((image) => URL.revokeObjectURL(image.preview));
//     };
//   }, [selectedImages]);

//   // Navigate to the background removal page
//   const handleProceed = () => {
//     if (selectedImages.length > 0) {
//       navigate("/remove-background", { state: { images: selectedImages } });
//     }
//   };

//   return (
//     <div className="min-h-screen flex flex-col items-center text-white bg-[#000000] p-6">
//       <h1 className="text-4xl font-extrabold mb-4 text-gray-400">
//         Remove Background
//       </h1>
//       <p className="text-gray-400 mb-6">Upload an image to remove the background.</p>

//       {/* File Upload Button */}
//       <input type="file" accept="image/*" multiple className="hidden" id="fileInput" onChange={handleFileChange} />
//       <label htmlFor="fileInput" className="cursor-pointer px-8 py-5 rounded-lg bg-blue-600 hover:bg-blue-700 transition">
//         Select Image
//       </label>

//       {/* Drag & Drop Area */}
//       <div
//         {...getRootProps()}
//         className={`mt-6 w-full md:max-w-[80%] max-w-[97%] h-60 md:h-72 border-2 border-dashed flex flex-col items-center justify-center ${
//           isDragActive ? "border-gray-700" : "border-gray-400"
//         } bg-[#151515] rounded-lg p-6 cursor-pointer`}
//       >
//         <input {...getInputProps()} />
//         <p className="text-gray-400">{isDragActive ? "Drop the files here..." : "Drag & Drop images here"}</p>
//       </div>

//       {/* Image Previews */}
//       {selectedImages.length > 0 && (
//         <div className="mt-6 flex flex-wrap gap-4 overflow-x-auto">
//           {selectedImages.map((image, index) => (
//             <div key={index} className="relative">
//               <img src={image.preview} alt="Preview" className="w-32 h-32 object-cover rounded-lg" />
//             </div>
//           ))}
//         </div>
//       )}

//       {/* Proceed Button */}
//       {selectedImages.length > 0 && (
//         <button onClick={handleProceed} className="mt-6 px-6 py-3 rounded-lg bg-green-500 hover:bg-green-600 transition">
//           Proceed
//         </button>
//       )}
//     </div>
//   );
// };

// export default BackgroundRemover;
