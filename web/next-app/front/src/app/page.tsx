'use client'
import { useState } from "react";

function Child1() {
  console.log(`Child1`);
  return (
    <div>
      <Child2 />
      <Child3 />
    </div>
  );
}

function Child2() {
  console.log("Child2");
  return <div>Child2</div>;
}

function Child3() {
  console.log("Child3");
  return <div>Child3</div>;
}

function Child4() {
  console.log("Child4");
  return <div>Child4</div>;
}

export default function Home() {
  const [num, setNum] = useState(0);

  const onClick = () => {
    setNum(num + 1);
  }

  return (
    <main>
      <Child1>
        
      </Child1>
      <Child4 />
      <button onClick={onClick}>Click</button>
      <p>{num}</p>
    </main>
  );
}
