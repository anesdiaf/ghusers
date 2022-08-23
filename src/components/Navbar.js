import { useAuth0 } from "@auth0/auth0-react";
import { useState } from "react";
import { useEffect } from "react";
import {IoLogoGithub, IoMenu} from "react-icons/io5";


const Navbar = () => {
    const {loginWithRedirect, isAuthenticated, user, logout} = useAuth0();

    const [isUserBar, setIsUserBar] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            const nav = document.querySelector('nav');
            if(window.scrollY === 0){
                nav.style.backgroundColor = "rgba(24, 24, 24, 0.9)"
            } else{
                nav.style.backgroundColor = "rgba(24, 24, 24, 0.8)"
            }
        })
    })
    return ( 
        <nav className="sticky top-0 z-[999] px-[6%] md:px-[12%] flex justify-between items-center gap-x-6 text-lg py-3 bg-zinc-900 text-white backdrop-blur-sm shadow-md shadow-neutral-100/5">
            <div className="flex items-center gap-x-3">
                <IoLogoGithub className="text-4xl text-violet-600"/>
                <h3>Github Users</h3>
            </div>
            {isAuthenticated ? (
                <>

                <div className="hidden md:flex items-center gap-x-4">
                    <p>Welcome, <span className="">{user.nickname}</span></p> 
                    <button onClick={() => logout({ returnTo: window.location.origin})} className="bg-violet-600 hover:bg-violet-600/90 text-white px-4 py-1 rounded-md transition">Logout</button>
                </div>    
                <button className="block md:hidden" onClick={() => setIsUserBar(!isUserBar)}><IoMenu className="text-2xl"/></button>
                <div className={isUserBar ? "absolute top-[3.7rem] left-0 bg-zinc-900 w-full flex md:hidden justify-between items-center p-[4%] border-t border-white transition-transform" : "absolute top-[3.7rem] left-0 -translate-x-[100%] bg-zinc-900 w-full flex md:hidden justify-between items-center p-[4%] border-t border-white transition-transform"}>
                    <p>Welcome, <span className="">{user.nickname}</span></p> 
                    <button onClick={() => logout({ returnTo: window.location.origin})} className="bg-violet-600 hover:bg-violet-600/90 text-white px-4 py-1 rounded-md transition">Logout</button>
                </div>
                </>
            ): (
                <div>
                    <button onClick={() => loginWithRedirect()} className="bg-violet-600 hover:bg-violet-600/90 text-white px-4 py-1 rounded-md transition">Login</button>
                </div>
            )}

        </nav>
     );
}
 
export default Navbar;