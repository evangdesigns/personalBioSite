// import * as am4core from '@amcharts/amcharts4/core';
// import * as am4charts from '@amcharts/amcharts4/charts';
import './tech.scss';
import utl from '../../helpers/utilities';

const printTech = () => {
  const domString = `
  <h2>Technology & Skills</h2>
      <ul>
        <li>Adobe CC/Photoshop/Illustrator/InDesign</li>
        <li>Microsoft Office/Word, Excel, Power Point</li>
        <li>Multimedia/Web/GUI Design</li>
        <li>Event Coordination, Planning & Execution</li>
        <li>Social Media Management</li>
        <li>Web Design HTML/CSS/Javascript</li>
        <li>PC/Mac Proficiency</li>
        <li>Photography & Photo Editing</li>
        <li>Proofreading/Editing Design</li>
        <li>Business Communication</li>
        <li>Marketing Analytics</li>
        <li>Copyrighting</li>
      </ul>`;
  utl.printToDom('tech', domString);
};

// // Create chart instance
// const chart = am4core.create('skillsChart', am4charts.XYChart);

// // Add data
// chart.data = [{
//   country: 'Lithuania',
//   litres: 501.9,
//   units: 250,
// }, {
//   country: 'Czech Republic',
//   litres: 301.9,
//   units: 222,
// }, {
//   country: 'Ireland',
//   litres: 201.1,
//   units: 170,
// }, {
//   country: 'Germany',
//   litres: 165.8,
//   units: 122,
// }, {
//   country: 'Australia',
//   litres: 139.9,
//   units: 99,
// }, {
//   country: 'Austria',
//   litres: 128.3,
//   units: 85,
// }, {
//   country: 'UK',
//   litres: 99,
//   units: 93,
// }, {
//   country: 'Belgium',
//   litres: 60,
//   units: 50,
// }, {
//   country: 'The Netherlands',
//   litres: 50,
//   units: 42,
// }];

// // Create axes
// const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
// categoryAxis.dataFields.category = 'country';
// categoryAxis.title.text = 'Countries';

// const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
// valueAxis.title.text = 'Litres sold (M)';

// // Create series
// const series = chart.series.push(new am4charts.ColumnSeries());
// series.dataFields.valueY = 'litres';
// series.dataFields.categoryX = 'country';
// series.name = 'Sales';
// series.columns.template.tooltipText = 'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
// series.columns.template.fill = am4core.color('#104547'); // fill

// const series2 = chart.series.push(new am4charts.LineSeries());
// series2.name = 'Units';
// series2.stroke = am4core.color('#CDA2AB');
// series2.strokeWidth = 3;
// series2.dataFields.valueY = 'units';
// series2.dataFields.categoryX = 'country';

export default { printTech };
