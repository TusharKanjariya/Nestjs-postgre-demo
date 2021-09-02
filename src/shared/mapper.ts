export const toTodoDto = (data: any): any => {
    const { id, name, description } = data;

    let todoDto: any = { id, name, description, };
    return todoDto;

};
