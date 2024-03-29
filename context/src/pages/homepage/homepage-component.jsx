import React, {useContext} from "react";
import {AppContext} from "../../Context/app-context";
import {Button} from "react-bootstrap";

const Homepage = () => {
  const appContext = useContext(AppContext);

  return (
    <div className="homepageHead">
      {appContext.products.map(cartItem => (
        <div key={cartItem.id}>
          <p>{cartItem.id}</p>
          <Button onClick={() => appContext.addItemToCart(cartItem)}>
            Add to cart
          </Button>
        </div>
      ))}
    </div>
  );
};

export default Homepage;
