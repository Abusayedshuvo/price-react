import { LineChart, Line, XAxis, YAxis } from "recharts";

const NewLineChart = () => {
  const studentMathMarks = [
    { name: "Student 1", mathMark: 85 },
    { name: "Student 2", mathMark: 92 },
    { name: "Student 3", mathMark: 78 },
    { name: "Student 4", mathMark: 88 },
    { name: "Student 5", mathMark: 95 },
    { name: "Student 6", mathMark: 79 },
    { name: "Student 7", mathMark: 87 },
    { name: "Student 8", mathMark: 91 },
    { name: "Student 9", mathMark: 96 },
    { name: "Student 10", mathMark: 83 },
  ];

  return (
    <div className="container mx-auto">
      <p className="text-2xl">Line Chart</p>

      {/* <LineChart width={600} height={400} data={studentMathMarks}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="mathMark"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
      </LineChart> */}

      <LineChart width={600} height={500} data={studentMathMarks}>
        <XAxis dataKey="name"></XAxis>
        <YAxis></YAxis>
        <Line type="monotone" dataKey="mathMark" stroke="#8884d8"></Line>
      </LineChart>
    </div>
  );
};

export default NewLineChart;
