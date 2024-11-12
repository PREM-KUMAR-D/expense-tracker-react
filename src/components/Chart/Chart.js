import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";


const Chart =(props)=>{

    const expensesOnly = props.chartExpenses.map((monthExpenseData)=>{
        return monthExpenseData.price;
    })
    const maxValue = Math.max(...expensesOnly);
    const chartData = [
        {expenseMonth:'Jan',expenseVal:0},
        {expenseMonth:'Feb',expenseVal:0},
        {expenseMonth:'Mar',expenseVal:0},
        {expenseMonth:'Apr',expenseVal:0},
        {expenseMonth:'May',expenseVal:0},
        {expenseMonth:'Jun',expenseVal:0},
        {expenseMonth:'Jul',expenseVal:0},
        {expenseMonth:'Aug',expenseVal:0},
        {expenseMonth:'Sep',expenseVal:0},
        {expenseMonth:'Oct',expenseVal:0},
        {expenseMonth:'Nov',expenseVal:0},
        {expenseMonth:'Dec',expenseVal:0},
    ]


    // console.log("ChartData" + JSON.stringify(chartData) + " \n expensesOnly " + expensesOnly);
    

    for(let expense of props.chartExpenses){
        chartData[expense.date.getMonth()].expenseVal += expense.price;
    }

    // console.log("ChartData" + JSON.stringify(chartData) + " \n expensesOnly " + expensesOnly);

    return <div className="chart">
        {
            chartData.map((monthData)=>{
                return <ChartBar 
                    key={monthData.expenseMonth} 
                    label={monthData.expenseMonth} 
                    value={monthData.expenseVal}  
                    maxValue={maxValue}
                />
            })
        }
    </div>

}

export default Chart;