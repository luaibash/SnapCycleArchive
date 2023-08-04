import React, {useEffect, useRef} from 'react';
import CountUp from 'react-countup';
import '../styles/Home/Home.css';
import '../styles/Home/PanelOne.css';
import '../styles/Home/PanelTwo.css';
import '../styles/Home/PanelThree.css';
import '../styles/Home/PanelFour.css';
import '../styles/Home/PanelFive.css';
import OutlineButton from "../components/OutlineButton";
import RecyclingBackground from "../assets/Home/RecyclingBackground.jpg";
import PlasticWrapper from "../assets/Home/ItemCategories/PlasticWrapper.png";
import PlasticBottle from "../assets/Home/ItemCategories/PlasticBottle.png";
import MetalCan from "../assets/Home/ItemCategories/MetalCan.png";
import GlassBottle from "../assets/Home/ItemCategories/GlassBottle.png";
import Battery from "../assets/Home/ItemCategories/Battery.png";
import PlasticBag from "../assets/Home/ItemCategories/PlasticBag.png";
import MobilePhone from "../assets/Home/ItemCategories/MobilePhone.png";
import CardboardBox from "../assets/Home/ItemCategories/CardboardBox.png";
import PaperCup from "../assets/Home/ItemCategories/PaperCup.jpg";
import CleaningBottle from "../assets/Home/ItemCategories/CleaningBottle.jpg";
import Tinfoil from "../assets/Home/ItemCategories/Tinfoil.jpg";
import Laptop from "../assets/Home/ItemCategories/Laptop.png";
import PlasticContainer from "../assets/Home/ItemCategories/PlasticContainer.png";
import ElectronicCoords from "../assets/Home/ItemCategories/ElectronicCoords.png";
import PaperBag from "../assets/Home/ItemCategories/PaperBag.png";
import Cigarette from "../assets/Home/ItemCategories/Cigarette.png";
import Mask from "../assets/Home/ItemCategories/Mask.png";
import Lightbulb from "../assets/Home/ItemCategories/Lightbulb.png";
import GameController from "../assets/Home/ItemCategories/GameController.png";
import Paper from "../assets/Home/ItemCategories/Paper.png";
import FoodContainer from "../assets/Home/ItemCategories/FoodContainer.png";
import Paint from "../assets/Home/ItemCategories/Paint.png";
import PanelTwoLaptopPhone from "../assets/Home/PanelTwoLaptopPhone.png"
import Ticker from "../components/Ticker";


