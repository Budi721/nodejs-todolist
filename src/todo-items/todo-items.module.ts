import { Module } from '@nestjs/common';
import { TodoItemsService } from './service/todo-items.service';
import { TodoItemsController } from './controller/todo-items.controller';
import { todoProviders } from './entities/todo.providers';
import { activityGroupProviders } from '../activity-groups/entities/activity-group.providers';

@Module({
  providers: [TodoItemsService, ...todoProviders, ...activityGroupProviders],
  controllers: [TodoItemsController],
})
export class TodoItemsModule {}
