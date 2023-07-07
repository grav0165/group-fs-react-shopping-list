import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function ShoppingButton({resetItems, clearItems}) {
  const MySwal = withReactContent(Swal);

  const handleReset = () => {
    MySwal.fire({
      title: "Do you want to reset all purchases?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // handleUPDATE
        resetItems();
        MySwal.fire("Success");
      } else if (result.isDenied) {
        MySwal.fire("Cancelled");
      }
    });
    console.log("Reset button clicked");
  };

  const handleClear = () => {
    MySwal.fire({
      title: "Do you want to clear all items?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // handleUPDATE
        clearItems();
        MySwal.fire("Success");
      } else if (result.isDenied) {
        MySwal.fire("Cancelled");
      }
    });
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
