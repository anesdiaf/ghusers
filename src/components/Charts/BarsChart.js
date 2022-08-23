import { ArcElement, BarElement, CategoryScale, Chart, Legend, LinearScale, Title, Tooltip } from "chart.js";
import { useEffect } from "react";
import { useState } from "react";
import { Bar } from "react-chartjs-2";
import styledComponents from "styled-components";
import { useGHubContext } from "../../context/context";

const BarsChart = () => {
    const {repos} = useGHubContext();
    
    const [watchers, setWatchers] = useState(repos.sort((a, b) => {
        return  b.watchers - a.watchers;
    }).slice(0, 5).map(item => {return item.watchers}));
    const [labels, setLabels] = useState(repos.sort((a, b) => {
        return  b.watchers - a.watchers;
    }).slice(0, 5).map(item => {return item.name}));

    const data = {
      labels: labels,
      datasets: [{
          data: watchers,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
          ],
      }]
    };
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            title: {
                display: true,
                text: 'Most popular Repos',
                padding: {
                    top: 10,
                    bottom: 30
                }
            },
        },
    }
    Chart.register(ArcElement, Legend, Tooltip, Title, CategoryScale, LinearScale, BarElement);
    
    useEffect(() => {
        setLabels(repos.sort((a, b) => {
            return  b.watchers - a.watchers;
        }).slice(0, 5).map(item => {return item.name}));
        setWatchers(repos.sort((a, b) => {
            return  b.watchers - a.watchers;
        }).slice(0, 5).map(item => {return item.watchers}));
    }, [repos])
    return ( 
        <Wrapper>
            <Bar options={options} data={data} />
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 100%;
    height: 20rem;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: .8rem;
    box-shadow: 0rem 0rem .4rem .1rem #f1f1f1;
    @media only screen and (max-width: 950px){
        height: 24rem;
    }

`; 


export default BarsChart;