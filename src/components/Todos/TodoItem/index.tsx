import { TodoData } from '@utils/types';
import React from 'react';

type Props = {
    todoData: TodoData;
};

const TodoItem: React.FC<Props> = () => {
    return (
        <div>
            <div> 12:00</div>
            <p>Todo Item 1</p>
        </div>
    );
};

export default TodoItem;
