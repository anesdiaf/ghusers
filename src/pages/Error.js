import styled from "styled-components";
import { Link } from "react-router-dom";

const Error = () => {
    return ( 
        <Wrapper>
            <h1 className="text-7xl font-bold">404</h1>
            <h4 className="text-xl">Sorry, but This page doesn't exist.</h4>
            <Link to={'/'}><button className="bg-emerald-600 hover:bg-emerald-500 py-2 px-6 text-white text-lg transition">Go Home</button></Link>
        </Wrapper>
     );
}

const Wrapper = styled.section`
    width: 100%;
    min-height: 100vh;
    display:flex;
    flex-direction: column;
    gap: 1rem 0;
    justify-content: center;
    align-items: center;
`;
 
export default Error;