const Home = () => {
    const leftScrollRef = useRef(null);
    const rightScrollRef = useRef(null);

    // Transforms the current vertical scroll to horizontal scroll
    const handleScroll = () => {
        const scrollY = window.scrollY;
        const horizontalScroll = scrollY / 20; // Adjust the divisor to control the movement speed
        leftScrollRef.current.style.transform = `translateX(${-horizontalScroll}px)`;
        rightScrollRef.current.style.transform = `translateX(${horizontalScroll}px)`;
    };

    // Scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    // useEffect(() => {
    //     window.scrollTo(0, 0)
    // }, [])

    const tickerItems1 = [
        {name: "Plastic Wrapper", src: PlasticWrapper},
        {name: "Plastic Bottle", src: PlasticBottle},
        {name: "Metal Can", src: MetalCan},
        {name: "Glass Bottle", src: GlassBottle},
        {name: "Battery", src: Battery},
        {name: "Plastic Bag", src: PlasticBag},
        {name: "Mobile Phone", src: MobilePhone},
        {name: "Cardboard Box", src: CardboardBox},
        {name: "Paper Cup", src: PaperCup},
        {name: "Cleaning Bottle", src: CleaningBottle},
        {name: "Tinfoil", src: Tinfoil},
    ]

    const tickerItems2 = [
        {name: "Laptop", src: Laptop},
        {name: "Plastic Container", src: PlasticContainer},
        {name: "Electronic Coords", src: ElectronicCoords},
        {name: "Paper Bag", src: PaperBag},
        {name: "Cigarette", src: Cigarette},
        {name: "Mask", src: Mask},
        {name: "Lightbulb", src: Lightbulb},
        {name: "Game Controller", src: GameController},
        {name: "Paper", src: Paper},
        {name: "Food Container", src: FoodContainer},
        {name: "Paint", src: Paint},
    ]

    const statistics = [
        {name: "Statistic One", value: "12700000", suffix: "", subtext: "tonnes of plastic are littered into the ocean\nevery year."},
        {name: "Statistic Two", value: "11", suffix: " Masks", subtext: "are littered every hour."},
        {name: "Statistic Three", value: "60", suffix: " %", subtext: "of water pollution is attributed\nto litter."},
        {name: "Statistic Four", value: "100000", suffix: "", subtext: "animals are killed by plastic bags every year.\n"},
    ]

    return (
        <div>
            <div className="HomePanelLanding">
                <img src={RecyclingBackground} alt="Recycling Background" className="HomePanelLandingBackground"/>
            </div>
            <div className="PanelOne">
                <div className='Title'>
                    Hundreds of Objects<br></br> 
                    to Detect From, That<br></br>
                    Help You Recycle
                </div>
                <div className='ItemCategories'>
                    <Ticker items={tickerItems1}/>
                    <Ticker items={tickerItems2} invert={true}/>
                </div>
            </div>
            <div className='PanelTwo'>
                <div className='PanelTwoText'>
                    <div className='Title'>
                        Take a Snap of Any
                        Item, Anywhere
                    </div>
                    <div className='SubText'>
                        Take a picture of the object in front of you,
                        that&#39;s all you have to do! Let SnapCycle do
                        the rest as it detects the object for you,
                        and lets you in on all the sweet disposing details.
                    </div>
                    <div className='SubText'>
                        Try out SnapCycle and experience the power of smooth
                        recycling today.
                    </div>
                    <div className='PanelTwoButton'>
                        <OutlineButton title="Try Now" destination="/demo"/>
                    </div>
                </div>
                <div className='PanelTwoImages'>
                    <img src={PanelTwoLaptopPhone} alt="Laptop and Phone" className='PanelTwoLaptopPhone' />
                </div>
            </div>
            <div className='PanelThree'>
                <div className='PanelThreeImage'>

                </div>
                <div className='PanelThreeText'>
                    <div className='Title'>
                        Can't Take a Picture?<br></br>
                        No Worries!
                    </div>
                    <div className='SubText'>
                        Search through our ever growing database<br></br>
                        of objects to learn how to dispose of them.<br></br>
                        Say no more to scientific articles going into<br></br>
                        detail on things you don't need to know! 
                    </div>
                    <div className='SubText'>
                        Try out SnapCycle and unlock the secrets<br></br>
                        of sustainable living today.
                    </div>
                    <div className='PanelThreeButton'>
                        <OutlineButton title="Try Now" destination="/demo"/>
                    </div>
                </div>
            </div>
            <div className='PanelFour'>
                <div className='Title' id='PanelFourTitle'>
                    Let the Numbers Speak
                    for Themselves.
                </div>
                <div className='SubText' id="PanelFourSubText">
                    Take a glimpse into why responsible recycling 
                    matters now more than ever.
                </div>
                <div className='StatisticsContainer'>
                    {
                        statistics.map((statistic) => (
                            <div className='Statistic'>
                                <div className='Title'>
                                    <CountUp end={statistic.value} suffix={statistic.suffix} enableScrollSpy={true}/>
                                </div>
                                <div className='StatisticSubText'>
                                    {statistic.subtext}
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className='PanelFive'>
                <div className='Title' id='PanelFiveTitle'>
                    Join Forces for a Greener
                    Earth - Let's Make a
                    Change Together
                </div>
                <div className='SubText' id='PanelFiveText'>
                    At SnapCycle, we want to encourage others to do everything
                    they can in contributing towards a stronger future. It is our
                    responsibility to provide the privilege we own down to our
                    future generations.
                </div>
                <div className='PanelFiveButton'>
                    <OutlineButton title="Try Now" destination="/demo"/>
                </div>
            </div>
        </div>
    )
}

export default Home;