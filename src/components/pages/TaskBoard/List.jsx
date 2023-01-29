import { useDroppable } from "@dnd-kit/core";
import Card from "./Card";

export default function List({ items, title }) {
  const { setNodeRef } = useDroppable({
    id: title,
  });

  return (
    <div
      ref={setNodeRef}
      className="flex h-fit min-h-[11rem] w-[18rem] flex-col gap-2 rounded-lg border border-slate-500 px-2 py-2"
    >
      <div className="w-full border-b border-slate-500">
        <h2 className="py-2 px-2 text-base">{title}</h2>
      </div>
      {items.map((item, index) => {
        return (
          <Card
            {...item}
            key={index}
            index={index}
            id={`${title}${index}`}
            parent={title}
          />
        );
      })}
    </div>
  );
}
