import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from "react-native";

export default function Produce(props) {
  const { category, increment,update,option } = props;
  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <View style={styles.smContainer}>
          <Text style={styles.head}>{category.name}</Text>
          <Image source={require("../assets/right.png")}></Image>
        </View>
        <View>
          <Text style={styles.blue}>View all</Text>
        </View>
      </SafeAreaView>
      <SafeAreaView style={styles.images}>
        <View>
          <TouchableOpacity
            onPress={() => {
              increment(!category.fruits[0].selected?'+':'-');
              update(category.fruits[0])
            }}
          >
            <Image
              style={styles.down}
              source={require("../assets/banana.png")}
            />
            {option[0].selected ? (
              <Image
                style={styles.up}
                source={require("../assets/minus.png")}
              />
            ) : (
              <Image style={styles.up} source={require("../assets/plus.png")} />
            )}
          </TouchableOpacity>

          {/* <Text>{category.fruits[0].fruitName}</Text>
          <Text>{category.fruits[0].price}</Text>
          <Text>{category.fruits[0].weight}</Text> */}
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              increment(!category.fruits[1].selected?'+':'-');
              update(category.fruits[1])
            }}
          >
            <Image
              style={styles.down}
              source={require("../assets/berry.png")}
            />
            {option[1].selected ? (
              <Image
                style={styles.up}
                source={require("../assets/minus.png")}
              />
            ) : (
              <Image style={styles.up} source={require("../assets/plus.png")} />
            )}
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              increment(!category.fruits[2].selected?'+':'-');
              update(category.fruits[2])
            }}
          >
            <Image
              style={styles.down}
              source={require("../assets/stawberry.png")}
            />
            {option[2].selected ? (
              <Image />
            ) : (
              <Image style={styles.up} source={require("../assets/plus.png")} />
            )}
          </TouchableOpacity>
        </View>
      </SafeAreaView>
      <View style={styles.images}>
        {category.fruits.map((fruit) => {
          return (
            <View>
              <Text style={styles.price}>$ {fruit.price}</Text>
              <Text style={styles.name}>{fruit.fruitName}</Text>
              <Text style={styles.weight}>{fruit.weight}</Text>
            </View>
          );
        })}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    overflow: "scroll",
  },
  smContainer: {
    display: "flex",
    flexDirection: "row",
  },
  head: {
    fontSize: 16,
    fontWeight: "600",
  },
  blue: {
    color: "#5DA9E9",
  },
  images: {
    paddingLeft: 16,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  down: {
    position: "relative",
    width: 100,
    height: 100,
  },
  up: {
    position: "absolute",
    top: 50,
    left: 70,
  },
  list: {
    display: "flex",
    flexDirection: "row",
  },
  name: {
    fontSize: 14,
    fontWeight: "600",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
  },
  weight: {
    fontSize: 12,
    fontWeight: "700",
    color: "#B6BAC3",
  },
});
