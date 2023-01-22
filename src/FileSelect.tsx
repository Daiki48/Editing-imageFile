import { GetInfo } from "./FileInfo";
import { styles } from "./style/styles";

export const FileSelect = () => {
  const { handleFiles, imgRef } = GetInfo();
  return (
    <div>
      <input type="file" accept="image/*" onChange={handleFiles}></input>
      <div ref={imgRef} style={{ ...styles.imgContainer }}></div>
    </div>
  );
};
