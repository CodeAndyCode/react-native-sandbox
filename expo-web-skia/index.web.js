// Notice the import path `@shopify/react-native-skia/lib/module/web`
// This is important only to pull the code responsible for loading Skia.
// @ts-expect-error
import { LoadSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
import registerRootComponent from "expo/build/launch/registerRootComponent";

LoadSkiaWeb().then(async () => {
  const App = (await import("./App")).default;
  registerRootComponent(App);
});
