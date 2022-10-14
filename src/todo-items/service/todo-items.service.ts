import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { TODO_REPOSITORY } from '../entities/todo.providers';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { FilterQueryDto } from '../dto/filter-query.dto';

@Injectable()
export class TodoItemsService {
  constructor(
    @Inject(TODO_REPOSITORY)
    private todoRepository: typeof Todo,
  ) {}

  async findAll(filter?: FilterQueryDto) {
    if (filter) {
      return await this.todoRepository.findAll({
        where: {
          activityGroupId: filter.ActivityGroupId,
        },
      });
    }

    return await this.todoRepository.findAll();
  }

  async findOne(id: number) {
    return await this.todoRepository.findByPk(id);
  }

  async create(createTodoDto: CreateTodoDto) {
    return Todo.create({
      activityGroupId: createTodoDto.activityGroupId,
      title: createTodoDto.title,
    });
  }

  async update(id: number, updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoRepository.findByPk(id);
    if (!todo) {
      throw new NotFoundException(`todo ${id} not found`);
    }

    const success = await Todo.update(
      {
        title: updateTodoDto.title,
      },
      {
        where: {
          id,
        },
      },
    );

    if (success) {
      todo.title = updateTodoDto.title;
      return todo;
    }

    throw new InternalServerErrorException();
  }

  async remove(id: number) {
    const todo = await this.todoRepository.findByPk(id);
    if (!todo) {
      throw new NotFoundException(`activity ${id} not found`);
    }

    return await Todo.destroy({ where: { id } });
  }
}
