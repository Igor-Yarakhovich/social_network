import React from 'react';
import styles from './News.module.css'
import mercedes from '../../assets/images/mercedes.jpeg'
import noutbook from '../../assets/images/noutbook.jpeg'
import crypto from '../../assets/images/crypto.jpeg'

export const News = () => {
    return (
        <>
            <div className={styles.news}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        This Mercedes SLR is looking for someone to drive it
                    </div>
                    <div className={styles.content}>
                        <div className={styles.photo}>
                            <img src={mercedes} alt=''/>
                        </div>
                        <div className={styles.text}>
                            The machine is sold in Fairfield (USA, Connecticut).
                            Mileage Mercedes SLR is only 3700 miles - obviously,
                            the car was bought for the purpose of subsequent earnings,
                            and not for the pleasure of driving. According to the documents,
                            the new car arrived in the US in the city of Torrance (California).
                            In 2018, the exclusive Mercedes changed hands and moved to Connecticut.
                            According to the Carfax report, the car is clean - no accidents, no pledge.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.news}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        Review and comparison of Logitech and Redragon speakers for computer
                    </div>
                    <div className={styles.content}>
                        <div className={styles.photo}>
                            <img src={noutbook} alt=''/>
                        </div>
                        <div className={styles.text}>
                            On the new test models Logitech Z120 and Redragon Orpheus.
                            Tiny 2.0 speakers with built-in amplifier. Both speakers are made of plastic,
                            both are miniature and have a nice appearance. One is squat and the other is slender.
                            Let's start with Logitech. Two colors and two textures.
                            White body with a black front panel, tactile material with a matte finish.
                            Glossy insert around the speakers.
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.news}>
                <div className={styles.item}>
                    <div className={styles.title}>
                        Hackers stole $320 million in cryptocurrency. They are offered a $10 million ransom.
                    </div>
                    <div className={styles.content}>
                        <div className={styles.photo}>
                            <img src={crypto} alt=''/>
                        </div>
                        <div className={styles.text}>
                            Hackers exploited a vulnerability in the smart contracts of the Wormhole bridge,
                            gaining access to 120,000 wrapped ethers (wEth).
                            A spokesperson for Wormhole confirmed the information that the "bridge" was
                            disabled due to a possible exploit. Information security experts from
                            Elliptic also reported an attempt by Wormhole to contact the hackers.
                            Wormhole apparently offered the hackers a ransom of $10 million for
                            the return of the withdrawn cryptocurrency, as well as information
                            about the vulnerability. The withdrawn funds were on the Solana and
                            Ethereum wallets (40 thousand and 80 thousand, respectively).
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}