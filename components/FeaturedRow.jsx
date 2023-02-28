import React from "react";
import { ScrollView, View, Text } from "react-native";
import { ArrowRightIcon } from "react-native-heroicons/outline";
import RestaurantCard from "./RestaurantCard";

const FeaturedRow = ({ title, description, featuredCategory }) => {
  return (
    <View>
      <View className="mt-4 flex-row items-center justify-between px-4">
        <Text className="font-bold text-lg ">{title}</Text>
        <ArrowRightIcon color="#00ccbb" />
      </View>
      <Text className="text-gray-500 text-xs px-4">{description}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 15 }}
        className="pt-4"
      >
        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/wru"
          title="Gan Bei"
          rating={4.5}
          genre="Chinese"
          address="123 Fake Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem."
          dishes={[]}
          long={33}
          lat={53}
        />
        <RestaurantCard
          id={123}
          imageUrl="https://links.papareact.com/wru"
          title="Gan Bei"
          rating={4.5}
          genre="Chinese"
          address="123 Fake Street"
          short_description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem. Sed euismod, nunc vel tincidunt luctus, nisl nisl aliquet nisl, eget aliquet nisl nisl sit amet lorem."
          dishes={[]}
          long={33}
          lat={53}
        />
      </ScrollView>
    </View>
  );
};

export default FeaturedRow;
