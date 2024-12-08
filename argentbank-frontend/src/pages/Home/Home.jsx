import React from 'react';
import Banner from '../../components/Banner/Banner'; // Importation du composant Banner
import Item from '../../components/Item/Item'; // Importation du composant Item
import iconChat from '../../img/icon-chat.webp'; // Importation de l'icône pour le chat
import iconMoney from '../../img/icon-money.webp'; // Importation de l'icône pour l'argent
import iconSecurity from '../../img/icon-security.webp'; // Importation de l'icône pour la sécurité
import './Home.scss'; // Importation du fichier de style SCSS pour le composant Home

// Tableau contenant les données des fonctionnalités à afficher sur la page d'accueil
const FeaturesData = [
    {
        id: "1",
        image: iconChat, // Icône pour le chat
        descriptionImage: "Chat Icon", // Texte alternatif pour l'image (accessibilité)
        title: "You are our #1 priority", // Titre de l'élément
        description: "Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes." // Description de l'élément
    },
    {
        id: "2",
        image: iconMoney, // Icône pour l'argent
        descriptionImage: "Money Icon", // Texte alternatif pour l'image
        title: "More savings means higher rates", // Titre de l'élément
        description: "The more you save with us, the higher your interest rate will be!" // Description de l'élément
    },
    {
        id: "3",
        image: iconSecurity, // Icône pour la sécurité
        descriptionImage: "Security Icon", // Texte alternatif pour l'image
        title: "Security you can trust", // Titre de l'élément
        description: "We use top of the line encryption to make sure your data and money is always safe." // Description de l'élément
    }
];

/**
 * Composant fonctionnel représentant la page d'accueil.
 */
function Home() {
    return (
        <div className='homepage'>
            <main>
                {/* Affiche le composant Banner */}
                <Banner />

                {/* Section contenant les fonctionnalités */}
                <section className="features">
                    {/* Boucle sur le tableau FeaturesData pour afficher chaque élément */}
                    {FeaturesData.map((data) => (
                        <Item
                            key={data.id} // Clé unique pour chaque élément
                            image={data.image} // Image de l'élément
                            descriptionImage={data.descriptionImage} // Texte alternatif pour l'image
                            title={data.title} // Titre de l'élément
                            description={data.description} // Description de l'élément
                        />
                    ))}
                </section>
            </main>
        </div>
    );
}

export default Home; // Exportation du composant Home pour l'utiliser dans d'autres parties de l'application