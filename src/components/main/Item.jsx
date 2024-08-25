import { Link } from "react-router-dom";

const Item = ({title, link}) => {
    return(
        <Link to={link}>{title}</Link>
    )
}
export default Item;