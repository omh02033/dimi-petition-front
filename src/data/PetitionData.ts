import { Dayjs } from "dayjs";

import Category from "./Category";

export enum PetitionStatus {
  Progress = "p",
  Waiting = "w",
  Answered = "a",
  Closed = "c",
  Deleted = "d",
  Reported = "r",
  Hided = "h",
}

export const statusToString = (status: PetitionStatus) => {
  switch (status) {
    case PetitionStatus.Progress:
      return "청원 진행 중";
    case PetitionStatus.Hided:
      return "가려진 청원";
    case PetitionStatus.Closed:
      return "닫힌 청원";
    case PetitionStatus.Waiting:
      return "답변 대기 중";
    case PetitionStatus.Deleted:
      return "삭제된 청원";
    case PetitionStatus.Reported:
      return "신고 접수된 청원";
    case PetitionStatus.Answered:
      return "답변된 청원";
  }
};

interface PetitionData {
  id: number;
  category: Category;
  title: string;
  content?: string;
  links?: string[];
  createdAt: Dayjs;
  until?: Dayjs;
  likes: number;
  status: PetitionStatus;
  answer?: string;
}

export default PetitionData;
