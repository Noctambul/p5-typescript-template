import { getRandomInt } from "./utils";

export const namedColorPalettes = {
  primary1: ["#EC048C", "#54175D"],
  primary2: ["#161F33", "#FE5CBA"],
  primary3: ["#DC0193", "#5AF0FB"],
  primary4: ["#FEE2A1", "#EB0057"],
  primary5: ["#e63946", "#81b29a", "#ee9b00"], // Rouge à la cool - Vert smooth - Moutarde
  primary6: ["#D7821F", "#EBB622"], // Carbon & Silicium, Orange building - Yellow sky
  doorTriptych: [
    "#ee9b00", // - Moutarde
    "#e63946", // - Rouge à la cool
    "#81b29a", // - Green smooth
  ],
  carbonSilicium: [
    "#EBB622", // - Yellow sky - #E8AB1C
    "#D7821F", // - Orange building
  ],
  dune: [
    "#FEDD25", // - Yellow moon
    "#EF5136", // - Light sky orange
    "#7C112F", // - Sand dark red
  ],
  duneNight: [
    "#F15F52", // - Orange
    "#224257", // - Dark blue
    "#58AED9", // - Light blue
  ],
  incal: [
    "#EDC733", // - Yellow cover
    "#E4EFEE", // - White bird
    "#5E516B", // - Blue pant
    "#BF3F2D", // - Red shirt
    "#D85224", // - Orange shoes
  ],
  incalJohnDifool: [
    "#A4D7CE", // - Green stone
    "#8BD9FF", // - Blue
    "#CFC6DF", // - Light purple
    "#FFFF8F", // - Light yellow
    "#FB944B", // - Orange
  ],
};

/** Pick a random color and remove it from the array */
export function getRandomColor(colorPalettes: Array<string>): string {
  if (colorPalettes.length <= 0) {
    throw "Color palette is empty.";
  }
  const index = getRandomInt(0, colorPalettes.length - 1);
  const color = colorPalettes.splice(index, 1);
  return color[0];
}

export default Object.values(namedColorPalettes);
