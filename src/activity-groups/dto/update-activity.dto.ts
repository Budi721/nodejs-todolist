import { IsString } from 'class-validator';

export class UpdateActivityDto {
  @IsString()
  title: string;
}
