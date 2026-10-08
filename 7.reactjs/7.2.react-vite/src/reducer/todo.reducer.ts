import type { TodoData } from "@/types/todo.type";
export type ActionType = {
    type: string;
    payload: unknown
}
export const initialValue = [];

export const todoReducer = (todoList: TodoData[], action: ActionType) => {

    //state: Tương tự acc
    //action: Tương tự cur
    switch (action.type) {
        case 'ADD_TODO': {
            return [...todoList, action.payload as TodoData]
        }
        case 'DELETE_TODO': {
            return todoList.filter((todo) => todo.id !== action.payload)
        }
        case 'COMPLETED_TODO': {
            return todoList.map(todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        completed: !todo.completed
                    }
                }
                return todo;
            })
        }
        default:
            return todoList;
    }

}

/*
Quản lý logic tập trung
action -> object mô tả hành động
{
    type: "ADD_TODO",
    payload: dữ liệu cần gửi lên reducer
}
*/