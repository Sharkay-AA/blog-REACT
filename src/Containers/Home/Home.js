import React from 'react';
import "./Home.css";
import Card from "../../Components/Card/Card";

function Home(props) {
    return (
        <>
            <h1 className='home-title'>Tous les articles</h1>
            <div className="container-cards">
                <Card>
                    <h2>Hello Card</h2>
                </Card>
                <Card>
                    <h2>Hello Card</h2>
                </Card>
                <Card>
                    <h2>Hello Card</h2>
                </Card>
                <Card>
                    <h2>Hello Card</h2>
                </Card>
            </div>
        </>
    );
}

export default Home;