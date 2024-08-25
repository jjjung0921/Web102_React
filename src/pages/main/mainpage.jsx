import Chefs from "../../components/main/Chefs";
import Header from "../../components/main/Header";
import Icon_box from "../../components/main/Icon_box";
import Icon_title from "../../components/main/Icon_title";
import Picture from "../../components/main/Picture";
import "./mainpage.css"

const Mainpage = () => {
    return(
        <div className="main">
            <Header/>
            <Picture/>
            <Icon_title/>
            <Icon_box/>
            <Chefs/>
        </div>
    )
}

export default Mainpage;