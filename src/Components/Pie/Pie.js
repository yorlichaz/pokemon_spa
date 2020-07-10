import React from "react";
import { PieChart} from "react-minimal-pie-chart";

const Pie = ({ stats }) => {
  const colors= ["yellow","green","blue","red","orange","gray"]
  return (
    <PieChart
      label= {({dataEntry})=> dataEntry.value}
      labelPosition={110}
      labelStyle={{fontSize: "7px", fontWeight: "bold"}}
      style={{height: "50%", padding: "5px 0 5px 0"}} 
      lineWidth={20}
      paddingAngle={15}
      rounded={true}
      radius={40}
      data={Object.keys(stats).map((key, i) => {
        return {
          title: key,
          value: stats[key],
          color: colors[i],
          key: i,
        };
      })} 
    />
  );
};

export default Pie;
