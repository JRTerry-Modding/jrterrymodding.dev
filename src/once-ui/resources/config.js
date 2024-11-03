const baseURL = "jrterrymodding.dev";

// default customization applied to the HTML in the main layout.tsx
const style = {
  theme: "dark", // dark | light
  neutral: "custom", // sand | gray | slate
  brand: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  accent: "custom", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
  solid: "color", // color | contrast
  solidStyle: "flat", // flat | plastic
  border: "playful", // rounded | playful | conservative
  surface: "translucent", // filled | translucent
  transition: "all", // all | micro | macro
  scaling: "90", // 90 | 95 | 100 | 105 | 110
};

// default metadata
const meta = {
  title: "JRTerry Modding - A self taught developer",
  description: "",
};

// default open graph data
const og = {
  title: "JRTerry Modding",
  description: "A self taught developer",
  type: "website",
};

// default schema data
const schema = {
  logo: "",
  type: "Organization",
  name: "JRTerry Modding",
  description: "A Solo Developer, 100% Self-Taught",
  email: "josh@jrterrymodding.dev",
};

// social links
const social = {
  twitter: "",
  linkedin: "",
  discord: "",
};

export { baseURL, style, meta, og, schema, social };
