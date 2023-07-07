import Button from "react-bootstrap/Button";

function ShoppingButton({resetItems}) {
  const handleReset = () => {
    console.log("Reset button clicked");
    resetItems()
    console.log('Items reset')
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
