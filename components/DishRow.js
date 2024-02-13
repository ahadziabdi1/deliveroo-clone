import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { urlFor } from "../sanity";

const DishRow = ({ id, name, description, price, image }) => {
  const formattedPrice = new Intl.NumberFormat("en-GB", {
    style: "currency",
    currency: "GBP",
  }).format(price);

  return (
    <TouchableOpacity>
      <View>
        <Text className="text-lg mb-1">{name}</Text>
        <Text className="text-gray-400">{description}</Text>
        <Text className="text-gray-400 mt-2">{formattedPrice}</Text>
      </View>
      <View>
        <Image
          style={{
            borderWidth: 1,
            borderColor: "#F3F3F4",
          }}
          source={{
            uri: urlFor(image).url() // Update image prop to use correct field name
          }}
          className="h-20 w-20 bg-gray-300 p-4"
        />
      </View> 
    </TouchableOpacity>
  );
};

export default DishRow;
