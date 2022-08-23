import styledComponents from "styled-components";
import Card from "./Card";
import Followers from "./Followers";

const User = () => {
    return ( 
        <Wrapper>
            <Card/>
            <Followers/>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 70%;
    margin: 3.4rem auto;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 20rem;
    gap: 1rem;

    @media only screen and (max-width: 1200px){
        width: 90%;
    }
    @media only screen and (max-width: 950px){
        width: 90%;
        grid-template-columns: 100%;
        grid-template-rows: 20rem;
        gap: 2.6rem;
    }
`;
 
export default User;