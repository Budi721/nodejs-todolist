import {
  Inject,
  Injectable,
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';
import { ACTIVITY_GROUP_REPOSITORY } from '../entities/activity-group.providers';
import { ActivityGroup } from '../entities/activity-group.entity';
import { CreateActivityDto } from '../dto/create-activity.dto';
import { UpdateActivityDto } from '../dto/update-activity.dto';

@Injectable()
export class ActivityGroupsService {
  constructor(
    @Inject(ACTIVITY_GROUP_REPOSITORY)
    private activityGroupRepository: typeof ActivityGroup,
  ) {}

  findAll() {
    return this.activityGroupRepository.findAll();
  }

  async findOne(id: number) {
    const activity = await this.activityGroupRepository.findByPk(id);
    if (!activity) {
      throw new NotFoundException(`activity ${id} not found`);
    }

    return activity;
  }

  async create(createActivityDto: CreateActivityDto) {
    return await ActivityGroup.create({
      email: createActivityDto.email,
      title: createActivityDto.title,
    });
  }

  async update(id: number, updateActivityDto: UpdateActivityDto) {
    const activity = await this.activityGroupRepository.findByPk(id);
    if (!activity) {
      throw new NotFoundException(`activity ${id} not found`);
    }

    const success = await ActivityGroup.update(
      {
        title: updateActivityDto.title,
      },
      {
        where: {
          id,
        },
      },
    );

    if (success) {
      activity.title = updateActivityDto.title;
      return activity;
    }

    throw new InternalServerErrorException();
  }

  async remove(id: number) {
    const activity = await this.activityGroupRepository.findByPk(id);
    if (!activity) {
      throw new NotFoundException(`activity ${id} not found`);
    }

    return await ActivityGroup.destroy({ where: { id } });
  }
}
