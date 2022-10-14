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
  @Column
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
  @Expose({ name: 'created_at' })
  createdAt: Date;

  @UpdatedAt
  @Expose({ name: 'updated_at' })
  updateAt: Date;

  @DeletedAt
  @Expose({ name: 'deleted_at' })
  deletedAt: Date;
}
