import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  SerializeOptions,
  UseInterceptors,
} from '@nestjs/common';
import { ActivityGroupsService } from '../service/activity-groups.service';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { UpdateActivityDto } from '../dto/update-activity.dto';
import { ResponseDto } from '../../common/dto/response.dto';
import { ActivityGroup } from '../entities/activity-group.entity';

@UseInterceptors(ClassSerializerInterceptor)
@SerializeOptions({
  strategy: 'excludeAll',
})
@Controller('activity-groups')
export class ActivityGroupsController {
  constructor(private readonly activityGroupsService: ActivityGroupsService) {}

  @Get()
  async findAll() {
    const activities = await this.activityGroupsService.findAll();
    return ResponseDto.build<ActivityGroup[]>(activities);
  }

  @Get(':id')
  async findOne(@Param('id') id: number) {
    const activity = await this.activityGroupsService.findOne(id);
    return ResponseDto.build<ActivityGroup>(activity);
  }

  @Post()
  async create(@Body() createActivityDto: CreateActivityDto) {
    const activity = await this.activityGroupsService.create(createActivityDto);
    return ResponseDto.build<ActivityGroup>(activity);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() updateActivityDto: UpdateActivityDto,
  ) {
    const activity = await this.activityGroupsService.update(
      id,
      updateActivityDto,
    );

    return ResponseDto.build<ActivityGroup>(activity);
  }

  @Delete(':id')
  async remove(@Param('id') id: number) {
    const deleted = await this.activityGroupsService.remove(id);
    return ResponseDto.build<number>(deleted);
  }
}
