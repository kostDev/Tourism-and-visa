import React from 'react';

import BR from "./CountryFlags/br.png";
import BN from "./CountryFlags/bn.png";
import IN from "./CountryFlags/in.png";
import RU from "./CountryFlags/ru.png";
import VN from "./CountryFlags/vn.png";
import KH from "./CountryFlags/kh.png";
import CA from "./CountryFlags/ca.png";
import CO from "./CountryFlags/co.png";
import HK from "./CountryFlags/hk.png";
import MY from "./CountryFlags/my.png";
import MX from "./CountryFlags/mx.png";
import NZ from "./CountryFlags/nz.png";
import SG from "./CountryFlags/sg.png";
import TW from "./CountryFlags/tw.png";
import TH from "./CountryFlags/th.png";
import UA from "./CountryFlags/ua.png";
import US from "./CountryFlags/us.png";
import DK from "./CountryFlags/dk.png";
import GR from "./CountryFlags/gr.png";
import HU from "./CountryFlags/hu.png";
import ID from "./CountryFlags/id.png";
import IE from "./CountryFlags/ie.png";
import IT from "./CountryFlags/it.png";
import JP from "./CountryFlags/jp.png";
import LA from "./CountryFlags/la.png";
import LB from "./CountryFlags/lb.png";
import MLT from "./CountryFlags/mlt.png";
import NO from "./CountryFlags/no.png";
import PL from "./CountryFlags/pl.png";
import RO from "./CountryFlags/ro.png";
import KR from "./CountryFlags/kr.png";
import SE from "./CountryFlags/se.png";

const Counties = [
    {
        name: "Brazil",
        img: BR,
        link: "brazil"
    },
    {
        name: "Brunei",
        img: BN,
        link: "brunei"
    },
    {
        name: "Cambodia",
        img: KH,
        link: "cambodia"
    },
    {
        name: "Canada",
        img: CA,
        link: "canada"
    },
    {
        name: "Columbia",
        img: CO,
        link: "columbia"
    },
    {
        name: "Denmark",
        img: DK,
        link: "denmark"
    },
    {
        name: "Greece",
        img: GR,
        link: "greece"
    },
    {
        name: "Hong Kong",
        img: HK,
        link: "hong_kong"
    },
    {
        name: "Hungary",
        img: HU,
        link: "hungary"
    },
    {
        name: "India",
        img: IN,
        link: "india"
    },
    {
        name: "Indonesia",
        img: ID,
        link: "indonesia"
    },
    {
        name: "Ireland",
        img: IE,
        link: "ireland"
    },
    {
        name: "Italy",
        img: IT,
        link: "italy"
    },
    {
        name: "Japan",
        img: JP,
        link: "japan"
    },
    {
        name: "Laos",
        img: LA,
        link: "laos"
    },
    {
        name: "Lebanon",
        img: LB,
        link: "lebanon"
    },
    {
        name: "Malaysia",
        img: MY,
        link: "malaysia"
    },
    {
        name: "Malta",
        img: MLT,
        link: "malta"
    },
    {
        name: "Mexico",
        img: MX,
        link: "mexico"
    },
    {
        name: "New Zealand",
        img: NZ,
        link: "new_zealand"
    },
    {
        name: "Norway",
        img: NO,
        link: "norway"
    },
    {
        name: "Poland",
        img: PL,
        link: "poland"
    },
    {
        name: "Romania",
        img: RO,
        link: "romania"
    },
    {
        name: "Singapore",
        img: SG,
        link: "singapore"
    },
    {
        name: "South Korea",
        img: KR,
        link: "south_korea"
    },
    {
        name: "Sweden",
        img: SE,
        link: "sweden"
    },
    {
        name: "Taiwan",
        img: TW,
        link: "taiwan"
    },
    {
        name: "Thailand",
        img: TH,
        link: "thailand"
    },
    {
        name: "Ukraine",
        img: UA,
        link: "ukraine"
    },
    {
        name: "Russia",
        img: RU,
        link: "russia"
    },
    {
        name: "United States",
        img: US,
        link: "united_states"
    },
    {
        name: "Vietnam",
        img: VN,
        link: "vietnam"
    },
];

function countryBlock(obj) {
    return (
        <div className="col-6 col-md-3 col-lg-2 pt-5">
            <span>
                <img className="flag block mx-auto" src={obj.img} />
            </span>
            <h3 className="h5 my-2">{obj.name}</h3>
            <a href={"https://www.topuniversities.com/universities/country/" + obj.link} target="_blank" className="btn btn-sm btn-outline-dark text-xs uppercase tracking-wide hover:shadow-lg px-3">
                Learn More
            </a>
        </div>
    )

}

function EducationServicePage() {
    return (
        <div className="container">
            <div className="most-popular-visas container text-center py-5">
                <h2 className="font-light headline text-center mb-3">Most Popular Visas</h2>
                <div className="row -mt-5 mb-5">
                    {Counties.map(obj => countryBlock(obj))}
                </div>
            </div>
        </div>
    );
}

export default EducationServicePage;