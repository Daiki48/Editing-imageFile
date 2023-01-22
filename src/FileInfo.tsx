import { ChangeEventHandler, useRef, useState } from "react";
import { imgDisplaySize } from "./style/styles";

const fileImage = new Image();

export const GetInfo = () => {
  const [objectURL, setObjectURL] = useState("");
  const resetImgSelect = () => {
    fileImage.src = "";
    const imageContainer = imgRef.current;
    if (imageContainer && fileImage.parentNode === imageContainer) {
      imageContainer.removeChild(fileImage);
    }
    if (objectURL) {
      window.URL.revokeObjectURL(objectURL);
      setObjectURL("");
    }
  };

  const imgRef = useRef<HTMLDivElement>(null);
  const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    resetImgSelect();
    if (!files || files?.length === 0) return;
    const file = files[0];
    console.log("File : ", file);

    const img = imgRef.current;
    if (!img) return;
    const objectURL = window.URL.createObjectURL(file);
    // fileImage.src = window.URL.createObjectURL(file);
    operateImgSize(objectURL);
    img.appendChild(fileImage);
  };

  const operateImgSize = (url: string) => {
    fileImage.src = url;
    // fileImage.width = imgDisplaySize.width;
    // fileImage.height = imgDisplaySize.height;
    fileImage.onload = () => {
      const width = fileImage.naturalWidth;
      const height = fileImage.naturalHeight;
      console.log("load size : ", width, height);
      const ratioWidth = width / imgDisplaySize.width;
      const ratioHeight = height / imgDisplaySize.height;
      if (ratioWidth > ratioHeight) {
        fileImage.width = imgDisplaySize.width;
        fileImage.height = height / ratioWidth;
      } else {
        fileImage.width = width / ratioHeight;
        fileImage.height = imgDisplaySize.height;
      }
    };
  };

  return { handleFiles, imgRef };
};
