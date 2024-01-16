import { DUMMY_TODO_LIST } from '@utils/DUMMY_DATA.ts';
import { TodoData } from '@utils/types';
import React from 'react';
import TodoItem from './TodoItem';

type Props = {};

const Todos: React.FC<Props> = () => {
    return (
        <div>
            {DUMMY_TODO_LIST.map((todoData: TodoData, index) => (
                <TodoItem key={index} todoData={todoData} />
            ))}
        </div>
    );
};

export default Todos;
