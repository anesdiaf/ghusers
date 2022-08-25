import styledComponents from "styled-components";
import { useGHubContext } from "../context/context";
import { IoBusinessSharp, IoLocationSharp, IoLinkSharp } from 'react-icons/io5';

const Card = () => {
    const {githubUser} = useGHubContext();

    const { name, login, avatar_url, html_url, blog, location, company, bio } = githubUser;
    return ( 
        <Wrapper className="scroll-div">
            <div className="section-title"></div>
            <div className="user-intro z-50 h-[30%]">
                <div className="flex items-center gap-x-4">
                    <img className="hove:ring-[2px] ring-offset-2 ring-offset-white" src={avatar_url} alt={name} />
                    <div>
                        <p className="text-lg font-semibold">{name}</p>
                        <p className="text-[#919191]">@{login}</p>
                    </div>
                </div>
                <a href={html_url} target="_blank" rel="noopener noreferrer"><button>Follow</button></a>
            </div>
            <p className="text-justify mt-2 h-[30%]">{bio}</p>
            <div className="user-data h-[30%]">
                <div>
                    <IoBusinessSharp className="text-xl text-slate-700"/>
                    <p>{company || ""}</p>
                </div>
                <div>
                    <IoLocationSharp className="text-xl text-slate-700"/>
                    <p>{location || ""}</p>
                </div>
                <div>
                    <IoLinkSharp className="text-xl text-slate-700"/>
                    <a href={blog || ""} target='_blank' rel="noreferrer">{blog.slice(8)}</a>
                </div>
            </div>
        </Wrapper>
     );
}

const Wrapper = styledComponents.section`
    width: 100%;
    background-color: white;
    padding: 1rem;
    box-shadow: 0rem 0rem .4rem .1rem #f1f1f1;
    .user-intro{
        display:flex;
        align-items: center;
        justify-content: space-between
    }
    .user-intro img {
        width: 5rem;
        border-radius: 50%;
        object-fit: cover
    }
    .user-intro button{
        font-weight: 500;
        background: #10b981;
        color: white;
        border: 1px solid #10b981;
        padding: .3rem 1.4rem;
        border-radius: 2rem;
        transition: ease .2s
    }
    .user-intro button:hover{
        color: #10b981;
        background: transparent;
    }
    .section-title{
        position: absolute;
    }
    .user-data{
        display: flex;
        flex-direction: column;
        gap: .6rem 0;
        margin-top: 1.2rem
    }
    .user-data div {
        display:flex;
        align-items: center;
        gap: 0 .4rem
    }
    .user-data p {
        font-weight: 500
    }
    .user-data a {
        color: #10b981;
        font-weight: 500;
    }
    .user-data a:hover {
        text-decoration: underline;
    }
    .section-title::after{
        content:'USER';
        color: #a3a3a3;
        position: relative;
        bottom: 2.6rem;
        right: 1rem;
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
 
export default Card;