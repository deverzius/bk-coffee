import React from "react"
import { Product } from "../../components/Product"
import { products } from "../../data"
import banner from '../../assets/imgs/banner.png'
import banner2 from '../../assets/imgs/banner2.png'

import './style.css'

export const HomePage = () => {


    return (
        <div className="home-container">
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="10000">
                    <img src={banner} className="d-block w-100" alt="..."/>
                    </div>
                    <div className="carousel-item" data-bs-interval="10000">
                    <img src={banner2} className="d-block w-100" alt="..."/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="container row holic">
                <span>Tea Holic</span>
                {
                    [...products].filter(i => i.index < 5).map((item, index) => (
                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 center">
                            <Product product = {item}/>
                        </div>
                    ))
                }
            </div>
            <div className="container row holic">
                <span>Coffee Holic</span>
                {
                    [...products].filter(i => i.index < 5).map((item, index) => (

                        <div key={index} className="col-sm-12 col-md-6 col-lg-4 col-xl-3 center">
                            <Product product = {item}/>
                        </div>
                    ))
                }
            </div>  
        </div>
    )
}