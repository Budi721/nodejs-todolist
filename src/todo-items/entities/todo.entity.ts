import {
  Table,
  Column,
  Model,
  PrimaryKey,
  ForeignKey,
  BelongsTo,
  CreatedAt,
  UpdatedAt,
  DeletedAt,
  AutoIncrement,
} from 'sequelize-typescript';
import { ActivityGroup } from '../../activity-groups/entities/activity-group.entity';
import { Exclude, Expose } from 'class-transformer';
/**
 *
 *             "id": 1,
 *             "activity_group_id": "2",
 *             "title": "item1",
 *             "is_active": "1",
 *             "priority": "very-high",
 *             "created_at": "2021-11-30T18:09:19.000Z",
 *             "updated_at": "2021-11-30T20:23:12.000Z",
 *             "deleted_at": null
 *
 */
@Table({ tableName: 'todos' })
export class Todo extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Expose({ name: 'id' })
  id: number;

  @Column({ field: 'activity_group_id' })
  @Expose({ name: 'activity_group_id' })
  @ForeignKey(() => ActivityGroup)
  @Column
  activityGroupId: number;

  @Exclude()
  @BelongsTo(() => ActivityGroup)
  activityGroup: ActivityGroup;

  @Expose({ name: 'title' })
  @Column
  title: string;

  @Column({ field: 'is_active' })
  @Expose({ name: 'is_active' })
  @Column
  isActive: number;

  @Expose({ name: 'priority' })
  @Column
  priority: string;

  @Column({ field: 'created_at' })
  @Expose({ name: 'created_at' })
  @CreatedAt
  createdAt: Date;

  @Column({ field: 'updated_at' })
  @Expose({ name: 'updated_at' })
  @UpdatedAt
  updateAt: Date;

  @Column({ field: 'deleted_at' })
  @Expose({ name: 'deleted_at' })
  @DeletedAt
  deletedAt: Date;
}
