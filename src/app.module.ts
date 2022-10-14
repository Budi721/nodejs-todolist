import { Module } from '@nestjs/common';
import { TodoItemsModule } from './todo-items/todo-items.module';
import { ActivityGroupsModule } from './activity-groups/activity-groups.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    TodoItemsModule,
    ActivityGroupsModule,
    DatabaseModule,
    ConfigModule.forRoot(),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
