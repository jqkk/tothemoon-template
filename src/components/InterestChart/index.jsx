import React, { useEffect } from 'react';
import * as am5 from '@amcharts/amcharts5';
import * as am5xy from '@amcharts/amcharts5/xy';
import am5themesAnimated from '@amcharts/amcharts5/themes/Animated';

function InterestChart({ datasets }) {
  useEffect(() => {
    const root = am5.Root.new('chartdiv');

    root.setThemes([am5themesAnimated.new(root)]);

    const chart = root.container.children.push(
      am5xy.XYChart.new(root, {
        panX: true,
        panY: true,
        wheelX: 'panX',
        wheelY: 'zoomX',
        pinchZoomX: true,
      }),
    );
    const cursor = chart.set(
      'cursor',
      am5xy.XYCursor.new(root, {
        behavior: 'none',
      }),
    );
    cursor.lineY.set('visible', false);

    const xAxis = chart.xAxes.push(
      am5xy.DateAxis.new(root, {
        maxDeviation: 0.2,
        baseInterval: {
          timeUnit: 'day',
          count: 1,
        },
        renderer: am5xy.AxisRendererX.new(root, {}),
        tooltip: am5.Tooltip.new(root, {}),
      }),
    );

    const yAxis = chart.yAxes.push(
      am5xy.ValueAxis.new(root, {
        renderer: am5xy.AxisRendererY.new(root, {}),
      }),
    );

    const series = chart.series.push(
      am5xy.LineSeries.new(root, {
        name: 'Series',
        xAxis,
        yAxis,
        valueYField: 'value',
        valueXField: 'date',
        tooltip: am5.Tooltip.new(root, {
          labelText: '댓글 수 : {valueY}',
        }),
      }),
    );

    chart.set(
      'scrollbarX',
      am5.Scrollbar.new(root, {
        orientation: 'horizontal',
      }),
    );

    (function setData() {
      const data = datasets.map((cur) => {
        const date = new Date(cur.commentDate);
        date.setHours(0, 0, 0, 0);
        am5.time.add(date, 'day', 0);
        return { date: date.getTime(), value: cur.commentCount };
      });
      series.data.setAll(data);
      series.appear(1000);
      chart.appear(1000, 100);
    })();

    return () => {
      root.dispose();
    };
  });
  return <div id="chartdiv" style={{ width: '80%', height: '700px' }} />;
}

export default InterestChart;
