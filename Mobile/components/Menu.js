import {
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  View,
} from "react-native";

export default function Menu() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.btn}>
          <Image source={require("../assets/menu/carrot.png")}></Image>
        </View>
        <View style={styles.btn2}>
          <Image source={require("../assets/menu/chocolate.png")}></Image>
        </View>
        <View style={styles.btn2}>
          <Image source={require("../assets/menu/cake.png")}></Image>
        </View>
        <View style={styles.btn2}>
          <Image source={require("../assets/menu/fish.png")}></Image>
        </View>
        <View style={styles.btn2}>
          <Image source={require("../assets/menu/eggs.png")}></Image>
        </View>
        <View style={styles.btn2}>
          <Image source={require("../assets/menu/fast-food.png")}></Image>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.container}>
        <Text style={styles.conText}>Produce</Text>
        <Text style={styles.conText}>Sweets</Text>
        <Text style={styles.conText}>Bakery</Text>
        <Text style={styles.conText}>Canned</Text>
        <Text style={styles.conText}>Dairy</Text>
        <Text style={styles.conText}>Frozen</Text>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 20,
    overflow: "scroll",
    marginLeft: 14,
  },
  conText: {
    fontSize: 14,
    fontWeight: "600",
    color: "#B6BAC3",
  },
  btn: {
    height: 48,
    width: 48,
    backgroundColor: "#5DA9E9",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
  btn2: {
    height: 48,
    width: 48,
    backgroundColor: "#EDEDED",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
  },
});
