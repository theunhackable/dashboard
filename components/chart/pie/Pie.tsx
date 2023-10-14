import { ResponsivePie } from '@nivo/pie'

const data = [
  {
    "id": "c",
    "label": "c",
    "value": 553,
    "color": "hsl(211, 70%, 50%)"
  },
  {
    "id": "python",
    "label": "python",
    "value": 424,
    "color": "hsl(75, 70%, 50%)"
  },
  {
    "id": "lisp",
    "label": "lisp",
    "value": 212,
    "color": "hsl(226, 70%, 50%)"
  },
  {
    "id": "elixir",
    "label": "elixir",
    "value": 444,
    "color": "hsl(342, 70%, 50%)"
  },
  {
    "id": "hack",
    "label": "hack",
    "value": 320,
    "color": "hsl(138, 70%, 50%)"
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
    defs={[
        {
            id: 'dots',
            type: 'patternDots',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            size: 4,
            padding: 1,
            stagger: true
        },
        {
            id: 'lines',
            type: 'patternLines',
            background: 'inherit',
            color: 'rgba(255, 255, 255, 0.3)',
            rotation: -45,
            lineWidth: 6,
            spacing: 10
        }
    ]}
    fill={[
        {
            match: {
                id: 'ruby'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'c'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'go'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'python'
            },
            id: 'dots'
        },
        {
            match: {
                id: 'scala'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'lisp'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'elixir'
            },
            id: 'lines'
        },
        {
            match: {
                id: 'javascript'
            },
            id: 'lines'
        }
    ]}
    legends={[]}
/>
)

export default MyResponsivePie