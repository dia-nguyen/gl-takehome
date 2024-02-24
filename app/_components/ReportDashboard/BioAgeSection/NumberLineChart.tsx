import { AgeProps } from "@/types";
import { ScatterChart, XAxis, ResponsiveContainer } from 'recharts';

/**
 * NumberLineChart Component
 *
 * Renders a numberline chart that visually represents the chronological and biological ages on a number line.
 *
 * Props:
 * - ages (AgeProps): An object containing `chronoAge` and `bioAge` properties
 *
 * Usage:
 * <NumberLineChart ages={{ chronoAge: 40, bioAge: 45 }} />
 */
export default function NumberLineChart({ ages }: AgeProps) {
  const { chronoAge, bioAge } = ages;
  // Find the maximum difference from the chronoAge to set the domain symmetrically
  const maxDifference = Math.max(Math.abs(chronoAge - bioAge), Math.abs(bioAge - chronoAge));

  const CustomTick = (props: any) => {
    const { x, y, payload, chrono } = props;
    const isChronoAge = payload.value === chrono;

    // custom configuration for tick and labels
    const tickLength = isChronoAge ? 10 : 25;
    const labelSize = isChronoAge ? 12 : 14;
    const valueSize = isChronoAge ? 14 : 22;
    const valueOffset = isChronoAge ? 20 : 22;
    const labelWeight = isChronoAge ? "" : "bold";

    return (
      <g transform={`translate(${x},${y})`}>
        <text
          x={0}
          y={-tickLength - 20} // offset text
          dy={16}
          textAnchor="middle"
          fill="#7D2703"
          fontSize={labelSize}
          fontWeight={labelWeight}
        >
          {isChronoAge ? "Chrono Age" : "Bio Age"}
        </text>
        <line x1={0} y1={0} x2={0} y2={-tickLength} stroke="#DE6430" strokeWidth={1} style={{ position: "absolute" }} />
        <text
          x={0}
          y={0}
          dy={valueOffset}
          textAnchor="middle"
          fill="#FFF"
          fontSize={valueSize}
        >
          {payload.value}
        </text>
      </g>
    );
  };

  return (
    <ResponsiveContainer width="100%" height={25}>
      <ScatterChart>
        <XAxis
          type="number"
          fill="#FFF"
          dataKey="age"
          ticks={[chronoAge, bioAge]}
          axisLine={false}
          domain={[chronoAge - maxDifference - 5, chronoAge + maxDifference + 5]} // add buffer for range
          tickLine={false}
          tick={<CustomTick chrono={chronoAge} bio={chronoAge} />} // Use the customized tick
        >
        </XAxis>
      </ScatterChart>
    </ResponsiveContainer>
  );
}
// disable error about default props
const error = console.error;
console.error = (...args: any) => {
  if (/defaultProps/.test(args[0])) return;
  error(...args);
};