import React from 'react';
import classes from './about.module.css';

const About = () => {
    return (
        <>
            <div className={classes.about}>
                <h2 className={classes.lead}>About us</h2>
                <div className={classes.container}>
                    <div className='flex flex-col-reverse md:flex justify-center items-center md:flex-row-reverse'>
                        <div className={classes.col}>
                            <h3 className={classes.head}>Who wer are</h3>
                            <p className={classes.paragraph}>
                                Tree planting companies face various challenges when
                                they undertake a project consisting of planting
                                trees in cities or urban areas. After all, cities
                                are very different from the natural environment of
                                trees. For instance, many city trees die prematurely
                                because their roots lack sufficient space to expand
                                and are unable to absorb the necessary quantities of
                                water to stay alive. Another challenge tree planting
                                companies have to face is that of root heave.
                                Without a proper system for root management in
                                place, tree roots will grow to the surface and
                                damage infrastructure such as pavement.
                            </p>
                        </div>
                        <div className={classes.col}>
                            <img
                                src='https://cmrc.netlify.app/static/media/agenda.4dbbdd5d.jpg'
                                alt='cover'
                                className={classes.image}
                            />
                        </div>
                    </div>

                    <div className='flex flex-col-reverse md:flex justify-center items-center md:flex-row-reverse'>
                        <div className={classes.col}>
                            <img
                                className={classes.image}
                                src='https://cmrc.netlify.app/static/media/about.8a872bf5.jpg'
                                alt='agenda'
                            />
                        </div>
                        <div className={classes.col}>
                            <h3
                                style={{ textAlign: 'right' }}
                                className={classes.head}>
                                What we provide
                            </h3>
                            <ul className={classes.list}>
                                <li className={classes.item}>
                                    rem minima veniam qui? Exercitationem odit sed
                                    tempore ullam.
                                </li>
                                <li className={classes.item}>
                                    repudiandae facilis alias velit, reprehenderit
                                    recusandae quibusdam. Atque, soluta odit nobis
                                    harum delectus similique a.
                                </li>
                                <li className={classes.item}>
                                    rem minima veniam qui? Exercitationem odit sed
                                    tempore ullam.
                                </li>
                                <li className={classes.item}>
                                    repudiandae facilis alias velit, reprehenderit
                                    recusandae quibusdam. Atque, soluta odit nobis
                                    harum delectus similique a.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About