import '../home/Home.css';
import Footer from "../footer/Footer";
import Header from "../header/Header";
import Tours from "../tours/Tours";

import data from '../../data/db.json';

function Home() {
    return (
        <>
            <Header className = 'start' />
            <Tours className = 'start' data={data} />
            <Footer className = 'start' />


        </>
    );
}

export default Home;