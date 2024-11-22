import "./App.css";
import FilterableProductTable from "./components/FilterableProductTable";

function App() {
  // const [count, setCount] = useState(0);
  // const products = [
  //   { title: "Cabbage", isFruit: false, id: 1 },
  //   { title: "Garlic", isFruit: false, id: 2 },
  //   { title: "Apple", isFruit: true, id: 3 },
  // ];

  // const handleClick = () => {
  //   console.log("button clicked");
  //   setCount(count + 1);
  // };

  return (
    <>
      <div className="card">
        {/* <ul>
          {products?.map((product) => (
            <li
              key={product.id}
              style={{ color: product.isFruit ? "red" : "blue" }}
            >
              {product.title}
            </li>
          ))}
        </ul>
        <CountButton count={count} onClick={handleClick} />
        <CountButton count={count} onClick={handleClick} /> */}
        <FilterableProductTable />
      </div>
    </>
  );
}

export default App;
