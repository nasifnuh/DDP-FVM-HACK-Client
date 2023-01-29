import List from "./List";
import { useState } from "react";
import { DndContext, rectIntersection } from "@dnd-kit/core";

const todoList = [
  {
    name: "Task1",
    category: "Design",
    reward: "1 ETH",
  },
  {
    name: "Task2",
    category: "Frontend",
    reward: "1 ETH",
  },
  {
    name: "Task3",
    category: "Backend",
    reward: "1 ETH",
  },
];
const progressList = [
  {
    name: "Task1",
    category: "Design",
    reward: "1 ETH",
  },
];
const doneList = [
  {
    name: "Task1",
    category: "Design",
    reward: "1 ETH",
  },
  {
    name: "Task2",
    category: "Frontend",
    reward: "1 ETH",
  },
];

export default function Board() {
  const [todoItems, setTodoItems] = useState(todoList);
  const [inProgressItems, setInProgressItems] = useState(progressList);
  const [doneItems, setDoneItems] = useState(doneList);

  return (
    <DndContext
      collisionDetection={rectIntersection}
      onDragEnd={(e) => {
        const container = e.over?.id;
        const item = {
          name: e.active.data.current?.name ?? "",
          category: e.active.data.current?.category ?? "",
          reward: e.active.data.current?.reward ?? "",
        };
        const index = e.active.data.current?.index ?? 0;
        const parent = e.active.data.current?.parent ?? "ToDo";

        if (container === "ToDo") {
          setTodoItems([...todoItems, item]);
        } else if (container === "Done") {
          setDoneItems([...doneItems, item]);
        } else {
          setInProgressItems([...inProgressItems, item]);
        }
        if (parent === "ToDo") {
          setTodoItems([
            ...todoItems.slice(0, index),
            ...todoItems.slice(index + 1),
          ]);
        } else if (parent === "Done") {
          setDoneItems([
            ...doneItems.slice(0, index),
            ...doneItems.slice(index + 1),
          ]);
        } else {
          setInProgressItems([
            ...inProgressItems.slice(0, index),
            ...inProgressItems.slice(index + 1),
          ]);
        }
      }}
    >
      <div className="flex h-screen gap-4 p-8">
        <List title="ToDo" items={todoItems} />
        <List title="Progress" items={inProgressItems} />
        <List title="Done" items={doneItems} />
      </div>
    </DndContext>
  );
}
