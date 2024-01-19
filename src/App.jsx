import qrCode from "./assets/image-qr-code.png";
import "./App.css";

function App() {

  return (
    <>
      <div className="qr-content">
        <img src={qrCode} className="qr-image"></img>
        <h3>Improve your front-end skills by designing projects</h3>
        <p>Scan the QR code to visit Frontend mentor and take your coding skills to the next level</p>
      </div>
    </>
  );
}

export default App;
