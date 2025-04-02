import Navbar from "../Components/main/Navbar";
import Footer from "../Components/Footer";
function about(){
    return(
        <>
        <Navbar/>
        <header className="text-white justify-center text-center flex   flex-col bg-slate-400 w-auto h-80">
            <div className="text-5xl">About Coolguide</div>
            <div>Your trusted companion in navigating the complex world of electronics.</div>
        </header>
            </>
    )
}
export default about;