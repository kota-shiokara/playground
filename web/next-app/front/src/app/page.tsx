export default function Home() {
  return (
    <main>
      <ColorMessage color="red">
        <div>元気です！</div>
      </ColorMessage>
    </main>
  );
}

export const ColorMessage = (props: any) => {
  const contentStyle = {
    color: props.color,
    fontSize: "24px"
  }
  return <div style={contentStyle}>{props.children}</div>
}