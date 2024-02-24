import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useRef } from "react";
import { Animated, Easing, Image, SafeAreaView, Text } from "react-native";

const CustomLoadingIndicator = ({ size, color }) => {
  const rotate = useRef(new Animated.Value(0)).current;

  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Delivery");
    }, 4000);
  }, []);

  useEffect(() => {
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 2,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  const interpolatedRotate = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  });

  return (
    <Animated.View style={{ transform: [{ rotate: interpolatedRotate }] }}>
      <Image
        source={require("../assets/loadingIndicator.png")}
        style={{ height: size, width: size, tintColor: color }}
      />
    </Animated.View>
  );
};

const PreparingOrderScreen = () => {
  const translateY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  }, []);

  const interpolatedTranslateY = translateY.interpolate({
    inputRange: [0, 1],
    outputRange: [500, 0],
  });

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#00CCBB",
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Animated.View
        style={{ transform: [{ translateY: interpolatedTranslateY }] }}
      >
        <Image
          source={require("../assets/orderLoading.gif")}
          style={{ height: 296, width: 296 }}
        />
      </Animated.View>
      <Animated.Text
        style={{
          transform: [{ translateY: interpolatedTranslateY }],
          fontSize: 16,
          marginTop: 10,
          color: "white",
          fontWeight: "bold",
          textAlign: "center",
        }}
      >
        Waiting for Restaurant to accept your order!
      </Animated.Text>
      <CustomLoadingIndicator size={90} color="white" />
    </SafeAreaView>
  );
};

export default PreparingOrderScreen;
