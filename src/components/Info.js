import styledComponents from "styled-components";
import { useGHubContext } from "../context/context";
import { IoFolderOpen, IoPeople, IoCode  } from 'react-icons/io5';

const Info = () => {
    const {githubUser} = useGHubContext();

    const {public_repos, public_gists, followers, following} = githubUser;
    return ( 
        <Wrapper>
            <div className="info-item">
                <button className="bg-blue-100 text-blue-500 text-3xl p-3 rounded-lg"><IoFolderOpen/></button>
                <div className="info-data">
                    <p className="numbers">{public_repos}</p>
                    <p>Repos</p>
                </div>
            </div>
            <div className="info-item">
                <button className="bg-emerald-100 text-emerald-500 text-3xl p-3 rounded-lg"><IoPeople/></button>
                <div className="info-data">
                    <p className="numbers">{followers}</p>
                    <p>Followers</p>
                </div>
            </div>
            <div className="info-item">
                <button className="bg-purple-100 text-purple-500 text-3xl p-3 rounded-lg"><IoPeople/></button>
                <div className="info-data">
                    <p className="numbers">{following}</p>
                    <p>Following</p>
                </div>
            </div>
            <div className="info-item">
                <button className="bg-amber-100 text-amber-500 text-3xl p-3 rounded-lg"><IoCode/></button>
                <div className="info-data">
                    <p className="numbers">{public_gists}</p>
                    <p>Gists</p>
                </div>
            </div>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 70%;
    margin: 1rem auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 1fr;
    gap: 1rem;
    @media only screen and (max-width: 1200px){
        width: 90%;
    }
    @media only screen and (max-width: 1000px){
        grid-template-columns: repeat(2, 1fr);
        grid-template-rows: 1fr 1fr;
    }
    @media only screen and (max-width: 600px){
        width: 90%;
        grid-template-columns: 1fr;
    }
    .info-item{
        padding: .4rem 1rem;
        display: flex;
        flex-direction: row;
        gap: 0 1.4rem;
        align-items: center;
        background-color: white;
        border-radius: .4rem;
        break-inside: avoid;
        box-shadow: 0rem 0rem .8rem .1rem #f1f1f1;
        cursor: default
    }
    button{
        cursor: default
    }
    .info-data{
        display:flex;
        flex-direction: column;
    }
    .info-data > p.numbers {
        color: #272f35;
        font-size: 1.4rem;
    }
    .info-data > p{
        color: #a3a3a3;
        font-size: 1.1rem;
        font-weight: 500
    }

`;
 
export default Info;