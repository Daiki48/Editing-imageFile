import "./style/App.css";
import { FileSelect } from "./components/FileSelect";

function App() {
  return (
    <div>
      <h1>画像ファイルプレビュー</h1>
      <FileSelect />
    </div>
  );
}

export default App;
