import qrCode from "../src/assets/qrCode.jpg";

export default function Home2() {
  return (
    <div className="container">
      <p className="scan-text">Por favor, escaneie o QR code abaixo:</p>
      <img src={qrCode} alt="QR Code" className="qr-code" />
    </div>
  );
}
