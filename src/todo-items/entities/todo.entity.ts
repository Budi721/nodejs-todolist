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
@Table
export class Todo extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  @Expose({ name: 'id' })
  id: number;

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

  @Expose({ name: 'is_active' })
  @Column
  isActive: number;

  @Expose({ name: 'priority' })
  @Column
  priority: string;

  @Expose({ name: 'created_at' })
  @CreatedAt
  createdAt: Date;

  @Expose({ name: 'updated_at' })
  @UpdatedAt
  updateAt: Date;

  @Expose({ name: 'deleted_at' })
  @DeletedAt
  deletedAt: Date;
}
