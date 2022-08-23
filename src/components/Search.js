import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { IoSearch } from "react-icons/io5";
import styledComponents from "styled-components";
import { useGHubContext } from "../context/context";

const Search = () => {
    const {isAuthenticated} = useAuth0();
    const [user, setUser] = useState('');
    const [error, setError] = useState(false);

    const {requests, getUserInfo, fetchError} = useGHubContext();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(isAuthenticated === false){
            setError('You must be logged in to use this app');
            setTimeout(() => {
                setError(false);
            }, 4000)
        }else if(user === ''){
            setError('You must type a valid username');
            setTimeout(() => {
                setError(false);
            }, 4000)
        } else if (requests === 0) {
            setError("You've reached your daily requests limit try again tomorrow");
            setTimeout(() => {
                setError(false);
            }, 4000)
        }else {
            getUserInfo(user);
        }

    }

    return (
        <Wrapper>
            {error && <p className="error-modal">{error}</p>}
            {fetchError && <p className="error-modal">{fetchError}</p>}
            
            <div className="functional-section">
                <form onSubmit={handleSubmit}>
                    <IoSearch className="relative left-2 text-xl text-neutral-700"/>
                    <input type="text" placeholder="Search here" value={user} onChange={(e) => setUser(e.target.value)} />
                    <button type="submit">Search</button>
                </form>
                <div className="requests">
                    Requests: {requests} of 60
                </div>
            </div>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 70%;
    margin: 2rem auto;
    .functional-section{
        display: flex;
        align-items: center;
    }   
    .error-modal{
        background-color: rgba(239, 68, 68, 0.9);
        color: #fff;
        padding: .4rem 1rem;
        border-radius: 8px;
        position: fixed;
        bottom: 12px;
        right: 12px;
        backdrop-filter: blur(1px);
    }
    form{
        width: 70%;
        background-color: white;
        display: flex;
        align-items: center;
        border-radius: .6rem .2rem;
        box-shadow: 0rem 0rem .4rem .1rem #f1f1f1;
    }
    form input{
        width: 100%;
        outline: none;
        padding: .4rem 1rem;
    }
    form button{
        background-color: #10b981;
        padding: .4rem .8rem;
        color: white;
        border-radius: .6rem .2rem;
        transition: ease .2s;
    }
    form button:hover{
        background-color: #37a883;
    }
    .requests{
        width: 30%;
        display: flex;
        justify-content: center;
        font-size: 1.2rem;
    }
    @media only screen and (max-width: 1000px){
        width: 90%;
    }
    @media only screen and (max-width: 800px){
        width: 90%;

        .functional-section{
            flex-direction: column;
        }
        form{
            width:100%
        }
        .requests{
            width: 100%;
            margin-top: 1rem;
        }
    }
`;


export default Search;