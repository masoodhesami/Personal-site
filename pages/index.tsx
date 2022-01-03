import type {NextPage} from 'next'
import Header from "../components/header/header";
import Main from "../components/main/main";
import About from "../components/about/about";

const Home: NextPage = () => {
    return (
        <>
            <Header/>
            <Main/>
            <About/>
        </>
    )
}

export default Home
