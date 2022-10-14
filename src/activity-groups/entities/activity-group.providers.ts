import { ActivityGroup } from './activity-group.entity';

export const ACTIVITY_GROUP_REPOSITORY = 'ACTIVITY_GROUP_REPOSITORY';

export const activityGroupProviders = [
  {
    provide: ACTIVITY_GROUP_REPOSITORY,
    useValue: ActivityGroup,
  },
];
