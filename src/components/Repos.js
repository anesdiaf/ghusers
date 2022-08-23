import styledComponents from "styled-components";
import { PieChart, BarsChart } from "./Charts";

const Repos = () => {

    return ( 
        <Wrapper>
            <div className="repos-upper">
                <PieChart/>
                <BarsChart/>
            </div>
        </Wrapper>
     );
}
const Wrapper = styledComponents.section`
    width: 70%;
    margin: 0 auto;
    .repos-upper{
        display: grid;
        grid-template-columns: 40% 58%;
        gap: 1rem
    }
    @media only screen and (max-width: 1200px){
        width: 90%;
        .repos-upper{
            display: grid;
            grid-template-columns: 40% 58%;
            gap: 1rem
        }
    }
    @media only screen and (max-width: 750px){
        width: 90%;
        .repos-upper{
            display: grid;
            grid-template-columns: 100%;
            grid-template-rows: 20rem;
            justify-content: center;
            gap: 1rem 0;
        }
    }
`;
 
export default Repos;