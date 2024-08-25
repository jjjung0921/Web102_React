import Box_item from "./Box_Item";
import "./style/Icon_box.css";

const Icon_box = () => {
    const numbers = [1, 2, 3, 4];
    return (
        <div id="Icon_box">
            {numbers.map((number) => (
                <Box_item key={number} image={`src/assets/icon${number}.png`} />
            ))}
        </div>
    );
}

export default Icon_box;
