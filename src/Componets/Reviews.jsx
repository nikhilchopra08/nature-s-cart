import React from 'react';

const Reviews = () => { 
    const revList = [
        {
            review: "⭐️⭐️⭐️⭐️⭐️",
            name: "Sachin",
            para: "I stumbled upon the Sustainable Marketplace while searching for a birthday gift for a friend who's passionate about sustainability. The 'Upcycling and Recycling Marketplace' section was a goldmine! I found a one-of-a-kind upcycled handbag that she absolutely loved. The platform's commitment to supporting sustainable artisans and creators is commendable. It's my new favorite place to shop for gifts that have a meaningful impact."
        },
        {
            review: "⭐️⭐️⭐️⭐️",
            name: "Khushi",
            para: "The Sustainable Marketplace is my go-to place for all things sustainable. From clothing to home goods, they offer a wide range of eco-friendly products. I appreciate the focus on local and fair trade items, and the carbon footprint calculator is a brilliant feature. Shopping here not only feels good, but it also contributes to a better world. Kudos to the team behind this initiative!"
        },
        {
            review: "⭐️⭐️⭐️⭐️⭐️",
            name: "Varun",
            para: "I've been a loyal customer of the Sustainable Marketplace for over a year now, and I can't say enough about it. This platform makes it incredibly easy to shop for eco-friendly and ethical products. The product ratings and certifications give me confidence in my purchases, and I've discovered some fantastic brands I would have never found otherwise. Plus, the community here is so supportive, and the educational content has helped me make more sustainable choices in my everyday life. Highly recommend!"
        },
        {
            review: "⭐️⭐️⭐️⭐️⭐️",
            name: "Elvish",
            para: "I'm relatively new to the world of sustainability, and the Sustainable Marketplace has been an invaluable resource. The educational content has taught me so much about eco-friendly living, and I appreciate how they simplify complex concepts. It's not just a marketplace; it's a community that promotes positive change. I've made several purchases here, and knowing I'm supporting sustainable practices is a wonderful feeling."
         },
        {
            review: "⭐️⭐️⭐️⭐️",
            name: "Himanshu",
            para: "As someone who cares deeply about the authenticity of sustainability claims, I'm impressed with the rigorous seller verification process on this platform. It's reassuring to know that the products I buy come from businesses that meet high sustainability standards. The commitment to transparency is evident, and it sets the Sustainable Marketplace apart from other online retailers."  },
        {
            review: "⭐️⭐️⭐️⭐️⭐️",
            name: "AmritPal",
            para: "I've been reducing my environmental footprint for a while now, and the Sustainable Marketplace aligns perfectly with my values. The 'Green Shipping Options' make a big difference, and I appreciate the effort to minimize shipping-related emissions. It's a user-friendly platform with a conscience. Keep up the great work!"
          },
    ];

    return (
        <div className='review-list'>
            <h4>Valuable Reviews</h4>

            <div>
            {revList.map((item, index) => ( // Use 'item' instead of 'i'
                <ReviewCard key={index} review={item.review} name={item.name} para={item.para} />
            ))}
            </div>
        </div>
    );
};

const ReviewCard = ({ review , name , para }) => {
    return (
        <div className='Reviews'>
            <h6>{review}</h6>
            <h3>{name}</h3>
            <h5>{para}</h5>
            
        </div>
    );
};

export default Reviews;
