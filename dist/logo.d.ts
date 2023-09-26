export type Color = [number, number, number];
export type ColorWithAlpha = [number, number, number, number];
export type ColorsRGBA = ColorWithAlpha[];
export type StrokeLinecap = 'butt' | 'round' | 'square';
export declare const formatColorToCSSString: (color: ColorWithAlpha | string, alphaOverride?: number) => string;
export type GenerateLogoOptions = {
    colorPairs: ColorsRGBA[];
    colorCenter: ColorWithAlpha;
    innerPointRadius?: number;
    rings?: number;
    rotations?: number[];
    rotationOffsets?: number[];
    strokeLengths?: number[];
    ringStrokeWidth?: number;
    seed?: number;
    idPrefix?: string;
    logoClass?: string;
    gradientStops?: number[];
    strokeLinecap?: StrokeLinecap;
    showDesignRules?: boolean;
};
export declare const generateLogo: ({ colorPairs, colorCenter, innerPointRadius, rings, rotations, rotationOffsets, strokeLengths, ringStrokeWidth, idPrefix, logoClass, gradientStops, strokeLinecap, showDesignRules, }: GenerateLogoOptions) => SVGSVGElement;