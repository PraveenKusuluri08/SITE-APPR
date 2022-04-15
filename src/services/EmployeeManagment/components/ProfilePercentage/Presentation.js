// import React from "react"
// import { Progress } from "reactstrap"
// // import { Pie, Doughnut } from "react-chartjs-2"
// // import Chart from "chart.js"

// export default function Presentation(props) {
//   const { percentageCount, totalFields, unFilledFields } = props
//   console.log(unFilledFields, totalFields)
//   var originalDoughnutDraw = Chart.controllers.doughnut.prototype.draw
//   Chart.helpers.extend(Chart.controllers.doughnut.prototype, {
//     draw: function () {
//       originalDoughnutDraw.apply(this, arguments)

//       var chart = this.chart.chart
//       var ctx = chart.ctx
//       var width = chart.width
//       var height = chart.height

//       var fontSize = (height / 114).toFixed(2)
//       ctx.font = fontSize + "em Verdana"
//       ctx.textBaseline = "middle"

//       var text = chart.config.data.text,
//         textX = Math.round((width - ctx.measureText(text).width) / 2),
//         textY = height / 2

//       ctx.fillText(text, textX, textY)
//     },
//   })

//   const data = {
//     datasets: [
//       {
//         data: [totalFields - unFilledFields, unFilledFields],
//         backgroundColor: ["rgba(255, 99, 132, 1)"],
//       },
//     ],

//     text:
//       (((totalFields - unFilledFields) / totalFields) * 100)
//         .toFixed(0)
//         .toString() + "%",
//   }

//   return (
//     <div className="rounded bg-white custom-shadow p-3">
//       <Doughnut
//         data={data}
//         options={{
//           legend: {
//             display: false,
//           },
//           responsive: true,
//           cutoutPercentage: 80,
//           tooltips: false,
//         }}
//       />
//       <br />
//       <div className="text-center h3">Profile filled</div>
//     </div>
//   )
// }
