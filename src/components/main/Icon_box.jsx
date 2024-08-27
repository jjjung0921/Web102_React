import Box_item from "./Box_Item";
import { IconBox } from "./style/Icon_box";

const Icon_box = () => {
    const numbers = [1, 2, 3, 4];
    return (
        <IconBox>
            {numbers.map((number) => (
                <Box_item key={number} image={`src/assets/icon${number}.png`} />
            ))}
        </IconBox>
    );
}

export default Icon_box;
