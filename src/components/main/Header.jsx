import Item from "./Item";
import logo from "../../assets/logo.png";
import { HeaderBox, ListItem } from "./style/Header";

const Header = () => {
    return(
        <HeaderBox>
            <ListItem id="list_item">
                <Item title={"How it works"}/>
                <Item title={"Gifts"}/>
                <Item title={"About"} link={"/about"}/>
                <img src={logo} alt="logo"/>
                <Item title={"Login"}/>
                <Item title={"Members"}/>
                <Item title={"Contracts"}/>
            </ListItem>
        </HeaderBox>
    )
}

export default Header;