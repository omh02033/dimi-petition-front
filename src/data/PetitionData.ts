import { Dayjs } from 'dayjs';

import Category from './Category';

interface PetitionData {
  category: Category;
  title: string;
  date: Dayjs;
  likes: number;
}

export default PetitionData;