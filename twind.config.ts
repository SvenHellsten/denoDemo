import { Options } from "$fresh/plugins/twind.ts";
import * as colors from "twind/colors";

export default {
  selfURL: import.meta.url,
  theme: {
    colors: {
      blue: colors.blue,
      black: colors.black,
      gray: colors.gray,
      green: colors.green,
      white: colors.white,
      yellow: colors.yellow,
      nlGreen: "#3BB5A3",
      nlPurple: " #7573B6",
      nlCoral: "#FF7979",
      transparent: "transparent",
    },
    extend: {
      backgroundImage: {
        'flying-deno': "url('./static/gallery/cuteDeno.png')",
      },
    }
    
  },
} as Options;
