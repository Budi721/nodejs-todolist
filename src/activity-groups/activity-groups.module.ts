import { Module } from '@nestjs/common';
import { ActivityGroupsService } from './service/activity-groups.service';
import { ActivityGroupsController } from './controller/activity-groups.controller';
import { activityGroupProviders } from './entities/activity-group.providers';

@Module({
  providers: [ActivityGroupsService, ...activityGroupProviders],
  controllers: [ActivityGroupsController],
  exports: [...activityGroupProviders],
})
export class ActivityGroupsModule {}
