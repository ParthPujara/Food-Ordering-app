import { Text, View } from "react-native";
import products from "@/assets/data/products";
import ProductListComponent from "../ProductListComponent";

export default function MenuScreen() {
  return (
    <View>
      {/* <Text>sd</Text> */}
      <ProductListComponent product={products[0]}/>
      <ProductListComponent product={products[1]}/>

    </View>
  );
}

