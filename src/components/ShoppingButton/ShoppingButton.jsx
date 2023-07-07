import Button from "react-bootstrap/Button";

function ShoppingButton() {
  const handleReset = () => {
    console.log("Reset button clicked");
  };

  const handleClear = () => {
    console.log("Clear button clicked");
  };

  return (
    <>
      <Button className="btn btn-warning" onClick={handleReset}>
        Reset
      </Button>
      <Button className="btn btn-danger" onClick={handleClear}>
        Clear
      </Button>
    </>
  );
}

export default ShoppingButton;
