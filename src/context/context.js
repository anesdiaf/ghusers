import React, { useContext, useState } from "react";
import { useEffect } from "react";
import followersMock from "./MockData/followersMock";
import reposMock from "./MockData/reposMock";
import userMock from "./MockData/userMock";

const rootUrl = 'https://api.github.com';
const rateLimit = 'https://api.github.com/rate_limit';

const GithubContext = React.createContext();

export const Githubprovider = ({children}) => {
    const [githubUser, setGithubUser] = useState(userMock);
    const [repos, setRepos] = useState(reposMock);
    const [followers, setFollowers] = useState(followersMock);
    const [requests, setRequests] = useState(0);
    const [loading, setLoading] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const checkRequests = () => {
        try{
            fetch(rateLimit).then(res => res.json()).then(data => setRequests(data.rate.remaining))
        } 
        catch(e){
            console.log(e);
        }
    }

    const getUserInfo = (user) => {
        setLoading(true);
        try{
            Promise.allSettled([
                fetch(rootUrl + "/users/" + user).then(res => res.json()).then(data => {return data}),
                fetch(rootUrl + "/users/" + user + "/followers").then(res => res.json()).then(data => {return data}),
                fetch(rootUrl + "/users/" + user + "/repos").then(res => res.json()).then(data => {return data}),
            ]).then(data => {
                setLoading(false)
                if(data[0].value.message === "Not Found"){
                    setFetchError("No user found with this username");
                    setTimeout(() => {
                        setFetchError(false)
                    }, 4000);
                }else{
                    setGithubUser(data[0].value);
                    setFollowers(data[1].value);
                    setRepos(data[2].value);
                }

            })
        } catch(e){
        }
    }
    
    useEffect(() => {
        checkRequests();
    }, [])

    return(
        <GithubContext.Provider value={{githubUser, repos, followers, requests, getUserInfo, fetchError, loading}}>
            {children}
        </GithubContext.Provider>
    )
}


export const useGHubContext = () => {
    return useContext(GithubContext);
}