// import React, { useEffect, useState } from "react";
// import { useLocation, useNavigate } from "react-router-dom";
// import { FaDownload, FaRedo, FaUndo } from "react-icons/fa";

// const RemoveBackground = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const images = location.state?.images || [];

//   const [processedImages, setProcessedImages] = useState([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [history, setHistory] = useState([]);
//   const [redoStack, setRedoStack] = useState([]);

//   useEffect(() => {
//     if (images.length > 0) {
//       setTimeout(() => {
//         const newProcessed = images.map((img) => img.preview);
//         setProcessedImages(newProcessed);
//         setHistory([newProcessed]);
//         setIsLoading(false);
//       }, 3000);
//     }
//   }, [images]);

//   const handleUndo = () => {
//     if (history.length > 1) {
//       const newRedoStack = [history[history.length - 1], ...redoStack];
//       setRedoStack(newRedoStack);
//       setHistory(history.slice(0, -1));
//       setProcessedImages(history[history.length - 2]);
//     }
//   };

//   const handleRedo = () => {
//     if (redoStack.length > 0) {
//       const newHistory = [...history, redoStack[0]];
//       setHistory(newHistory);
//       setProcessedImages(redoStack[0]);
//       setRedoStack(redoStack.slice(1));
//     }
//   };

//   const handleDownload = (imageSrc, index) => {
//     const link = document.createElement("a");
//     link.href = imageSrc;
//     link.download = `background_removed_${index + 1}.png`;
//     link.click();
//   };

//   return (
//     <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center p-6">
//       <h1 className="text-4xl font-extrabold mb-4 text-gray-400">
//         Background Removed
//       </h1>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {images.map((img, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <p className="text-gray-400 mb-2">Original</p>
//             <img
//               src={img.preview}
//               alt={`Original ${index}`}
//               className="w-64 h-64 object-cover rounded-lg"
//             />
//           </div>
//         ))}
//         {processedImages.map((img, index) => (
//           <div key={index} className="flex flex-col items-center">
//             <p className="text-gray-400 mb-2">Transparent</p>
//             {isLoading ? (
//               <div className="w-64 h-64 bg-gray-700 animate-pulse rounded-lg"></div>
//             ) : (
//               <img
//                 src={img}
//                 alt={`Processed ${index}`}
//                 className="w-64 h-64 object-cover rounded-lg"
//               />
//             )}
//             {!isLoading && (
//               <button
//                 onClick={() => handleDownload(img, index)}
//                 className="mt-2 bg-green-600 px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-green-500"
//               >
//                 <FaDownload /> Download
//               </button>
//             )}
//           </div>
//         ))}
//       </div>

//       {!isLoading && (
//         <div className="mt-6 flex gap-4">
//           <button
//             onClick={handleUndo}
//             className={`bg-yellow-500 px-4 py-2 rounded-lg flex items-center gap-2 ${
//               history.length <= 1 ? "opacity-50 cursor-not-allowed" : "hover:bg-yellow-400"
//             }`}
//             disabled={history.length <= 1}
//           >
//             <FaUndo /> Undo
//           </button>

//           <button
//             onClick={handleRedo}
//             className={`bg-blue-500 px-4 py-2 rounded-lg flex items-center gap-2 ${
//               redoStack.length === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-400"
//             }`}
//             disabled={redoStack.length === 0}
//           >
//             <FaRedo /> Redo
//           </button>

//           <button
//             onClick={() => navigate("/")}
//             className="bg-red-600 px-6 py-3 rounded-lg hover:bg-red-500"
//           >
//             Select New Image
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default RemoveBackground;
