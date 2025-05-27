import "./home.css";
import Line from "../assets/line.svg";
import Aeros from "../assets/aeros.svg";
import bv from "../assets/bv.mp4";
import Cards from "../Cards/Cards";

const Home = () => {

    return (
        <>
            <div className="main">

                <div className="main_2">
                    <h2>Come to us with a <span>vision</span></h2>
                    <img className="line_img" src={Line} alt="" />
                    <h1 className="heading">Embrance the Quest</h1>
                    <h4>We build digital product from idea to design development to marketing & PR to post launch support</h4>
                    <div className="btn_div">
                        <button className="btn">GET FREE CONSUTATION</button>
                    </div>
                </div>

                <div className="border_gradient">
                    <div className="animation_div">
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                        <h2 className="webdev_text"> <img src={Aeros} alt="" /> Web Development</h2>
                    </div>
                </div>
            </div>

            <Cards />

            <div className="main_4">
                <div className="btn_div">
                    <button className="btn">BOOK A DEMO</button>
                </div>

                <h3>We are creative designers, developers and marketers from india driven
                    by a common purpose to inspir. create and launch ground breaking ideas.
                </h3>

                <h5>We love taking your vision to reality. Here's how we work:</h5>
            </div>
        </>
    )
}

export default Home;