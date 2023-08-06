import React, {useState, useEffect} from "react";
import CountUp from "react-countup";
import '../styles/components/Statistics.css';

const Statistics = ({ statistics }) => {

    return (
        <div className='StatisticsContainer'>
            {
                statistics.map((statistic) => (
                    <div className='Statistic'>
                        <div className='Title'>
                            <CountUp end={statistic.value} suffix={statistic.suffix} enableScrollSpy={true}/>
                        </div>
                        <div className='StatisticSubText' id={statistic.name}>
                            {statistic.subtext}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Statistics;