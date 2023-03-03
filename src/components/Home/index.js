import { useState } from 'react'
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Logo.png';
import AnimatedLetters from '../AnimatedLetter';
import Logo from './Logo'
import Loader from 'react-loaders'
import './index.scss'


const Home = () => {
    const [letterClass] = useState('text-animate')

    const nameArray = ['a', 'n', 'o', 'j']
    const jobArray = [
        'w',
        'e',
        'b',
        ' ',
        'd',
        'e',
        'v',
        'e',
        'l',
        'o',
        'p',
        'e',
        'r',
        '.',
    ]



    return (
        <>
            <div className="container home-page">
                <div className="text-zone">
                    <h1>
                        <span className={letterClass}>H</span>
                        <span className={`${letterClass} _12`}>i,</span>
                        <br />
                        <span className={`${letterClass} _13`}>I</span>
                        <span className={`${letterClass} _14`}>'m</span>
                        <img
                            src={LogoTitle}
                            alt="JavaScript Developer Name, Web Developer Name"
                        />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={nameArray}
                            idx={15}
                        />
                        <br />
                        <AnimatedLetters
                            letterClass={letterClass}
                            strArray={jobArray}
                            idx={22}
                        />
                    </h1>
                    <h2>Front End Developer / Java / Python</h2>
                    <Link to="/contact" className="flat-button">
                        CONTACT ME
                    </Link>
                </div>
                <Logo />
            </div>
            <Loader type="pacman" />

        </>
    )
}

export default Home