import { ChangeEventHandler, useRef } from "react";

const fileImage = new Image();

export const GetInfo = () => {
  const imgRef = useRef<HTMLDivElement>(null);
  const handleFiles: ChangeEventHandler<HTMLInputElement> = (event) => {
    const files = event.currentTarget.files;
    if (!files || files?.length === 0) return;
    const file = files[0];
    console.log("File : ", file);

    const img = imgRef.current;
    if (!img) return;
    fileImage.src = window.URL.createObjectURL(file);
    img.appendChild(fileImage);
  };
  return { handleFiles, imgRef };
};
