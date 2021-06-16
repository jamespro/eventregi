import { Link } from "react-router-dom";
import classes from './Landing.module.css';

const Landing = () => {
    return (
        <>
            <div>
                <div className={classes.pencil}>
                    <p>📢   Session agenda coming soon!  📢</p>
                </div>
                <main>
                    {/* <video src="../../public/img/mystery-bg-purple.mp4" autoplay loop playsinline muted></video> */}
                    <section className={classes.hero}>
                        <video playsInline autoPlay muted loop poster="img/mystery-bg-purple.png" id="bgvid" className={classes.bgvid}>
                            <source src="img/mystery-bg-purple.mp4" type="video/mp4" />
                            <source src="img/mystery-bg-purple.webm" type="video/webm" />
                        </video>
                        <div className={classes.headertext}>
                            <h2>Welcome to <span>Mystery Convention 2021</span></h2>
                            <p><Link to="/attendee/reginfo/myst1221" className={classes.button2021} >Begin Attendee Registration</Link></p>
                        </div>
                    </section>
                </main>
            </div>
            {/* <Link to='/checkout'>Link to checkout</Link> */}
        </>
    )
}




export default Landing;
