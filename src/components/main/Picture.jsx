import photo from "../../assets/main.png"
import "./style/Picture.css"

const Picture = () => {
    return(
        <div id="picture">
            <img src={photo} alt="main"/>
        </div>
    )
}

export default Picture;