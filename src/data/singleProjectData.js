import Image1 from '../images/ashu.PNG';
import Image2 from '../images/ashu2.PNG';
import Image3 from '../images/ashu3.PNG';
import Image5 from '../images/Tourist2.jpg';
import Image6 from '../images/Tourist3.jpg';
import Image7 from '../images/Haile2.jpg';
import Image8 from '../images/Haile3.jpg';
import {
    FiFacebook,
    FiInstagram,
    FiLinkedin,
    FiTwitter,
    FiYoutube,
} from 'react-icons/fi';

export const singleProjectData = [
    {
        id: 1,
        ProjectHeader: {
            title: 'Event Management Website for NPOs',
            publishDate: 'May, 2017 E.C',
            tags: 'Full Stack, MERN',
        },
        ProjectImages: [
            { id: 1, title: 'Login Page UI', img: Image1 },
            { id: 2, title: 'Features of the System UI', img: Image2 },
            { id: 3, title: 'NPOs Event Management UI', img: Image3 },
        ],
        ProjectInfo: {
            ClientHeading: 'About Client',
            CompanyInfo: [
                { id: 1, title: 'Name', details: 'Arba Minch University' },
                { id: 2, title: 'Services', details: 'Event Management Solutions for Non-Profits' },
                { id: 3, title: 'Website', details: 'https://www.arbaMinch.edu.et' },
                { id: 4, title: 'Phone', details: '046 115 16 55' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'To empower non-profit organizations with a comprehensive event management platform that enhances collaboration, maximizes impact, and strengthens community engagement.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'MERN Stack (MongoDB, Express.js, React.js, Node.js)',
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'TailwindCSS',
                    ],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                { id: 1, details: 'Non-profit organizations often struggle with inefficient planning and communication gaps, which hinder their ability to maximize impact. The platform addresses these challenges by providing a user-friendly interface for event management.' },
                { id: 2, details: 'Limited access to data-driven decision-making and fragmented communication can lead to confusion and inefficiency in event execution.' },
                { id: 3, details: 'The need for a centralized platform that streamlines event planning, improves coordination among stakeholders, and ensures real-time communication.' },
                { id: 4, details: 'The project aims to modernize non-profit event planning, strengthen community engagement, and enhance organizational effectiveness.' },
            ],
        },
        SocialSharingHeading: 'Share This',
        SocialSharing: [
            { id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/realstoman' },
            { id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/bluefann_44' },
            { id: 3, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
            { id: 4, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
            { id: 5, name: 'Youtube', icon: <FiYoutube />, url: 'https://www.youtube.com/c/StomanStudio' },
        ],
        RelatedProject: {
            title: 'Related Projects',
            Projects: [
                { id: 1, title: 'Web Application', img: Image5 },
                { id: 2, title: 'UI Design', img: Image6 },
            ],
        },
    },
    // --- Project 2 ---
    {
        id: 2,
        ProjectHeader: {
            title: 'Tourist Hotel Website',
            publishDate: 'Jan, 2018 E.C',
            tags: 'Frontend, React',
        },
        ProjectImages: [
            { id: 1, title: 'Hotel Home Page', img: Image5 },
            { id: 2, title: 'Hotel Room UI', img: Image6 },
        ],
        ProjectInfo: {
            ClientHeading: 'About Client',
            CompanyInfo: [
                { id: 1, title: 'Name', details: 'Tourist Hotel' },
                { id: 2, title: 'Services', details: 'Hotel Booking Platform' },
                { id: 3, title: 'Website', details: 'https://touristhotel.com' },
                { id: 4, title: 'Phone', details: '046 123 45 67' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'To provide an easy-to-use hotel booking experience for tourists.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'React.js',
                        'HTML',
                        'CSS',
                        'JavaScript',
                        'Bootstrap',
                    ],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                { id: 1, details: 'Needed a modern, responsive website for hotel bookings.' },
                { id: 2, details: 'Integration with payment gateways and room management.' },
            ],
        },
        SocialSharingHeading: 'Share This',
        SocialSharing: [
            { id: 1, name: 'Twitter', icon: <FiTwitter />, url: 'https://twitter.com/' },
            { id: 2, name: 'Instagram', icon: <FiInstagram />, url: 'https://instagram.com/' },
        ],
        RelatedProject: {
            title: 'Related Projects',
            Projects: [
                { id: 1, title: 'Web Application', img: Image1 },
                { id: 2, title: 'UI Design', img: Image2 },
            ],
        },
    },
    // --- Project 3 ---
    {
        id: 3,
        ProjectHeader: {
            title: 'Haile Resort Arbaminch',
            publishDate: 'Mar, 2019 E.C',
            tags: 'UI/UX, Design',
        },
        ProjectImages: [
            { id: 1, title: 'Resort Home Page', img: Image2 },
            { id: 2, title: 'Resort Gallery', img: Image3 },
        ],
        ProjectInfo: {
            ClientHeading: 'About Client',
            CompanyInfo: [
                { id: 1, title: 'Name', details: 'Haile Resort' },
                { id: 2, title: 'Services', details: 'Resort & Hospitality' },
                { id: 3, title: 'Website', details: 'https://haileresoert.com' },
                { id: 4, title: 'Phone', details: '046 765 43 21' },
            ],
            ObjectivesHeading: 'Objective',
            ObjectivesDetails: 'To showcase the beauty and amenities of Haile Resort Arbaminch.',
            Technologies: [
                {
                    title: 'Tools & Technologies',
                    techs: [
                        'Figma',
                        'Adobe XD',
                        'Photoshop',
                    ],
                },
            ],
            ProjectDetailsHeading: 'Challenge',
            ProjectDetails: [
                { id: 1, details: 'Needed a visually appealing and informative website.' },
                { id: 2, details: 'Highlighting unique resort features and gallery.' },
            ],
        },
        SocialSharingHeading: 'Share This',
        SocialSharing: [
            { id: 1, name: 'Facebook', icon: <FiFacebook />, url: 'https://facebook.com/' },
            { id: 2, name: 'LinkedIn', icon: <FiLinkedin />, url: 'https://linkedin.com/' },
        ],
        RelatedProject: {
            title: 'Related Projects',
            Projects: [
                { id: 1, title: 'Web Application', img: Image7 },
                { id: 2, title: 'UI Design', img: Image8 },
            ],
        },
    },
];

export default singleProjectData;