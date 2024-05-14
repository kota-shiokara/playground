import { useState } from "react";
import { Child1 } from "./components/Child1";
import { Child4 } from "./components/Child4";

export const App = () => {
    const [num, setNum] = useState(0);
    console.log("App レンダリング");

    const onClickButton = () => {
        setNum(num + 1);
    };

    return (
        <>
            <button onClick={onClickButton}>ボタン</button>
            <p>{num}</p>
            <Child1 />
            <Child4 />
        </>
    );
};