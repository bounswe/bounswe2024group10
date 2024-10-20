import { View, Text, ScrollView } from "react-native";
import React from "react";
import UserResult from "../_components/result-cards/user-result";

export default function UsersView({ data }) {
  return (
    <ScrollView>
      {data.map((u, index) => (
        <UserResult key={index} user={u} />
      ))}
    </ScrollView>
  );
}
