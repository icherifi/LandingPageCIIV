import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const res = {
        en: {
            translation: {
                homepage: {
                    slogan0: "Smart Insight Solutions for Travel Businesses",
                    slogan1: "Streamlining Travel and Automation Solutions",
                    buttonFilledTrans: "Explore Our Services",
                    subTitleKeyFeatures: "Discover the benefits of our specialized consulting",
                    keyFeature1Head: "Custom Automated Pipeline Solutions",
                    keyFeature1Sub: "Developing automated pipeline systems for travel management. Enhancing operational efficiency and customer experience.",
                    keyFeature2Head: "Sentiment Analysis",
                    keyFeature2Sub: "Better understand customer needs and preferences through sentiment analysis. Improve service quality and customer satisfaction.",
                    keyFeature3Head: "Cost Optimization",
                    keyFeature3Sub: "Maximize savings on travel expenses through strategic planning. Reduce costs without compromising on quality.",
                    keyFeature4Head: "Customized Solutions",
                    keyFeature4Sub: "Tailored services to meet your unique travel and automation requirements.",
                    welcomeHead: "Welcome to Our Consulting Company",
                    welcomeText: "We excel in delivering leading-edge consultancy for the travel sector, emphasizing automation solutions to elevate operational efficiency and elevate customer satisfaction. Leveraging our expertise, we empower businesses to enhance efficiency, tap into new markets, and overcome challenges.",   
                },
            },
        },
        fr: {
            translation: {
              homepage: {
                slogan0: "Des solutions d'analyse intelligentes pour les entreprises de voyage",
                slogan1: "Solutions tech d'automatisation",
                buttonFilledTrans: "Découvrez nos services",
                subTitleKeyFeatures: "Découvrez les avantages de notre conseil spécialisé",
                keyFeature1Head: "Solutions de pipeline automatisées personnalisées",
                keyFeature1Sub: "Développement de systèmes de pipeline automatisés pour la gestion des voyages. Amélioration de l'efficacité opérationnelle et de l'expérience client.",
                keyFeature2Head: "Analyse des sentiments",
                keyFeature2Sub: "Mieux comprendre les besoins et les préférences des clients grâce à l'analyse des sentiments. Améliorer la qualité du service et la satisfaction du client.",
                keyFeature3Head: "Optimisation des coûts",
                keyFeature3Sub: "Maximisez les économies sur les dépenses de voyage grâce à une planification stratégique. Réduire les coûts sans compromettre la qualité.",
                keyFeature4Head: "Solutions personnalisées",
                keyFeature4Sub: "Des services sur mesure pour répondre à vos besoins uniques en matière de voyage et d'automatisation.",
                welcomeHead: "Bienvenue dans notre entreprise de conseil",
                welcomeText: "Nous excellons dans le conseil de pointe pour le secteur du voyage, en mettant l'accent sur les solutions d'automatisation pour améliorer l'efficacité opérationnelle et la satisfaction du client. En tirant parti de notre expertise, nous permettons aux entreprises d'améliorer leur efficacité, de se lancer sur de nouveaux marchés et de surmonter les défis.",
              },
            },
          }
    };

i18n
  .use(initReactI18next)
  .init({
    resources: res,
    lng: "en",
    fallbackLng: "en"
  });

export default i18n;