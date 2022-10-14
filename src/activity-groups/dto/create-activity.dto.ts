import { IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  title: string;

  @IsString()
  email: string;
}
