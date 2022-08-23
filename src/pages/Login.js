import styledComponents from "styled-components";

const Login = () => {
    return ( 
        <Wrapper>
            <img src={require('../images/Office-workers-organizing-data-storage.png')} alt="" />
            <h1 className="relative left-2 text-7xl font-bold">Github Users</h1>
            <button className="mt-12 text-lg text-white bg-emerald-600 hover:bg-emerald-500 px-4 py-2 transition">Login/Signup</button>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 100%;
    min-height: 100vh;
    display:flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    cursor: default;
    img{
        width: 30rem;
    }
`;
 
export default Login;