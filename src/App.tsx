import axios from "axios";
import { useState } from "react";
import { Todo } from "./Todo";
import { Text } from "./Text";
import { TodoType } from "./types/todo";
import { User } from "./types/user";
import { UserProfile } from "./UserProfile";
import "./styles.css";

// 受け取るデータの型を定義
// type TodoType = {
//   userId: number;
//   id: number;
//   title: string;
//   completed: boolean;
// };

const user: User = {
  name: "aaa",
  hobbies: ["BBB", "CCC"]
};

export default function App() {
  // useStateの型の定義方法を覚えておく
  const [todos, setTodos] = useState<Array<TodoType>>([]);

  const onClickFetchData = () => {
    return axios
      .get<Array<TodoType>>("https://jsonplaceholder.typicode.com/todos")
      .then((res) => {
        setTodos(res.data.map((todo) => todo));
        // console.log(res);
      });
  };
  return (
    <div className="App">
      <UserProfile user={user} />
      <Text color="red" fontSize="20px" />
      <button onClick={onClickFetchData}>データ取得</button>
      {todos.map((todo) => (
        <Todo
          key={todo.id}
          title={todo.title}
          userId={todo.userId}
          completed={todo.completed}
        />
      ))}
    </div>
  );
}
