import ColoredMessage from "./components/ColoredMessage";
import { useState, useEffect } from "react";
import CssModules from "./components/CssModules";

export const App = () => {
    const [num, setNum] = useState(0);

    useEffect(() => {
        if (num % 3 === 0) {
            alert("3の倍数です！");
        }
    }, [num]);

    const onButtonClick = () => {
        setNum(num + 1);
    };

    const onResetButtonClick = () => {
        setNum(0);
    }

    return (
        <>
            <h1 style={{ color: "red" }}>こんにちは！</h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onButtonClick}>ボタン</button>
            <p>{num}</p>

            <CssModules />

            <button onClick={onResetButtonClick}>Reset</button>
        </>
    );
};