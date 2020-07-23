import React, { useContext } from "react";
import { View, Text } from "react-native";
import { Context } from "../context/BlogContext";

const ShowScreen = ({ navigation }) => {
  const { state } = useContext(Context);
  const blogId = navigation.getParam("id");

  const blogPost = state.find((blog) => blog.id === blogId);

  return (
    <View>
      <Text>{blogPost.title}</Text>
    </View>
  );
};

export default ShowScreen;
