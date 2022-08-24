import styledComponents from "styled-components";
import {useGHubContext} from '../context/context';


const Followers = () => {
    const { followers } = useGHubContext();


    return ( 
        <Wrapper>
           <div className="section-title"></div>
           <div className="scroll-div h-[100%] overflow-x-clip overflow-y-scroll p-4">
           <div className="followers">
               {followers.map((item, index) => {
                const { avatar_url, html_url, login, id} = item;
                   return(
                       <div className="follower" key={id}>
                            <img src={avatar_url} alt={login} />
                            <div>
                                <p className="font-medium">{login}</p>
                                <a href={html_url}>{html_url}</a>
                            </div>
                       </div>
                   )
               })}
           </div>
           </div>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 100%;
    max-height: 20rem;
    background-color: white;
    box-shadow: 0rem 0rem .4rem .1rem #f1f1f1;
    .followers{
        display: flex;
        flex-direction: column;
        gap: .4rem 0;
        overflow: hidden;
        word-wrap: break-word;
        overflow-wrap: break-word;
    }
    .follower{
        display: flex;
        align-items: center;
        gap: 0 1rem;
        background-color: #f1f1f1;
        padding: 0.4rem;
        border-radius: 0.4rem;
        transition: ease .2s
    }
    .follower:hover{
        box-shadow: 2px 2px 8px -4px #a3a3a3
    }
    .follower img {
        width: 4rem;
        height: 4rem;
        object-fit: cover;
        border-radius: 50%
    }
    .follower a{
        color: #919191;
        transition: ease .2s
    }
    .follower a:hover{
        color: #10b981;
        text-decoration: underline;
    }
    .section-title{
        position: absolute
    }
    .section-title::after{
        content:'FOLLOWERS';
        color: #a3a3a3;
        position: relative;
        bottom: 1.6rem;
        background-color: white;
        padding: .2rem 1rem;
        font-weight: 500;
        box-shadow: 0px -3px 10px -4px rgba(51,51,51,0.1);
        -webkit-box-shadow: 0px -3px 10px -4px rgba(51,51,51,0.1);
        -moz-box-shadow: 0px -3px 10px -4px rgba(51,51,51,0.1);
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`;
 
export default Followers;