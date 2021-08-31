import Button from "@material-ui/core/Button";

// Types

import {CartItemTypes} from "../App";
import {Wrapper} from "./Card.styles.ts"

// Styles

type Props = {
    item: CartItemTypes;
    handleAddToCart: (clickedItem: CartItemType) => void;
}

const Card: React.FC<Props> = ({item, handleAddToCart}) => (
    <Wrapper>
        <div className="image-container">
        <img src={item.image} alt={item.title} />
        </div>
      
        <div className="body-container">
    <h3>{item.title}</h3>
    <p>{item.description}</p>
    <h3>${item.price}</h3>
        </div>

        <Button onClick={() => handleAddToCart(item)}>Add To Cart</Button>
    </Wrapper>
)

export default Card