import {
  AutoIncrement,
  Column,
  CreatedAt,
  DeletedAt,
  HasMany,
  Model,
  PrimaryKey,
  Table,
  UpdatedAt,
} from 'sequelize-typescript';
import { Todo } from '../../todo-items/entities/todo.entity';
import { Exclude, Expose } from 'class-transformer';

@Table({ tableName: 'activities' })
export class ActivityGroup extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column({ field: 'activity_group_id' })
  @Expose({ name: 'id' })
  id: number;

  @Column
  @Expose({ name: 'email' })
  email: string;

  @Column
  @Expose({ name: 'title' })
  title: string;

  @HasMany(() => Todo)
  @Exclude()
  todos: Todo[];

  @CreatedAt
  @Column({ field: 'created_at' })
  @Expose({ name: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Column({ field: 'updated_at' })
  @Expose({ name: 'updated_at' })
  updateAt: Date;

  @DeletedAt
  @Column({ field: 'deleted_at' })
  @Expose({ name: 'deleted_at' })
  deletedAt: Date;
}
