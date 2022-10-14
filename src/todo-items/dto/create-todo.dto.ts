import { IsString, IsNumber } from 'class-validator';
import { Expose } from 'class-transformer';

export class CreateTodoDto {
  @IsNumber()
  @Expose({ name: 'activity_group_id' })
  activityGroupId: number;

  @IsString()
  title: string;
}
