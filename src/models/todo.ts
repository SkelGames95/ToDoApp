interface ToDo {
    id?:number;
    title:string;
    userId:number;
    description?:string;
    completed:boolean;
    postponed:boolean;
    failed:boolean;
    prioritized:boolean;
    checked?:boolean;
}

type ToDoDraft = Partial<ToDo> & Required<Pick<ToDo, 'title' | 'userId'>>;

export function createTodo( ToDoDraft:ToDoDraft) {
    return {
        id:ToDoDraft.id,
        title:ToDoDraft.title,
        userId: ToDoDraft.userId,
        completed: ToDoDraft.completed ?? false,
        postponed: ToDoDraft.postponed ?? false,
        failed: ToDoDraft.failed ?? false,
        prioritized: ToDoDraft.prioritized ?? false,
        checked: ToDoDraft.checked ?? false
    } as ToDo;
}