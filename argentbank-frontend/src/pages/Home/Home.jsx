import React from 'react';
import Banner from '../../components/Banner/Banner'; 
import Item from '../../components/Item/Item'; 
import iconChat from '../../img/icon-chat.webp'; 
import iconMoney from '../../img/icon-money.webp'; 
import iconSecurity from '../../img/icon-security.webp'; 
import './Home.scss'; 


const FeaturesData = [
    {
        id: "1",
        image: iconChat, 
        descriptionImage: "Chat Icon", 
        title: "You are our #1 priority", 
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." // Description de l'élément
    },
    {
        id: "2",
        image: iconMoney, 
        descriptionImage: "Money Icon", 
        title: "More savings means higher rates", 
        description: "The more you save with us, the higher your interest rate will be!" 
    },
    {
        id: "3",
        image: iconSecurity, 
        descriptionImage: "Security Icon", 
        title: "Security you can trust", 
        description: "We use top of the line encryption to make sure your data and money is always safe." 
    }
];


function Home() {
    return (
        <div className='homepage'>
            <main>
               
                <Banner />

                
                <section className="features">
                   
                    {FeaturesData.map((data) => (
                        <Item
                            key={data.id} 
                            image={data.image} 
                            descriptionImage={data.descriptionImage} 
                            title={data.title} 
                            description={data.description} 
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Home; 