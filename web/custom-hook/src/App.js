import { useFetchUsers } from "./hooks/useFetchUsers";

function App() {
  const { userList, isLoading, isError, onClickFetchUsers } = useFetchUsers();
  
  return (
    <div className="App">
      <button onClick={onClickFetchUsers}>ユーザ取得</button>
      {isError && <p style={{ color: "red" }}>読み込み失敗</p>}
      {isLoading ? (
        <p>読み込み中...</p>
      ) : (
        <ul>
          {userList.map((user) => (
            <li key={user.id}>
              {user.id} {user.name} ({user.age})
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;
