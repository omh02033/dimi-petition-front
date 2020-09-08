enum Category {
  Safety,
  HumanRights,
  Life,
  Dormitory,
  General
}

export function categoryToString(category: Category) {
  switch (category) {
    case Category.Safety:
      return "안전";
    case Category.HumanRights:
      return "인권";
    case Category.Life:
      return "생활";
    case Category.Dormitory:
      return "기숙사";
    case Category.General:
      return "전체";
  }

}

export default Category;
