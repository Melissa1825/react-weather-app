import "./index.css";

export default function Search() {
  return (
    <div className="row">
      <div className="col-4">
        <form id="citySearch">
          <input id="cityInput" type="search" placeholder="Enter a city" />
          <input type="submit" value="search" className="button" />
        </form>
      </div>
    </div>
  );
}