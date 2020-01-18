import React from 'react';
import {
    DragDropContext,
    Droppable,
    Draggable,
    DropResult,
} from 'react-beautiful-dnd';
import classNames from 'classnames/bind';

import DragHandleIcon from '~/assets/icons/dragIcon.svg';
import { reorder } from '~/helpers';
import { Todo } from '~/components/Todo';

import { ITodo } from '~/models';

import styles from './DraggableTodoList.module.css';

const cx = classNames.bind(styles);

interface DraggableTodoListProps {
    todos: ITodo[];
    onReorder: (reordered: ITodo[]) => void;
    classNames: string;
}

const DraggableTodoList: React.FC<DraggableTodoListProps> = ({
    todos,
    onReorder,
    classNames,
}) => {
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }

        if (result.destination.index === result.source.index) {
            return;
        }

        const reorderedActiveTodos = reorder(
            todos,
            result.source.index,
            result.destination.index
        );

        onReorder(reorderedActiveTodos);
    };

    return (
        <ul className={classNames}>
            <DragDropContext onDragEnd={onDragEnd}>
                <Droppable droppableId="active">
                    {(provided, { isDraggingOver }) => (
                        <div
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                        >
                            {todos?.map((todo, index) => (
                                <Draggable
                                    draggableId={todo.id}
                                    key={todo.id}
                                    index={index}
                                >
                                    {(provided, { isDragging }) => (
                                        <div
                                            className={cx('todoWrapper', {
                                                isDraggingOver,
                                            })}
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                        >
                                            <span
                                                {...provided.dragHandleProps}
                                                className={cx('dragHandle', {
                                                    isDragging,
                                                })}
                                            >
                                                <DragHandleIcon
                                                    className={cx('dragIcon')}
                                                />
                                            </span>
                                            <Todo todo={todo}></Todo>
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </ul>
    );
};

export { DraggableTodoList };
