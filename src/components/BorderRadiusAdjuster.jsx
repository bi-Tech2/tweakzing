import React, { useState } from "react";

const BorderRadiusAdjuster = () => {
  const [radius, setRadius] = useState(0); // Border radius value
  const [image, setImage] = useState(null); // Stores uploaded image
  const [modifiedImage, setModifiedImage] = useState(null); // Stores the modified image

  // Handle file upload
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const objectURL = URL.createObjectURL(file);
      setImage({ file, preview: objectURL });
      setModifiedImage(null); // Reset modified image on new upload
    }
  };

  // Apply border radius and create modified image
  const applyBorderRadius = () => {
    if (!image) return;

    const img = new Image();
    img.src = image.preview;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = img.width;
      canvas.height = img.height;

      // Create a rounded rect clipping path
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.moveTo(radius, 0);
      ctx.arcTo(canvas.width, 0, canvas.width, radius, radius);
      ctx.arcTo(canvas.width, canvas.height, canvas.width - radius, canvas.height, radius);
      ctx.arcTo(0, canvas.height, 0, canvas.height - radius, radius);
      ctx.arcTo(0, 0, radius, 0, radius);
      ctx.closePath();
      ctx.clip();

      // Draw the image inside the clipped path
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);

      // Convert to data URL and update state
      const modifiedImageURL = canvas.toDataURL("image/jpeg");
      setModifiedImage(modifiedImageURL);
    };
  };

  // Generate modified file name
  const getModifiedFileName = () => {
    if (!image) return "modified-tweakz.jpg";
    const nameWithoutExt = image.file.name.replace(/\.[^/.]+$/, ""); // Remove extension
    return `${nameWithoutExt}-tweakz.jpg`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20 justify-center bg-black text-white p-6 w-full pb-20 relative">
        <div className="absolute bg-gray-900 md:bg-pink-700 w-72 h-72 rounded-full blur-3xl"></div>
        <div className="absolute bg-[#161616] top-0 left-0 w-36 h-36 rounded-full blur-3xl"></div>
      <h1 className="text-3xl font-bold mb-4 text-gray-300">Adjust Border Radius</h1>

      {/* Upload Button */}
      <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" id="upload-input" />
      <label htmlFor="upload-input" className="cursor-pointer px-6 py-3 btn-glow rounded-lg mb-4">
        Upload Image
      </label>

      {/* Image Containers */}
      <div className="grid grid-cols-1 items-center md:grid-cols-2 gap-6 mt-4 w-full justify-space-between">
        {/* Original Image */}
        <div className="w-full h-96 flex items-center justify-center relative rounded-lg">
          {image ? (
            <img src={image.preview} alt="Original" className="w-full h-full object-cover" />
          ) : (
            <div className="w-full h-full bg-[#0e0e0e] rounded-lg grid place-content-center text-gray-400"><p>The selectedimage will reflect here!</p></div>
          )}
        </div>

        {/* Modified Image */}
        <div className="w-full h-96 flex items-center justify-center relative bg-[#000000] rounded-lg">
          {modifiedImage ? (
            <img src={modifiedImage} alt="Modified" className="w-full h-full object-cover" style={{ borderRadius: `${radius}px` }} />
          ) : (
            <div className="w-full h-full bg-[#0e0e0e] rounded-lg text-center grid place-items-center text-gray-400"><p>The selectedimage will reflect here!</p></div>
          )}
        </div>
      </div>

      {/* Range Slider */}
      {image && (
        <>
          <input
            type="range"
            min="0"
            max="100"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            className="mt-4 w-64 cursor-pointer"
          />

          <button
            onClick={applyBorderRadius}
            className="mt-4 px-6 py-3 btn-glow rounded-lg"
          >
            Apply Border Radius
          </button>
        </>
      )}

      {/* Download Button */}
      {modifiedImage && (
        <a
          href={modifiedImage}
          download={getModifiedFileName()}
          className="mt-4 px-6 py-3 btn-glow rounded-lg"
        >
          Download Image
        </a>
      )}
    </div>
  );
};

export default BorderRadiusAdjuster;
