enum Category {
  Safety = "안전",
  HumanRights = "인권",
  Life = "생활",
  Dormitory = "기숙사",
  General = "전체"
}

export function getCategoryId(category: Category) {
  switch (category) {
    case Category.Safety:
      return "5f564eba5ba38a46d0cd84c3";
    case Category.HumanRights:
      return "5f564ebe5ba38a46d0cd84c4";
    case Category.Life:
      return "5f564ec35ba38a46d0cd84c5";
    case Category.Dormitory:
      return "5f564ec75ba38a46d0cd84c6";
    case Category.General:
      return "5f564ea95ba38a46d0cd84c2";
  }
}

export default Category;
