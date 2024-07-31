import magmaCsv from "./magma.csv?raw";
import plasmaCsv from "./plasma.csv?raw";
import turboCsv from "./turbo.csv?raw";
import viridisCsv from "./viridis.csv?raw";

type ColorMapVariant = "magma" | "viridis" | "plasma" | "turbo";
export type Color = [r: number, g: number, b: number];

const parseColorCsv = (csv: string) => {
  return csv
    .split("\n")
    .slice(1)
    .map((l) => l.trim())
    .filter((v) => !!v)
    .map((line) => {
      const rgb = line.split(/,\s*/);
      const [r, g, b] = rgb.map((v) => parseFloat(v));
      const ret: [number, number, number] = [r, g, b];
      return ret;
    });
};

const colorMaps = new Map<ColorMapVariant, Color[]>([
  ["magma", parseColorCsv(magmaCsv)],
  ["viridis", parseColorCsv(viridisCsv)],
  ["plasma", parseColorCsv(plasmaCsv)],
  ["turbo", parseColorCsv(turboCsv)],
]);

export class ColorMap {
  private readonly mapping: Color[];

  constructor(variant: ColorMapVariant, invert?: boolean) {
    const mapping = colorMaps.get(variant);
    if (!mapping) {
      throw new Error(`Unrecognized mapping "${variant}"`);
    }

    this.mapping = [...mapping];
    if (invert) {
      this.mapping.reverse();
    }
  }

  color(value: number, min: number, max: number) {
    const uint8Value = clamp(mapLinear(value, min, max, 0, 255), 0, 255);
    const floored = Math.floor(uint8Value);
    const ceiled = Math.ceil(uint8Value);
    if (floored === ceiled) {
      // exactly a match
      return toCssRgb(this.mapping[floored]);
    }

    // interpolate between floor and ceil
    const from = this.mapping[floored];
    const to = this.mapping[ceiled];
    return toCssRgb(
      lerpColors(from, to, mapLinear(uint8Value, floored, ceiled, 0, 1)),
    );
  }
}

function toCssRgb(c: Color): string {
  const [r, g, b] = c.map((v) => v * 255);
  return `rgb(${r}, ${g}, ${b})`;
}

function clamp(value: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, value));
}

// Linear mapping from range <a1, a2> to range <b1, b2>
function mapLinear(
  x: number,
  a1: number,
  a2: number,
  b1: number,
  b2: number,
): number {
  return b1 + ((x - a1) * (b2 - b1)) / (a2 - a1);
}

function lerpColors(color1: Color, color2: Color, alpha: number): Color {
  return [
    color1[0] + (color2[0] - color1[0]) * alpha,
    color1[1] + (color2[1] - color1[1]) * alpha,
    color1[2] + (color2[2] - color1[2]) * alpha,
  ];
}
