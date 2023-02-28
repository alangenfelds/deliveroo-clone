import React, { useLayoutEffect } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  UserIcon,
  ChevronDownIcon,
  AdjustmentsVerticalIcon,
  MagnifyingGlassIcon,
} from "react-native-heroicons/outline";

import Categories from "../components/categories";
import FeaturedRow from "../components/FeaturedRow";

const Home = () => {
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({
      // headerTitle: "Deliveroo",
      headerShown: false,
    });
  }, []);
  return (
    <SafeAreaView className="bg-white pt-14">
      {/* by default View is a flex column container */}
      <View className="flex flex-row pb-3 items-center mx-4 space-x-2">
        <Image
          source={{
            uri: "https://links.papareact.com/wru",
          }}
          className="w-7 h-7 bg-gray-300 p-4 rounded-full"
        />
        <View className="flex-1">
          <Text className="font-bold text-gray-400 text-xs">Deliver Now!</Text>
          <Text className="font-bold text-xl">
            Current Location
            <ChevronDownIcon size={20} color="#00ccbb" />
          </Text>
        </View>
        <UserIcon size={35} color="#00ccbb" />
      </View>

      {/* Search bar */}
      <View className="flex flex-row items-center space-x-2 pb-2 mx-4">
        <View className="flex flex-row space-x-2 flex-1 bg-gray-200 p-3">
          <MagnifyingGlassIcon color="gray" />
          <TextInput
            placeholder="Restaurants and cousines"
            keyboard="default"
          />
        </View>
        <AdjustmentsVerticalIcon color="#00ccbb" />
      </View>

      {/* Body */}
      <ScrollView
        className="bg-gray-100"
        contentContainerStyle={{
          paddingBottom: 100,
        }}
      >
        <Categories />
        <FeaturedRow
          title="Featured"
          description="Paid placements from our partners"
          featuredCategory="featured"
        />

        <FeaturedRow
          title="Tasty Discounts"
          description="Everyone's been enjoying these juicy discounts!"
          featuredCategory="discounts"
        />

        <FeaturedRow
          title="Offers near you"
          description="Why not support your local restaurant?"
          featuredCategory="offers"
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
