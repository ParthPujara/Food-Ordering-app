import { Stack, useLocalSearchParams } from "expo-router";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import products from "@assets/data/products";
import { defaultImage } from "@src/components/ProductListComponent";
import { useState } from "react";
import Button from "@src/components/Button";

export default function ProductDetailsScreen() {
  const { id } = useLocalSearchParams();
  const product = products.find((item) => item.id.toString() === id);
  const sizes = ["S", "M", "L", "XL"];
  const [selectedSize, setSelectedSize] = useState("S");
  if (!product)
    return (
      <View style={styles.container}>
        <Text>Product not found</Text>
      </View>
    );

  const addToCart = () => {
    console.warn("Add to cart", product.id, selectedSize);
  }
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: product.name + "AS" }} />
      <Image
        source={{ uri: product.image || defaultImage }}
        style={styles.image}
      />
      <Text>Select Size</Text>
      <View style={styles.sizes}>
        {sizes.map((size) => (
          <Pressable
            key={size}
            style={[
              styles.size,
              {
                backgroundColor: selectedSize === size ? "gainsboro" : "white",
              },
            ]}
            onPress={() => setSelectedSize(size)}
          >
            <Text
              style={[
                styles.sizeText,
                { color: selectedSize === size ? "black" : "gainsboro" },
              ]}
            >
              {size}
            </Text>
          </Pressable>
        ))}
      </View>
      <Text style={styles.price}>${product.price}</Text>
      <Button text="Add to cart" onPress={addToCart} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    aspectRatio: 1,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: "auto",
  },
  sizes: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  size: {
    width: 50,
    borderRadius: 25,
    aspectRatio: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  sizeText: {
    fontSize: 16,
    fontWeight: "500",
  },
});
