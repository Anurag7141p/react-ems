import React, { useEffect, useState } from "react";

const PreviewImage = ({ file, setImage }) => {
  const [preview, setPreview] = useState(null);

  const reader = new FileReader();
  reader.onload = () => {
    setPreview(reader.result);
  };

  if (file) {
    reader.readAsDataURL(file);
  }

  useEffect(() => {
    setImage(preview);
  }, [preview]);

  return (
    <div>
      {preview ? <img src={preview} alt="upload" className="w-20 h-20" /> : null}
    </div>
  );
};

export default PreviewImage;
