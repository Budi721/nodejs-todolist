import { Sequelize } from 'sequelize-typescript';
import { Todo } from '../todo-items/entities/todo.entity';
import { ActivityGroup } from '../activity-groups/entities/activity-group.entity';

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'mysql',
        host: process.env.MYSQL_HOST,
        port: parseInt(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DBNAME,
      });
      sequelize.addModels([Todo, ActivityGroup]);
      await sequelize.sync();
      return sequelize;
    },
  },
];
