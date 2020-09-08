import { Dayjs } from 'dayjs';

import Category from './Category';

export enum PetitionStatus {
  Progress = 'p',
  Waiting = 'w',
  Answered = 'a',
  Closed = 'c',
  Deleted = 'd',
  Reported = 'r',
  Hided = 'h',
}

interface PetitionData {
  id: number;
  category: Category;
  title: string;
  createdAt: Dayjs;
  likes: number;
  status: PetitionStatus;
}

export default PetitionData;
