enum Category {
  Safety = "안전",
  HumanRights = "인권",
  Life = "생활",
  Dormitory = "기숙사",
}

export function getCategoryId(category: Category) {
  switch (category) {
    case Category.Safety:
      return "61a1f7e8e0803b836812d096";
    case Category.HumanRights:
      return "61a1f859e0803b836812d097";
    case Category.Life:
      return "61a1f87ae0803b836812d099";
    case Category.Dormitory:
      return "61a1f883e0803b836812d09a";
  }
}

export default Category;
