enum Category {
  Safety = "안전",
  HumanRights = "인권",
  Life = "생활",
  Dormitory = "기숙사",
}

export function getCategoryId(category: Category) {
  switch (category) {
    case Category.Safety:
      return "61a1fe78d44b39001c316233";
    case Category.HumanRights:
      return "61a1fe9ad44b39001c316234";
    case Category.Life:
      return "61a1feb6d44b39001c316235";
    case Category.Dormitory:
      return "61a1fec9d44b39001c316236";
  }
}

export default Category;
