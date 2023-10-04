import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import Menu from "./components/Menu";
import Produce from "./components/Produce";
import { useState } from "react";
import categorys from "./data/category";

export default function App() {
  const [category, setCategory] = useState(categorys);
  const [count, setCount] = useState(0);
  const [fruits] = categorys;
  const [option, setOption] = useState(fruits.fruits);

  function updateSelectedItem(item) {
    console.log(item);
    console.log(option);
    setOption((preValue) => {
      return preValue.map((fruit) => {
        if (fruit.fruitName === item.fruitName) {
          return {
            ...fruit,
            selected: !item.selected,
          };
        }
        return fruit;
      });
    });
  }

  function checkCount(type) {
    if (type === "+") {
      setCount((preValue) => {
        return preValue + 1;
      });
    } else if (type === "-") {
      setCount((preValue) => {
        return preValue - 1;
      });
    }
  }
  return (
    <SafeAreaView style={styles.container}>
      <Header count={count} />
      <Menu />
      {category.map((data) => {
        return (
          <Produce
            category={data}
            option={option}
            increment={checkCount}
            update={updateSelectedItem}
          />
        );
      })}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    marginTop: 20,
  },
});
