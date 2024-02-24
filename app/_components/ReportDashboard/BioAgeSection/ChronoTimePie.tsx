import { AgingRate, renderNeedleProps } from "@/types";
import { Pie, PieChart } from "recharts";

/**
 * ChronoTimePie Component
 *
 * Renders a gauge chart to represent aging rate visually. It includes a fixed needle indicating
 * the 'ChronoTime' and a dynamic needle that reflects the current aging rate.
 *
 * Props:
 * - agingRate (AgingRate)
 *
 * Child components:
 * - PieChart and Pie from recharts
 *
 * Usage:
 * <ChronoTimePie agingRate={yourAgingRateValue} />
 */
export default function ChronoTimePie({ agingRate }: AgingRate) {
  const cx = 145;
  const cy = 100;
  const iR = 97;
  const oR = 100;

  const pieData = [
    { type: "full", value: 100 },
  ];

  const renderNeedle = ({
    cx,
    cy,
    radius,
    angle,
    stroke = '#DE6430',
    strokeWidth = 5,
    label,
    fontSize = 13,
  }: renderNeedleProps) => {
    // Convert polar coordinates (angle, radius) to Cartesian coordinates (x, y)
    const x = cx + radius * Math.cos(-angle * Math.PI / 180);
    const y = cy + radius * Math.sin(-angle * Math.PI / 180);

    return (
      <>
        {label && (
          <text
            x={cx + radius * Math.cos(-90 * Math.PI / 180)} // Always place the label at the top center
            y={cy + radius * Math.sin(-90 * Math.PI / 180)}
            textAnchor="middle"
            fill="#7D2703"
            fontSize={fontSize}
          >
            {label}
          </text>
        )}
        <line
          x1={cx}
          y1={cy}
          x2={x}
          y2={y}
          stroke={stroke}
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={label ? "3 3" : ""}
        />
      </>
    );
  };

  // Calculate the angle for the dynamic aging needle
  const agingNeedleAngle = 180 - (agingRate / 200 * 180);

  return (
    <PieChart height={100} width={290} className="transform scale-95">
      <Pie
        dataKey="value"
        startAngle={180}
        endAngle={0}
        data={pieData}
        cy={cy}
        innerRadius={iR}
        fill="#DE6430"
        outerRadius={oR}
      />
      {renderNeedle({ cx, cy, radius: oR + 25, angle: agingNeedleAngle })}
      {renderNeedle({ cx, cy, radius: 110, angle: 90, label: "ChronoTime", stroke: '#DE6430', strokeWidth: 1 })}
    </PieChart>
  );
}