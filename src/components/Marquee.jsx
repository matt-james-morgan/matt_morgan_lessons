import React from "react"
import guitarImage from '../../public/images/guitarImage'

export default function Marquee() {
    return (
        <div className="marquee">
            <ul className="marquee__content">
                <div className=" marquee__item">
                    <img src={guitarImage} alt="" />
                </div>
            </ul>

            <ul aria-hidden="true" className="marquee__content">
                <div className=" marquee__item">
                    <img src={guitarImage} alt="" />
                </div>
                
            </ul>
        </div>
    )
}