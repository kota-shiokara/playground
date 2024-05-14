const style = {
    height: "200px",
    backgroundColor: "wheat",
    padding: "8px"
};

export const Child4 = () => {
    console.log("Child4 レンダリング");

    return (
        <div style={style}>
            <p>Child4</p>
        </div>
    );
}