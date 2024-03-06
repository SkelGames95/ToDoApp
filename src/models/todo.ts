interface ToDo {
    id?:number;
    title:string;
    description?:string;
    completed:boolean;
    snoozed:boolean;
    failed:boolean;
    prioritized:boolean;
    checked?:boolean;
}

type ToDoDraft = Partial<ToDo> & Required<Pick<ToDo, 'title' | 'id'>>;

export function createTodo( ToDoDraft:ToDoDraft): ToDo {
    return {
        id:ToDoDraft.id,
        title:ToDoDraft.title,
        completed: ToDoDraft.completed ?? false,
        snoozed: ToDoDraft.snoozed ?? false,
        failed: ToDoDraft.failed ?? false,
        prioritized: ToDoDraft.prioritized ?? false,
        checked: ToDoDraft.checked ?? false
    }
}