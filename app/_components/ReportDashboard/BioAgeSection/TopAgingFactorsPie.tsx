import { PieChart, Pie, Cell } from 'recharts';
import { AGING_FACTORS_REPORT as data } from '@/app/_utils/staticData';

/**
 * Top Aging Factors Pie
 */
export default function TopAgingFactorsPie() {
  return (
    <>
      <PieChart width={150} height={150}>
        <Pie
          dataKey="value"
          data={data}
          labelLine={false}

          label={renderCustomizedLabel}
        >
          {data.map((entry, index) => (
            <Cell fill={entry.color} key={index} stroke="0" />
          ))}
        </Pie>
      </PieChart>
    </>
  );
}

const renderCustomizedLabel = ({ cx, cy, percent }:{cx:number; cy:number; percent:number}) => {
  return (
    <text fill="white" textAnchor="middle" dominantBaseline="central" x={cx} y={cy}>
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};
