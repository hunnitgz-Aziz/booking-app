import React from "react";
import { StyleSheet, Text, View } from "react-native";
import styled from "styled-components";
import Card from "./components/Card";

export default function App() {
  return (
    <Container>
      <Card />
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;
