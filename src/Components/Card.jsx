import { useDraggable } from '@dnd-kit/core';

export default function Card({ name, category, reward, id, parent, index }) {
    const { attributes, listeners, setNodeRef, transform } = useDraggable({
        id: id,
        data: {
            name,
            category,
            reward,
            parent,
            index,
        },
    });

    const style = transform
        ? {
              transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
          }
        : undefined;

    return (
        <div
            ref={setNodeRef}
            style={style}
            {...listeners}
            {...attributes}
            className='w-full rounded border border-slate-500 bg-[#2A2C37] text-base text-white'
        >
            <div className='p-3'>
                <p>{name}</p>
                <div>{category}</div>
            </div>
            <div className='flex justify-between rounded-b bg-[#303340] px-3 py-1'>
                <p className='text-sm'>{reward}</p>
                <p className='cursor-pointer text-sm'>Submit Work</p>
            </div>
        </div>
    );
}
