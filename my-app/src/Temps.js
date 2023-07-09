import "./index.css";

export default function Temp() {
  return (
    <div>
      <img id="icon" src="" alt="haze img" />
      <div className="temp">
        <h1>20</h1>
        <span className="deg">°C</span>
      </div>
      <h3 className="feel">Haze</h3>
    </div>
  );
}