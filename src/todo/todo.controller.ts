import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { TodoService } from './todo.service';

@Controller("todos")
export class TodoController {
    constructor(private readonly todoService: TodoService) { }
    @Get()
    async findAll(): Promise<any> {
        const data = await this.todoService.getAllTodos();
        return data;
    }

    @Get(":id")
    async findOne(@Param("id") id: string): Promise<any> {
    }

    @Post()
    async create(@Body() todoCreateDto): Promise<any> {
        const { title, description, isActive } = todoCreateDto;
        const data = await this.todoService.addTodo({
            title, description, isActive
        });
        return data;
    }

    @Put(":id")
    async update(
        @Param("id") id: string,
        @Body() todoDto
    ) {
        const data = await this.todoService.updateTodo(id, todoDto);
        return data;
    }

    @Delete(":id")
    async destory(@Param("id") id: string): Promise<any> {
        const data = this.todoService.removeTodo(id);
        return data;
    }
}
