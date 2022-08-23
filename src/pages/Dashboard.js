import { Info, Navbar, Repos, Search, Spinner, User } from "../components";
import { useGHubContext } from "../context/context";

const Dashboard = () => {
    const {loading} = useGHubContext();
    return ( 
        <div>
            <Navbar/>
            <Search/>
            {loading ? (
                <div className="flex justify-center mt-44">
                    <Spinner/>
                </div>
            ) : (
                <>
                <Info/>
                <User/>
                <Repos/>
                </>
            )}

        </div>
     );
}
 
export default Dashboard;