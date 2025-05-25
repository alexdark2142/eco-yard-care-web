
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'fr' | 'uk';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

const translations = {
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.benefits': 'Benefits',
    'nav.testimonials': 'Testimonials',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Book Now',
    
    // Hero
    'hero.title': 'KEEP YOUR YARD GREEN, CLEAN & THRIVING',
    'hero.subtitle': 'Professional landscaping and pressure washing services in Calgary, AB — without you lifting a finger!',
    'hero.bookNow': 'Book Now',
    'hero.services': 'Our Calgary Services',
    
    // Services
    'services.title': 'Our Calgary Lawn Care Services',
    'services.subtitle': 'Professional yard care services for Calgary homeowners',
    'services.lawnMowing.title': 'Calgary Lawn Mowing',
    'services.lawnMowing.description': 'Professional grass cutting and lawn maintenance to keep your Calgary yard looking its best year-round, even during our short growing season.',
    'services.bushHedge.title': 'Bush & Hedge Cutting',
    'services.bushHedge.description': 'Precise trimming and shaping of bushes and hedges to enhance your Calgary landscape\'s appearance, adapted to our local climate.',
    'services.edgeTrimming.title': 'Edge Trimming',
    'services.edgeTrimming.description': 'Clean, sharp edges along Calgary sidewalks, driveways, and garden beds for a professionally manicured look in any neighborhood.',
    'services.garbageRemoval.title': 'Garbage Removal',
    'services.garbageRemoval.description': 'Efficient removal of any type of garbage, debris, and unwanted items from your Calgary property, following local disposal regulations.',
    'services.gutterCleaning.title': 'Gutter Cleaning',
    'services.gutterCleaning.description': 'Thorough cleaning of gutters throughout Calgary to remove leaves, dirt, and debris, preventing water damage to your home.',
    'services.pressureWashing.title': 'Calgary Pressure Washing',
    'services.pressureWashing.description': 'High-quality pressure washing for Calgary driveways, wooden terraces, garage doors, and more - perfect for removing winter salt residue.',
    'services.drivewayDeepCleaning.title': 'Driveway Deep Cleaning',
    'services.drivewayDeepCleaning.description': 'Removal of ingrained dirt, Calgary winter salt, moss, and car oil from surfaces - restoring your driveway to like-new condition.',
    'services.ecoFriendly.title': 'Eco-Friendly Services',
    'services.ecoFriendly.description': 'Calgary\'s choice for environmentally responsible yard care - using exclusively ecological detergents without harm to our local environment.',
    
    // Benefits
    'benefits.title': 'Why Choose Us',
    'benefits.subtitle': 'The benefits of our professional service',
    'benefits.ecoFriendly.title': 'Eco-Friendly',
    'benefits.ecoFriendly.item1': '100% ecological detergents',
    'benefits.ecoFriendly.item2': 'Safe for pets and children',
    'benefits.ecoFriendly.item3': 'Environmentally conscious practices',
    'benefits.ecoFriendly.item4': 'Sustainable lawn care methods',
    'benefits.professional.title': 'Professional',
    'benefits.professional.item1': 'Experienced and trained staff',
    'benefits.professional.item2': 'High-quality equipment',
    'benefits.professional.item3': 'Attention to detail',
    'benefits.professional.item4': 'Consistent, reliable service',
    'benefits.customerFocused.title': 'Customer-Focused',
    'benefits.customerFocused.item1': 'Convenient scheduling options',
    'benefits.customerFocused.item2': 'Responsive customer service',
    'benefits.customerFocused.item3': 'Tailored service packages',
    'benefits.customerFocused.item4': 'Satisfaction guaranteed',
    'benefits.cta.title': 'Book today and enjoy tomorrow!',
    'benefits.cta.subtitle': 'Get 10% off your first service when you book now',
    'benefits.cta.button': 'Book Your Service',
    
    // Pricing
    'pricing.title': 'Our Pricing',
    'pricing.subtitle': 'Affordable rates for quality service',
    'pricing.singleMowing.title': 'Single Lawn Mowing',
    'pricing.singleMowing.price': '$30',
    'pricing.singleMowing.period': 'per visit',
    'pricing.singleMowing.feature1': 'Professional grass cutting',
    'pricing.singleMowing.feature2': 'Edge trimming',
    'pricing.singleMowing.feature3': 'Debris cleanup',
    'pricing.singleMowing.feature4': 'One-time service',
    'pricing.monthlyMaintenance.title': 'Monthly Lawn Maintenance',
    'pricing.monthlyMaintenance.price': '$100',
    'pricing.monthlyMaintenance.period': '/month',
    'pricing.monthlyMaintenance.feature1': 'Weekly grass mowing',
    'pricing.monthlyMaintenance.feature2': 'Edge trimming',
    'pricing.monthlyMaintenance.feature3': 'Debris removal',
    'pricing.monthlyMaintenance.feature4': 'Consistent care all month',
    'pricing.pressureWashing.title': 'Pressure Washing',
    'pricing.pressureWashing.price': '$40+',
    'pricing.pressureWashing.period': '',
    'pricing.pressureWashing.feature1': 'Driveway cleaning',
    'pricing.pressureWashing.feature2': 'Patio and deck washing',
    'pricing.pressureWashing.feature3': 'Removal of tough stains',
    'pricing.pressureWashing.feature4': 'Price varies by area size',
    'pricing.mostPopular': 'Most Popular',
    'pricing.firstTimeDiscount.title': 'First-Time Customer Discount',
    'pricing.firstTimeDiscount.subtitle': 'Enjoy 10% off your first service booking!',
    'pricing.customPricing.title': 'Custom Pricing',
    'pricing.customPricing.subtitle': 'Contact us for custom care plans and special requirements.',
    'pricing.bookNow': 'Book Now',
    
    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Common questions about our Calgary lawn care services',
    'faq.areas.title': 'What areas of Calgary do you service?',
    'faq.areas.content': 'We proudly serve all neighborhoods in Calgary including Beltline, Bowness, Bridgeland, Capitol Hill, Crescent Heights, Downtown, Eau Claire, Forest Lawn, Hillhurst, Inglewood, Kensington, Marda Loop, McKenzie Towne, Mission, Mount Royal, Renfrew, Sunnyside, Tuscany, West Hillhurst, and surrounding communities.',
    'faq.frequency.title': 'How often should I mow my lawn in Calgary\'s climate?',
    'faq.frequency.content': 'Given Calgary\'s shorter growing season, we recommend weekly mowing during peak growing months (May-August) and bi-weekly during spring and fall. Our team adjusts cutting height based on seasonal conditions to ensure your lawn thrives despite Calgary\'s challenging climate.',
    'faq.eco.title': 'What eco-friendly practices do you use for Calgary lawns?',
    'faq.eco.content': 'We use environmentally responsible products and practices specifically chosen for Calgary\'s unique environment. This includes drought-resistant maintenance techniques, organic fertilizers when requested, and eco-friendly cleaning solutions for our pressure washing services that are safe for local waterways.',
    'faq.pressure.title': 'When is the best time to pressure wash my driveway in Calgary?',
    'faq.pressure.content': 'The ideal time for pressure washing in Calgary is late spring (May-June) after winter salt and debris have accumulated, and temperatures consistently stay above freezing. Fall is also a good time to clean before winter to prevent staining from leaves and prepare surfaces for snow and ice.',
    'faq.snow.title': 'Do you offer snow removal services in winter?',
    'faq.snow.content': 'Yes, we offer snow removal services throughout Calgary during winter months. Our services include driveway clearing, sidewalk shoveling, and ice management to keep your property safe and accessible during Calgary\'s snowy winters. Contact us for seasonal packages.',
    'faq.different.title': 'What makes your lawn care services different from other Calgary companies?',
    'faq.different.content': 'We stand out by offering truly eco-friendly services, exceptional attention to detail, and a deep understanding of Calgary\'s unique climate challenges. Our team has extensive experience with local grass types, soil conditions, and weather patterns, allowing us to provide customized care that produces better results for Calgary properties.',
    
    // Testimonials
    'testimonials.title': 'What Calgary Homeowners Say',
    'testimonials.subtitle': 'Trusted by homeowners throughout Calgary, AB',
    
    // Contact
    'contact.title': 'Get Your Free Quote Today',
    'contact.subtitle': 'Ready to transform your yard? Contact us for a free consultation.',
    
    // Footer
    'footer.title': 'ECO YARD CARE CALGARY',
    'footer.description': 'Professional lawn care & pressure washing services throughout Calgary, AB',
    'footer.serving': 'Serving all Calgary neighborhoods and surrounding areas',
    'footer.hours': 'Monday to Saturday, 8am - 6pm MT',
    'footer.copyright': 'Eco Yard Care Calgary. All rights reserved.',
    
    // Back to top
    'backToTop': 'Back to Top',
  },
  fr: {
    // Navigation
    'nav.services': 'Services',
    'nav.benefits': 'Avantages',
    'nav.testimonials': 'Témoignages',
    'nav.faq': 'FAQ',
    'nav.pricing': 'Tarifs',
    'nav.contact': 'Contact',
    'nav.bookNow': 'Réserver',
    
    // Hero
    'hero.title': 'GARDEZ VOTRE JARDIN VERT, PROPRE ET PROSPÈRE',
    'hero.subtitle': 'Services professionnels d\'aménagement paysager et de nettoyage haute pression à Calgary, AB — sans que vous leviez le petit doigt!',
    'hero.bookNow': 'Réserver',
    'hero.services': 'Nos Services Calgary',
    
    // Services
    'services.title': 'Nos Services d\'Entretien de Pelouse à Calgary',
    'services.subtitle': 'Services professionnels d\'entretien de jardin pour les propriétaires de Calgary',
    'services.lawnMowing.title': 'Tonte de Pelouse Calgary',
    'services.lawnMowing.description': 'Coupe professionnelle d\'herbe et entretien de pelouse pour garder votre jardin Calgary au meilleur de sa forme toute l\'année, même pendant notre courte saison de croissance.',
    'services.bushHedge.title': 'Taille de Buissons et Haies',
    'services.bushHedge.description': 'Taille et façonnage précis des buissons et haies pour améliorer l\'apparence de votre paysage Calgary, adapté à notre climat local.',
    'services.edgeTrimming.title': 'Bordure Trim',
    'services.edgeTrimming.description': 'Bordures nettes et précises le long des trottoirs Calgary, allées et parterres de jardin pour un look manucuré professionnel dans n\'importe quel quartier.',
    'services.garbageRemoval.title': 'Enlèvement d\'Ordures',
    'services.garbageRemoval.description': 'Enlèvement efficace de tout type d\'ordures, débris et objets indésirables de votre propriété Calgary, suivant les réglementations locales d\'élimination.',
    'services.gutterCleaning.title': 'Nettoyage de Gouttières',
    'services.gutterCleaning.description': 'Nettoyage approfondi des gouttières à travers Calgary pour enlever feuilles, saleté et débris, prévenant les dommages d\'eau à votre maison.',
    'services.pressureWashing.title': 'Nettoyage Haute Pression Calgary',
    'services.pressureWashing.description': 'Nettoyage haute pression de qualité pour les allées Calgary, terrasses en bois, portes de garage et plus - parfait pour enlever les résidus de sel d\'hiver.',
    'services.drivewayDeepCleaning.title': 'Nettoyage Profond d\'Allée',
    'services.drivewayDeepCleaning.description': 'Enlèvement de saleté incrustée, sel d\'hiver Calgary, mousse et huile de voiture des surfaces - restaurant votre allée à l\'état neuf.',
    'services.ecoFriendly.title': 'Services Écologiques',
    'services.ecoFriendly.description': 'Le choix de Calgary pour l\'entretien de jardin écologiquement responsable - utilisant exclusivement des détergents écologiques sans nuire à notre environnement local.',
    
    // Benefits
    'benefits.title': 'Pourquoi Nous Choisir',
    'benefits.subtitle': 'Les avantages de notre service professionnel',
    'benefits.ecoFriendly.title': 'Écologique',
    'benefits.ecoFriendly.item1': '100% détergents écologiques',
    'benefits.ecoFriendly.item2': 'Sûr pour animaux et enfants',
    'benefits.ecoFriendly.item3': 'Pratiques environnementales conscientes',
    'benefits.ecoFriendly.item4': 'Méthodes d\'entretien de pelouse durables',
    'benefits.professional.title': 'Professionnel',
    'benefits.professional.item1': 'Personnel expérimenté et formé',
    'benefits.professional.item2': 'Équipement de haute qualité',
    'benefits.professional.item3': 'Attention aux détails',
    'benefits.professional.item4': 'Service cohérent et fiable',
    'benefits.customerFocused.title': 'Axé sur le Client',
    'benefits.customerFocused.item1': 'Options de planification pratiques',
    'benefits.customerFocused.item2': 'Service client réactif',
    'benefits.customerFocused.item3': 'Forfaits de service sur mesure',
    'benefits.customerFocused.item4': 'Satisfaction garantie',
    'benefits.cta.title': 'Réservez aujourd\'hui et profitez demain!',
    'benefits.cta.subtitle': 'Obtenez 10% de réduction sur votre premier service en réservant maintenant',
    'benefits.cta.button': 'Réserver Votre Service',
    
    // Pricing
    'pricing.title': 'Nos Tarifs',
    'pricing.subtitle': 'Tarifs abordables pour un service de qualité',
    'pricing.singleMowing.title': 'Tonte de Pelouse Unique',
    'pricing.singleMowing.price': '30$',
    'pricing.singleMowing.period': 'par visite',
    'pricing.singleMowing.feature1': 'Coupe d\'herbe professionnelle',
    'pricing.singleMowing.feature2': 'Bordure trim',
    'pricing.singleMowing.feature3': 'Nettoyage des débris',
    'pricing.singleMowing.feature4': 'Service unique',
    'pricing.monthlyMaintenance.title': 'Entretien Mensuel de Pelouse',
    'pricing.monthlyMaintenance.price': '100$',
    'pricing.monthlyMaintenance.period': '/mois',
    'pricing.monthlyMaintenance.feature1': 'Tonte hebdomadaire d\'herbe',
    'pricing.monthlyMaintenance.feature2': 'Bordure trim',
    'pricing.monthlyMaintenance.feature3': 'Enlèvement de débris',
    'pricing.monthlyMaintenance.feature4': 'Soins constants tout le mois',
    'pricing.pressureWashing.title': 'Nettoyage Haute Pression',
    'pricing.pressureWashing.price': '40$+',
    'pricing.pressureWashing.period': '',
    'pricing.pressureWashing.feature1': 'Nettoyage d\'allée',
    'pricing.pressureWashing.feature2': 'Lavage de patio et terrasse',
    'pricing.pressureWashing.feature3': 'Enlèvement de taches tenaces',
    'pricing.pressureWashing.feature4': 'Prix varie selon la taille de la zone',
    'pricing.mostPopular': 'Le Plus Populaire',
    'pricing.firstTimeDiscount.title': 'Réduction Premier Client',
    'pricing.firstTimeDiscount.subtitle': 'Profitez de 10% de réduction sur votre première réservation de service!',
    'pricing.customPricing.title': 'Tarification Personnalisée',
    'pricing.customPricing.subtitle': 'Contactez-nous pour des plans de soins personnalisés et des exigences spéciales.',
    'pricing.bookNow': 'Réserver',
    
    // FAQ
    'faq.title': 'Questions Fréquemment Posées',
    'faq.subtitle': 'Questions communes sur nos services d\'entretien de pelouse Calgary',
    'faq.areas.title': 'Quelles zones de Calgary desservez-vous?',
    'faq.areas.content': 'Nous desservons fièrement tous les quartiers de Calgary incluant Beltline, Bowness, Bridgeland, Capitol Hill, Crescent Heights, Downtown, Eau Claire, Forest Lawn, Hillhurst, Inglewood, Kensington, Marda Loop, McKenzie Towne, Mission, Mount Royal, Renfrew, Sunnyside, Tuscany, West Hillhurst, et les communautés environnantes.',
    'faq.frequency.title': 'À quelle fréquence dois-je tondre ma pelouse dans le climat de Calgary?',
    'faq.frequency.content': 'Étant donné la saison de croissance plus courte de Calgary, nous recommandons une tonte hebdomadaire pendant les mois de croissance maximale (mai-août) et bi-hebdomadaire pendant le printemps et l\'automne. Notre équipe ajuste la hauteur de coupe selon les conditions saisonnières pour assurer que votre pelouse prospère malgré le climat difficile de Calgary.',
    'faq.eco.title': 'Quelles pratiques écologiques utilisez-vous pour les pelouses Calgary?',
    'faq.eco.content': 'Nous utilisons des produits et pratiques environnementalement responsables spécifiquement choisis pour l\'environnement unique de Calgary. Cela inclut des techniques d\'entretien résistantes à la sécheresse, des engrais organiques sur demande, et des solutions de nettoyage écologiques pour nos services de nettoyage haute pression qui sont sûres pour les voies d\'eau locales.',
    'faq.pressure.title': 'Quel est le meilleur moment pour nettoyer ma allée haute pression à Calgary?',
    'faq.pressure.content': 'Le moment idéal pour le nettoyage haute pression à Calgary est la fin du printemps (mai-juin) après que le sel d\'hiver et les débris se soient accumulés, et que les températures restent constamment au-dessus du gel. L\'automne est aussi un bon moment pour nettoyer avant l\'hiver pour prévenir les taches des feuilles et préparer les surfaces pour la neige et la glace.',
    'faq.snow.title': 'Offrez-vous des services de déneigement en hiver?',
    'faq.snow.content': 'Oui, nous offrons des services de déneigement à travers Calgary pendant les mois d\'hiver. Nos services incluent le déblaiement d\'allée, le pelletage de trottoir, et la gestion de glace pour garder votre propriété sûre et accessible pendant les hivers neigeux de Calgary. Contactez-nous pour des forfaits saisonniers.',
    'faq.different.title': 'Qu\'est-ce qui rend vos services d\'entretien de pelouse différents des autres compagnies Calgary?',
    'faq.different.content': 'Nous nous distinguons en offrant des services vraiment écologiques, une attention exceptionnelle aux détails, et une compréhension profonde des défis climatiques uniques de Calgary. Notre équipe a une vaste expérience avec les types d\'herbe locaux, les conditions de sol, et les modèles météorologiques, nous permettant de fournir des soins personnalisés qui produisent de meilleurs résultats pour les propriétés Calgary.',
    
    // Testimonials
    'testimonials.title': 'Ce que disent les propriétaires de Calgary',
    'testimonials.subtitle': 'Fait confiance par les propriétaires de Calgary, AB',
    
    // Contact
    'contact.title': 'Obtenez votre devis gratuit aujourd\'hui',
    'contact.subtitle': 'Prêt à transformer votre jardin? Contactez-nous pour une consultation gratuite.',
    
    // Footer
    'footer.title': 'ECO YARD CARE CALGARY',
    'footer.description': 'Services professionnels d\'entretien de pelouse et de nettoyage haute pression dans tout Calgary, AB',
    'footer.serving': 'Desservant tous les quartiers de Calgary et les environs',
    'footer.hours': 'Lundi au samedi, 8h - 18h MT',
    'footer.copyright': 'Eco Yard Care Calgary. Tous droits réservés.',
    
    // Back to top
    'backToTop': 'Retour en Haut',
  },
  uk: {
    // Navigation
    'nav.services': 'Послуги',
    'nav.benefits': 'Переваги',
    'nav.testimonials': 'Відгуки',
    'nav.faq': 'Питання',
    'nav.pricing': 'Ціни',
    'nav.contact': 'Контакти',
    'nav.bookNow': 'Замовити',
    
    // Hero
    'hero.title': 'ТРИМАЙТЕ ВАШ ДВІР ЗЕЛЕНИМ, ЧИСТИМ ТА КВІТУЧИМ',
    'hero.subtitle': 'Професійні послуги ландшафтного дизайну та мийки під тиском в Калгарі, AB — без ваших зусиль!',
    'hero.bookNow': 'Замовити',
    'hero.services': 'Наші Послуги в Калгарі',
    
    // Services
    'services.title': 'Наші Послуги Догляду за Газоном в Калгарі',
    'services.subtitle': 'Професійні послуги догляду за двором для власників будинків Калгарі',
    'services.lawnMowing.title': 'Косіння Газону Калгарі',
    'services.lawnMowing.description': 'Професійне підстригання трави та догляд за газоном, щоб ваш двір у Калгарі виглядав найкраще цілий рік, навіть протягом нашого короткого сезону росту.',
    'services.bushHedge.title': 'Обрізка Кущів та Живоплотів',
    'services.bushHedge.description': 'Точне підстригання та формування кущів та живоплотів для покращення зовнішнього вигляду вашого ландшафту Калгарі, адаптоване до нашого місцевого клімату.',
    'services.edgeTrimming.title': 'Обрізка Країв',
    'services.edgeTrimming.description': 'Чисті, гострі краї вздовж тротуарів Калгарі, під\'їзних доріжок та садових клумб для професійно доглянутого вигляду в будь-якому районі.',
    'services.garbageRemoval.title': 'Вивезення Сміття',
    'services.garbageRemoval.description': 'Ефективне вивезення будь-якого типу сміття, уламків та небажаних предметів з вашої власності в Калгарі, дотримуючись місцевих правил утилізації.',
    'services.gutterCleaning.title': 'Чищення Водостоків',
    'services.gutterCleaning.description': 'Ретельне чищення водостоків по всьому Калгарі для видалення листя, бруду та уламків, запобігаючи пошкодженню водою вашого будинку.',
    'services.pressureWashing.title': 'Мийка під Тиском Калгарі',
    'services.pressureWashing.description': 'Високоякісна мийка під тиском для під\'їзних доріжок Калгарі, дерев\'яних терас, гаражних воріт та більше - ідеально для видалення залишків зимової солі.',
    'services.drivewayDeepCleaning.title': 'Глибоке Очищення Під\'їзної Дороги',
    'services.drivewayDeepCleaning.description': 'Видалення въївшегося бруду, зимової солі Калгарі, моху та автомобільного масла з поверхонь - відновлення вашої під\'їзної дороги до стану нової.',
    'services.ecoFriendly.title': 'Екологічні Послуги',
    'services.ecoFriendly.description': 'Вибір Калгарі для екологічно відповідального догляду за двором - використовуючи виключно екологічні миючі засоби без шкоди для нашого місцевого середовища.',
    
    // Benefits
    'benefits.title': 'Чому Обрати Нас',
    'benefits.subtitle': 'Переваги нашого професійного сервісу',
    'benefits.ecoFriendly.title': 'Екологічно',
    'benefits.ecoFriendly.item1': '100% екологічні миючі засоби',
    'benefits.ecoFriendly.item2': 'Безпечно для домашніх тварин та дітей',
    'benefits.ecoFriendly.item3': 'Екологічно свідомі практики',
    'benefits.ecoFriendly.item4': 'Сталі методи догляду за газоном',
    'benefits.professional.title': 'Професійно',
    'benefits.professional.item1': 'Досвідчений та навчений персонал',
    'benefits.professional.item2': 'Високоякісне обладнання',
    'benefits.professional.item3': 'Увага до деталей',
    'benefits.professional.item4': 'Постійний, надійний сервіс',
    'benefits.customerFocused.title': 'Орієнтовано на Клієнта',
    'benefits.customerFocused.item1': 'Зручні варіанти планування',
    'benefits.customerFocused.item2': 'Чуйний сервіс клієнтів',
    'benefits.customerFocused.item3': 'Індивідуальні пакети послуг',
    'benefits.customerFocused.item4': 'Гарантія задоволення',
    'benefits.cta.title': 'Замовте сьогодні та насолоджуйтесь завтра!',
    'benefits.cta.subtitle': 'Отримайте 10% знижки на ваш перший сервіс при замовленні зараз',
    'benefits.cta.button': 'Замовити Ваш Сервіс',
    
    // Pricing
    'pricing.title': 'Наші Ціни',
    'pricing.subtitle': 'Доступні тарифи за якісний сервіс',
    'pricing.singleMowing.title': 'Одноразове Косіння Газону',
    'pricing.singleMowing.price': '$30',
    'pricing.singleMowing.period': 'за візит',
    'pricing.singleMowing.feature1': 'Професійне підстригання трави',
    'pricing.singleMowing.feature2': 'Обрізка країв',
    'pricing.singleMowing.feature3': 'Прибирання уламків',
    'pricing.singleMowing.feature4': 'Одноразовий сервіс',
    'pricing.monthlyMaintenance.title': 'Щомісячний Догляд за Газоном',
    'pricing.monthlyMaintenance.price': '$100',
    'pricing.monthlyMaintenance.period': '/місяць',
    'pricing.monthlyMaintenance.feature1': 'Щотижневе косіння трави',
    'pricing.monthlyMaintenance.feature2': 'Обрізка країв',
    'pricing.monthlyMaintenance.feature3': 'Видалення уламків',
    'pricing.monthlyMaintenance.feature4': 'Постійний догляд весь місяць',
    'pricing.pressureWashing.title': 'Мийка під Тиском',
    'pricing.pressureWashing.price': '$40+',
    'pricing.pressureWashing.period': '',
    'pricing.pressureWashing.feature1': 'Очищення під\'їзної дороги',
    'pricing.pressureWashing.feature2': 'Мийка патіо та тераси',
    'pricing.pressureWashing.feature3': 'Видалення стійких плям',
    'pricing.pressureWashing.feature4': 'Ціна залежить від розміру площі',
    'pricing.mostPopular': 'Найпопулярніший',
    'pricing.firstTimeDiscount.title': 'Знижка для Нових Клієнтів',
    'pricing.firstTimeDiscount.subtitle': 'Насолоджуйтесь 10% знижкою на ваше перше замовлення сервісу!',
    'pricing.customPricing.title': 'Індивідуальне Ціноутворення',
    'pricing.customPricing.subtitle': 'Зв\'яжіться з нами для індивідуальних планів догляду та спеціальних вимог.',
    'pricing.bookNow': 'Замовити',
    
    // FAQ
    'faq.title': 'Часто Задавані Питання',
    'faq.subtitle': 'Поширені питання про наші послуги догляду за газоном в Калгарі',
    'faq.areas.title': 'Які райони Калгарі ви обслуговуєте?',
    'faq.areas.content': 'Ми з гордістю обслуговуємо всі райони Калгарі, включаючи Beltline, Bowness, Bridgeland, Capitol Hill, Crescent Heights, Downtown, Eau Claire, Forest Lawn, Hillhurst, Inglewood, Kensington, Marda Loop, McKenzie Towne, Mission, Mount Royal, Renfrew, Sunnyside, Tuscany, West Hillhurst та прилеглі громади.',
    'faq.frequency.title': 'Як часто я повинен косити газон у кліматі Калгарі?',
    'faq.frequency.content': 'Враховуючи коротший сезон росту в Калгарі, ми рекомендуємо щотижневе косіння протягом пікових місяців росту (травень-серпень) та двічі на тиждень протягом весни та осені. Наша команда регулює висоту стрижки залежно від сезонних умов, щоб забезпечити процвітання вашого газону, незважаючи на складний клімат Калгарі.',
    'faq.eco.title': 'Які екологічні практики ви використовуєте для газонів Калгарі?',
    'faq.eco.content': 'Ми використовуємо екологічно відповідальні продукти та практики, спеціально обрані для унікального середовища Калгарі. Це включає техніки догляду, стійкі до посухи, органічні добрива за запитом та екологічні очищувальні розчини для наших послуг мийки під тиском, які безпечні для місцевих водних шляхів.',
    'faq.pressure.title': 'Коли найкращий час для мийки під тиском моєї під\'їзної дороги в Калгарі?',
    'faq.pressure.content': 'Ідеальний час для мийки під тиском в Калгарі - це пізня весна (травень-червень) після накопичення зимової солі та уламків, коли температури постійно тримаються вище нуля. Осінь також гарний час для очищення перед зимою, щоб запобігти плямам від листя та підготувати поверхні до снігу та льоду.',
    'faq.snow.title': 'Чи пропонуєте ви послуги з прибирання снігу взимку?',
    'faq.snow.content': 'Так, ми пропонуємо послуги з прибирання снігу по всьому Калгарі протягом зимових місяців. Наші послуги включають очищення під\'їзних доріжок, прибирання тротуарів та управління льодом, щоб підтримувати вашу власність безпечною та доступною протягом сніжних зим Калгарі. Зв\'яжіться з нами для сезонних пакетів.',
    'faq.different.title': 'Що робить ваші послуги догляду за газоном відмінними від інших компаній Калгарі?',
    'faq.different.content': 'Ми виділяємося, пропонуючи справді екологічні послуги, виняткову увагу до деталей та глибоке розуміння унікальних кліматичних викликів Калгарі. Наша команда має великий досвід роботи з місцевими типами трави, ґрунтовими умовами та погодними моделями, що дозволяє нам надавати індивідуальний догляд, який дає кращі результати для власностей Калгарі.',
    
    // Testimonials
    'testimonials.title': 'Що кажуть власники будинків Калгарі',
    'testimonials.subtitle': 'Довіряють власники будинків по всьому Калгарі, AB',
    
    // Contact
    'contact.title': 'Отримайте безкоштовну оцінку сьогодні',
    'contact.subtitle': 'Готові перетворити ваш двір? Зв\'яжіться з нами для безкоштовної консультації.',
    
    // Footer
    'footer.title': 'ECO YARD CARE CALGARY',
    'footer.description': 'Професійні послуги догляду за газоном та мийки під тиском по всьому Калгарі, AB',
    'footer.serving': 'Обслуговуємо всі райони Калгарі та околиці',
    'footer.hours': 'Понеділок - субота, 8:00 - 18:00 MT',
    'footer.copyright': 'Eco Yard Care Calgary. Всі права захищені.',
    
    // Back to top
    'backToTop': 'Повернутися Наверх',
  },
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('preferred-language') as Language;
    if (savedLanguage && ['en', 'fr', 'uk'].includes(savedLanguage)) {
      setLanguage(savedLanguage);
    }
  }, []);

  const handleSetLanguage = (lang: Language) => {
    setLanguage(lang);
    localStorage.setItem('preferred-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
