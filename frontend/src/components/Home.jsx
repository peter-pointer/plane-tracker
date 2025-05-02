import React from "react";
import MapView from "../components/Mapview.jsx";

export default function Home() {

    return (
        <div className="container m-0">
            {/* <div className="card" style={{width: "18rem"}}>
                <img src="https://media.cnn.com/api/v1/images/stellar/prod/160713112506-cool-new-planes-farnborough-boeing-787-9-dreamliner.jpg?q=w_1900,h_1096,x_0,y_0,c_fill" className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">Card title</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
            </div> */}
            <MapView/>
        </div>
    )
}