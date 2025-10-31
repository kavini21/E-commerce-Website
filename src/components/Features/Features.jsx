import SectionTitle from "../SectionTitle/SectionTitle";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { ShoppingCart } from "lucide-react";
const Features = () =>{

    const features = [
        {
            title: 'labray stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_1.png',
            currentPrice: '$200',

        },
         {
            title: 'labray stool chair',
            status: 'Sales',
            price: '$250',
            image: '/src/assets/features/product_2.png',
           
        },
         {
            title: 'labray stool chair',
            price: '$250',
            image: '/src/assets/features/product_3.png',
         
        },
         {
            title: 'labray stool',
            status: 'New',
            price: '$250',
            image: '/src/assets/features/product_4.png',
            currentPrice: '$200',

        }
    ];

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3
    };
    return (
         <div>
            <div className="lg:container mx-auto">
                <SectionTitle title="Featured Products" mb='mb-11'></SectionTitle>
                <div className="slider-container slider_container w-full h-full">
                    <Slider {...settings}>
                    {
                        
                    }
                    </Slider>
                </div>


            </div>
        </div>
    )
}

export default Features;