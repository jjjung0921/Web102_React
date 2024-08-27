import photo from "../../assets/main.png"
import { PictureBox } from "./style/Picture";

const Picture = () => {
    return(
        <PictureBox>
            <img src={photo} alt="main"/>
        </PictureBox>
    )
}

export default Picture;