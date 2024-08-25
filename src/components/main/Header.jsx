import Item from "./Item";
import logo from "../../assets/logo.png";
import "./style/Header.css"

const Header = () => {
    return(
        <div id="header">
            <div id="list_item">
                <Item title={"How it works"}/>
                <Item title={"Gifts"}/>
                <Item title={"About"} link={"/about"}/>
                <img src={logo} alt="logo"/>
                <Item title={"Login"}/>
                <Item title={"Members"}/>
                <Item title={"Contracts"}/>
            </div>
        </div>
    )
}

export default Header;