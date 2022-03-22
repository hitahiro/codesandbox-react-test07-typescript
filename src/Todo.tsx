import { VFC } from "react";
import { TodoType } from "./types/todo";

// type TodoType = {
//   userId: number;
//   title: string;
//   completed: boolean;
// };

export const Todo: VFC<Omit<TodoType, "id">> = (
  props
  // props: Pick<TodoType, "userId" | "title" | "completed"> // Pickは抽出するプロパティを指定する
  // props: Omit<TodoType, "id"> // Omitは省略するプロパティを指定する
) => {
  const { title, userId, completed } = props;
  const completedMark = completed ? "[完]" : "[未]";
  return <p>{`${completedMark}${title}(ユーザー：${userId})`}</p>;
};
