import { SafeAreaView, Text, StyleSheet, View, Image } from "react-native";

export default function Header({count}) {
  return (
    <View style={styles.container}>
      <Text style={styles.head}>E-Commerce</Text>
      <View style={styles.button}>
        <Image
          style={styles.logo}
          source={require("../assets/header/logo.png")}
          alt="photo"
        />
        <Text>Share Logs</Text>
      </View>
      <View style={styles.cart}>
        <Image style={styles.cartImg} source={require("../assets/header/Group.png")} />
        <Text>{count}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 16,
    marginTop: 32,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    // fontfamily: "Mortise",
  },
  head: {
    color: "#100E3A",
    fontSize: 20,
    fontWeight: "700",
  },
  button: {
    borderColor: "#737D94",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 1000,
    padding: 10,
    color: "#737D94",
    fontSize: 14,
    fontWeight: '700',
    display:"flex",
    flexDirection:"row",
    gap:10
  },
  logo: {
    height: 20,
    width: 20,
  },
  cart: {
    borderRadius: 100,
    backgroundColor:'#fff',
    padding:10,
    width:70,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.16,
    shadowRadius: 6,
    elevation: 3, 
    display:"flex",
    flexDirection:"row",
    justifyContent:"center",
    alignItems:"center",
    gap:8
  }
});
