import "../ItemList/ItemList.css";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

function FoodItem(props) {
  // SweetAlert
  const MySwal = withReactContent(Swal);

  const handleUpdate = () => {
    // SweetAlert
    MySwal.fire({
      title: "Do you want to confirm buy?",
      showDenyButton: true,
      confirmButtonText: "Yes",
      denyButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        // handleUPDATE
        props.purchaseItem({
          id: props.item.id,
        });
        console.log(props.item.id);

        MySwal.fire("Success");
      } else if (result.isDenied) {
        MySwal.fire("Cancelled");
      }
    });
    console.log("Purchase Button clicked");
  };

  const handleDelete = () => {
   // SweetAlert
  MySwal.fire({
    title: "Do you want to confirm remove?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: "No",
  }).then((result) => {
    if (result.isConfirmed) {   
      // handleDELETE
      props.deleteItem({
        id: props.item.id,
      });
      console.log(props.item.id);
      MySwal.fire("Success");
    } else if (result.isDenied) {
      MySwal.fire("Cancelled");
    }
  });
    console.log("Delete Button clicked");
  };

  let cardStatus;
  if (!props.item.purchased) {
    cardStatus = (
      <>
        <Button className="btn btn-success" onClick={handleUpdate}>
          Buy
        </Button>
        <Button className="btn btn-danger" onClick={handleDelete}>
          Remove
        </Button>
      </>
    );
  } else {
    cardStatus = (
      <span>
        Purchased
        <p>
          <Button className="btn btn-danger" onClick={handleDelete}>
            Remove
          </Button>
        </p>
      </span>
    );
  }

  return (
    <li>
      <h5 className="card-title">{props.item.name}</h5>
      <div className="card-body">
        <p className="item-quantity">
          {props.item.quantity}{" "}
          <span className="item-unit">{props.item.unit}</span>
        </p>
        {cardStatus}
      </div>
    </li>
  );
}

export default FoodItem;
