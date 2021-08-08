import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Carousel from 'react-bootstrap/Carousel'
import Logo from '../images/logo.png'
import OwlCarousel from 'react-owl-carousel'
import 'owl.carousel/dist/assets/owl.carousel.css'
import 'owl.carousel/dist/assets/owl.theme.default.css'
import './Home.css'
import Jus from '../images/1 (2).png'
import Tarte from '../images/2 (1).png'
import Esquimot from '../images/3 (1).png'
import Gauffres from '../images/4 (1).png'
import TarteGlacé from '../images/5 (1).png'
import Icecream from '../images/6 (1).png'
import Picture from '../images/A.jpg'
import Slideimg from '../images/B.jpg'
import Slideimg1 from '../images/C.jpg'
import Slideimg2 from '../images/D.jpg'

import Command from '../components/Command'
import Footer from '../components/Footer'

export default function Home() {


    var counter = 0;
    const trans = 300;
    var num = trans * counter;




    return (
        <div className="Home">

            <Carousel className="slide">
                <Carousel.Item className="carousselItem">
                    <img src={Slideimg1} />
                </Carousel.Item >

                <Carousel.Item className="carousselItem">
                    <img src={Slideimg2} />
                </Carousel.Item>


                <Carousel.Item className="carousselItem">
                    <img src={Slideimg} />
                </Carousel.Item>
            </Carousel>

            <div className="container">

                <div className="description">
                    <p>
                        Une fabrication artisanale basée sur des ingrédients de qualité, du lait, de la crème et des oeufs, comme au beau vieux temps. Mais aussi des gousses de vanille, du chocolat praliné et des fruits d'excellence.
                    </p>
                </div>


                <div className="glaceContainer">
                    <div className="img">
                        <img src={Picture} />
                    </div>

                    <div className="text">
                        <div> <h1> Amogela </h1></div>
                        <div> <h2> Une passion glacée</h2> </div>
                        <div> <p>   Une fabrication artisanale basée sur des ingrédients de qualité, du lait, de la crème et des oeufs, comme au beau vieux temps. Mais aussi</p></div>
                    </div>
                </div>


            </div>

<Command />

            <div className="buttonsControl">
                <button className="minusButton" onClick={() => {
                               counter = counter - 1;
                               const item = document.getElementById('r')
                               const products = document.querySelector('.owlSlideItem products')
           
                               item.style.transform = 'translateX(' + (-trans * counter) + 'px)'
                               console.log(trans * counter);
                               if (trans * counter == 0) {
                                   counter =  5;
                                }

                }} > - </button>
                <button id="plus" className="plusButton" onClick={() => {

                    counter = counter + 1;
                    const enable = document.querySelector('.minusButton');
                    enable.style.pointerEvents = "visible";
                    enable.style.opacity = "1";
                    const item = document.getElementById('r');
                    const products = document.querySelector('.owlSlideItem products');

                    item.style.transform = 'translateX(' + (-trans * counter) + 'px)';
                    console.log(trans * counter);
                    if (trans * counter == 2100) {
                        counter = -1;
                    }

                }}> + </button>
            </div>


            <div className="contentOwl">
                <div className="containerOwlSlide">

                    <div id="r" className="owlSlideItem">

                        <div className="products">
                            <div className="imgProduct"> <div className="imgContainer"> <img src={Jus} /> </div>  <div className="productName"> <div> Milk Shake</div> </div></div>
                            <div className="priceButton">
                                <div> <div> 450 DZD</div> </div>
                            </div>
                        </div>
                        
                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src={Esquimot} /> </div>  <div className="productName"> <div> Esquimau</div> </div> </div>
                            <div id="firstcaroussel" className="priceButton">
                                <div> <div> 200 DZD</div> </div>
                            </div>
                        </div>


                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src={Gauffres} /> </div>  <div className="productName"> <div> Gaufre glace </div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 400 DZD</div> </div>
                            </div>
                        </div>



                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src={TarteGlacé} /> </div>  <div className="productName"> <div> Tarte</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 500 DZD</div> </div>
                            </div>
                        </div>


                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> <img src={Icecream} /> </div>  <div className="productName"> <div> Glace italienne</div> </div></div>
                            <div className="priceButton">
                                <div> <div> 600 DZD</div> </div>
                            </div>
                        </div>

                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> 5 </div>  <div className="productName"> <div> Glace vanille</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 700 DZD</div> </div>
                            </div>
                        </div>


                        <div className="products">
                            <div className="imgProduct">  <div className="imgContainer"> 6 </div>  <div className="productName"> <div> Glace vanille</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 800 DZD</div> </div>
                            </div>
                        </div>


                        <div id="lastcaroussel" className="products">
                            <div className="imgProduct">  <div className="imgContainer"> 7 </div>  <div className="productName"> <div> Glace vanille</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 200 DZD</div> </div>
                            </div>
                        </div>


                        <div id="lastcaroussel" className="products">
                            <div className="imgProduct">  <div className="imgContainer"> 8 </div>  <div className="productName"> <div> Glace vanille</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 200 DZD</div> </div>
                            </div>
                        </div>


                        <div id="lastcaroussel" className="products">
                            <div className="imgProduct">  <div className="imgContainer">  <img src={Jus} /> </div>  <div className="productName"> <div> Glace vanille</div> </div> </div>
                            <div className="priceButton">
                                <div> <div> 200 DZD</div> </div>
                            </div>
                        </div>



                    </div>


                </div>



            </div>



<Footer />





        </div>
    )
}
