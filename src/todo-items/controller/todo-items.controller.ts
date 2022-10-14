import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { TodoItemsService } from '../service/todo-items.service';
import { ResponseDto } from '../../common/dto/response.dto';
import { Todo } from '../entities/todo.entity';
import { CreateTodoDto } from '../dto/create-todo.dto';
import { UpdateTodoDto } from '../dto/update-todo.dto';
import { FilterQueryDto } from '../dto/filter-query.dto';

@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  strategy: 'excludeAll',
})
@Controller('todo-items')
export class TodoItemsController {
  constructor(private readonly todoItemsService: TodoItemsService) {}

  @Get()
  async findAll(@Query() filter: FilterQueryDto) {
    const todos = await this.todoItemsService.findAll(filter);
    return ResponseDto.build<Todo[]>(todos);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const todo = await this.todoItemsService.findOne(id);
    return ResponseDto.build<Todo>(todo);
  }

  @Post()
  async create(@Body() createTodoDto: CreateTodoDto) {
    const todo = await this.todoItemsService.create(createTodoDto);
    return ResponseDto.build<Todo>(todo);
  }

  @Patch(':id')
  async update(@Param('id') id: number, @Body() updateTodoDto: UpdateTodoDto) {
    const todo = await this.todoItemsService.update(id, updateTodoDto);

    return ResponseDto.build<Todo>(todo);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.todoItemsService.remove(id);
    return ResponseDto.build<number>(deleted);
  }
}
