import { Todo } from './todo.entity';

export const TODO_REPOSITORY = 'TODO_REPOSITORY';

export const todoProviders = [
  {
    provide: TODO_REPOSITORY,
    useValue: Todo,
  },
];
