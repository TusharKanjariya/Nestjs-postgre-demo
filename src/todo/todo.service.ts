import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import * as uuid from 'uuid';
import { Todo } from './todo.entity';

@Injectable()
export class TodoService {
    constructor(
        @InjectRepository(Todo) private todoRepo: Repository<Todo>
    ) { }

    getAllTodos() {
        return this.todoRepo.find();
    }

    addTodo(todoCreateDto: any) {
        return this.todoRepo.insert(todoCreateDto);
    }

    async removeTodo(id: string) {
        await this.todoRepo.delete(id);
    }

    updateTodo(id: string, data: any) {
        return this.todoRepo.save({ ...data, id: Number(id) });
    }
}
