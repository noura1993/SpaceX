import React from "react";
import loadingImg from "../assets/img/loading.gif";
import './Spin.css'

const Spin = () => {
    return (
    <div className="spin">
        <img src={loadingImg} alt='loading'></img>
    </div>
    );
}

export default Spin;