import { GetInfo } from "./FileInfo";

export const FileSelect = () => {
  const { handleFiles, imgRef } = GetInfo();
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFiles}></input>
      <div ref={imgRef}></div>
    </div>
  );
};
