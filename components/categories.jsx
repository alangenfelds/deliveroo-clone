import React from "react";
import { ScrollView } from "react-native";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator
      contentContainerStyle={{ paddingHorizontal: 15, paddingTop: 10 }}
    >
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="test" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="test" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="test" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="test" />
      <CategoryCard imageUrl="https://links.papareact.com/wru" title="test" />
    </ScrollView>
  );
};

export default Categories;
