import { useEffect, useState } from 'react';
import { useGHubContext} from '../../context/context';
import { ArcElement, Chart, Legend, Title, Tooltip }  from "chart.js";
import { Pie } from 'react-chartjs-2';
import styledComponents from 'styled-components';
import { freqCounter } from '../../utils/helpers';

const PieChart = () => {
    const {repos} = useGHubContext();
    const [languages, setLanguages] = useState([]);
    const [langFreq, setLangsFreq] = useState([]);



    const data = {
        labels: languages,
        datasets: [{
          label: 'Top Languages',
          data: langFreq,
          backgroundColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255, 205, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(54, 162, 235, 1)',
          ],
        }],
      };
      const style = {
        
      }
      const options = {
        responsive: true,
        plugins: {
            title: {
                display: true,
                text: 'Top Languages',
                padding: {
                    top: 10,
                    bottom: 30
                }
            }
        }
      }
      Chart.register(ArcElement, Legend, Tooltip, Title);

    

      useEffect(() => {
        setLanguages(freqCounter(repos).langs)
        setLangsFreq(freqCounter(repos).freq)
    }, [repos])

    return ( 
        <Wrapper>
            <Pie style={style} options={options} data={data}/>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: .8rem;
    box-shadow: 0rem 0rem .4rem .1rem #f1f1f1;
`;
 
export default PieChart;