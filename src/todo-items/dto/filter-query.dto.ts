import { Expose } from 'class-transformer';
import { IsOptional } from 'class-validator';

export class FilterQueryDto {
  @IsOptional()
  @Expose({ name: 'activity_group_id' })
  ActivityGroupId: number;
}
