import React from 'react';

const img1 = "https://uploads-ssl.webflow.com/6141f4b5ccd2886225dd2418/62ea3f229c9dd4433b260f1d_global-organic-textile-standard-logo.webp";
const img2 = "https://uploads-ssl.webflow.com/6141f4b5ccd2886225dd2418/62ea3f72f01323df93bc8558_positive-luxury-logo.webp";
const img3 = "https://uploads-ssl.webflow.com/6141f4b5ccd2886225dd2418/62ea4151ac3336ec46c99641_rainforest-alliance-certified-logo.webp";

const Certifications = () => {
    const hello = [
        {
            name: " The Global Organic Textile Standard (GOTS)",
            desc: "vjhvm",
            img: img1
        },
        {
            name: "Positive Luxury",
            desc: "jbkbbk",
            img: img2
        },
        {
            name: "Rainforest Alliance Certified",
            desc: "jkhi",
            img: img3
        },
    ];

    return (
        <>
       <div className="certification">
        <h2>Our Certifications</h2>
        <div className='card-holder'>
                {hello.map((item, index) => ( // Use 'item' instead of 'i', and add 'key' prop
                    <Cards 
                        key={index} // Add a unique key prop
                        img={item.img}
                        name={item.name}
                    />

                ))}
            </div>
            </div>
        </>
    );
};

const Cards = ({ img, name, desc }) => {
    return (
        <div className='cards'>
            
            <img src={img} alt={name} />
            <h4>{name}</h4>
        </div>
    );
};

export default Certifications;