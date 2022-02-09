import React from 'react';
import styles from './Settings.module.css'
import settings from '../../assets/images/settings.png'

export const Settings = () => {
    return (
        <div className={styles.settings}>
            <img src={settings} alt=''/>
        </div>
    )
}