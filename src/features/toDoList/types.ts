export interface TodoListState {
  error: string | null;
  records: [string] | [];
  status: string;
}

export interface ToDoItem {
  id: string;
  description: string | null;
}