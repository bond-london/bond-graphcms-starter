const colourTable = {
  Black: ["text-black", "bg-black"],
  Grey: ["text-grey", "bg-grey"],
  White: ["text-white", "bg-white"],
  Green: ["text-green", "bg-green"],
  Blue: ["text-blue", "bg-blue"],
  Red: ["text-red", "bg-red"],
  Error: ["text-red", "bg-red"],
};

export type ColourName = keyof typeof colourTable;
export function lookupColourClassName(
  colourName: ColourName | undefined,
  type: "text" | "bg"
): string | undefined {
  if (colourName) {
    const entry = colourTable[colourName];
    switch (type) {
      case "bg":
        return entry[1];
      default:
        return entry[0];
    }
  }
}
