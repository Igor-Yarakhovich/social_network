import preloader from "../../../assets/images/preloader.gif";
import React from "react";
import styles from './Preloader.module.css'

export const Preloader = ()=>{
    return <div className={styles.preloader}>
        <img alt='' src={preloader}/>
    </div>
}