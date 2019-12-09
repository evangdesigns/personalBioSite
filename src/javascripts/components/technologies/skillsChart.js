// Import modules
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';

const chartPrinter = () => {
  // Create chart instance
  const chart = am4core.create('skillsChart', am4charts.XYChart);

  // Add data
  chart.data = [{
    skill: 'HTML',
    proficiency: 9.5,
  }, {
    skill: 'CSS',
    proficiency: 9.5,
  }, {
    skill: 'ES6',
    proficiency: 7,
  }, {
    skill: 'Github',
    proficiency: 5,
  }, {
    skill: 'Photoshop',
    proficiency: 8.5,
  }, {
    skill: 'Illustraitor',
    proficiency: 9,
  }, {
    skill: 'Word',
    proficiency: 10,
  }, {
    skill: 'Excel',
    proficiency: 9,
  }, {
    skill: 'Powerpoint',
    proficiency: 10,
  }];

  // Create axes
  const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
  categoryAxis.dataFields.category = 'skill';
  categoryAxis.title.text = 'Skill';

  const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
  valueAxis.title.text = 'Proficiency';

  // Create series
  const series = chart.series.push(new am4charts.ColumnSeries());
  series.dataFields.valueY = 'proficiency';
  series.dataFields.categoryX = 'skill';
  series.name = 'Skill Level';
  series.columns.template.tooltipText = 'Series: {name}\nCategory: {categoryX}\nValue: {valueY}';
  series.columns.template.fill = am4core.color('#104547'); // fill
};

export default { chartPrinter };
