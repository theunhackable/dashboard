"use client";

import { ResponsivePie } from "@nivo/pie";


const data = [
  {
    "id": "customers Q1",
    "label": "customers Q1",
    "value": 2,
    "color": "#F1EFFC"
  },
  {
    "id": "customers Q2",
    "label": "customers Q2",
    "value": 4,
    "color": "#A78BFA"
  },
  {
    "id": "customers Q3",
    "label": "customers Q3",
    "value": 9,
    "color": "#7C3AED"
  }
]


const MyResponsivePie = () => (
    <ResponsivePie
    data={data}
    margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
    innerRadius={0.75}
    padAngle={0.7}
    cornerRadius={3}
    activeOuterRadiusOffset={8}
    borderWidth={1}
    borderColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                0.2
            ]
        ]
    }}
    enableArcLinkLabels={false}
    arcLinkLabelsSkipAngle={10}
    arcLinkLabelsTextColor="#333333"
    arcLinkLabelsThickness={2}
    arcLinkLabelsColor={{ from: 'color' }}
    enableArcLabels={false}
    arcLabelsSkipAngle={10}
    arcLabelsTextColor={{
        from: 'color',
        modifiers: [
            [
                'darker',
                2
            ]
        ]
    }}
    colors={[ '#F52C92', '#7C3AED', '#F1EFFC']}
    legends={[]}
/>
)

const PieChart = () => {
 
  return (
      <MyResponsivePie />
  );
};

export default PieChart;
