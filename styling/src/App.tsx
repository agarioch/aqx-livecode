import "./App.css";
import PriceCards from "./components/PriceCards";

function App() {
  return (
    <>
      <div id="instructions">
        <h1>Fluid Grid</h1>
        <h2>Requirements</h2>
        <ul>
          <li>
            The cards below should be organised in a "fluid" grid - where the
            number of columns and the size of the cards varies depending on
            screen width.
          </li>
          <li>There should be a gap (~16-32px) between the images</li>
          <li>There should be ~3 or 4 columns on larger screens</li>
          <li>
            The number of columns should decrease as the available screen width
            decreases, down to a single column on mobile.
          </li>
          <li>Cards should never be smaller than 350px</li>
          <li>
            Ideally cards should grow to take up the available screen width i.e.
            there shouldn't be empty spaces between the gray borders.
          </li>
          <li>
            Ideally all the cards should be the same size (including the last
            row)
          </li>
        </ul>
      </div>
      <div id="example-instructions">
        <h2>Examples</h2>
        <p>
          The final layout should look something like the screenshots below:
        </p>
      </div>
      <div id="examples">
        <img src="example1.png" alt="Large screen" />
        <img src="example2.png" alt="Tablet screen" />
        <img src="example3.png" alt="Mobile screen" />
      </div>
      <h2>Prices</h2>
      <PriceCards />
    </>
  );
}

export default App;
