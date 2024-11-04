import React, { useEffect, useState } from 'react';
import Section from './Section';
import ReactGA from 'react-ga4'

const gaId = process.env.REACT_APP_GA_TRACKING_ID;

ReactGA.initialize(gaId);

const Hunters = () => {
    const [content, setContent] = useState('mentors');
    

    const contentData = {
        sponsors: {
            title: 'Sponsors;',
            description: 'When you sponsor HackHive, you\'re not just placing your logo on a banner, you\'re associating your brand with dynamism, breakthrough ideas, and a knack for spotting and nurturing top talents. You\'ll get exposure to innovative solutions which can spark new insights for your business while also boosting your brand\'s credibility in the industry.',
            icons: [
                'https://www.hunterssss.in/images/logos/DEVFOLIO%20LOGO.png', 
                'https://www.hunterssss.in/images/logos/POLYGON%20LOGO.png',
                'https://www.hunterssss.in/images/logos/replit-light.png',
                'https://www.hunterssss.in/images/logos/GitHub_Logo_White.png',
                'https://www.hunterssss.in/images/logos/Postman_(software).png',
            ],
            registerLink: 'https://example.com/register-sponsors',
        },
        evangelist: {
            title: 'Evangelist;',
            description: 'Hackathon Evangelists are HackHive advocates who is passionate about hackathons and Communities. These are the folks who actively spread awareness and encourage people to get involved in the hackathon space.Being a Hackathon Evangelist means you are committed to bringing a change in your surroundings by helping others and contributing meaningfully! 🚀',
            
            registerLink: 'https://example.com/register-evangelist',
        },
        communityPartner: {
            title: 'Community Partner;',
            description: 'Community Partners are a group of active members who are passionate about people and have a sense of growth with a positive outlook of bringing change. These communities are thriving to build an inclusive and diverse culture where everyone is welcomed. Being a community partner of HackHive not only means that you will join hands to promote the hackathon but also that you are a strong believer in a collaboration that can support the larger masses 🚀.',
            icons: [
                'https://www.hunterssss.in/images/sponsors/WTM%20logo_stacked_rgb.png',
                'https://www.hunterssss.in/images/sponsors/GDGindore.png',
                'https://www.hunterssss.in/images/sponsors/hekors.png',
                'https://www.hunterssss.in/images/sponsors/mlsa.png',
                'https://www.hunterssss.in/images/sponsors/tensorflow_ug_indore_cover.jpeg',
            ],
            registerLink: 'https://example.com/register-community-partner',
        },
        judges: {
            title: 'Judges;',
            description: 'At HackHive, our judges are the heart and soul of our HackHive family! Our judges are not just experts; they\'re visionaries who evaluate the projects created by our brilliant participants. They provide valuable feedback and play an essential role in recognizing and celebrating exceptional contributions within the hackathon. They\'re the ones who get a front-row seat to the future of tech, analyzing solutions, and recognizing the coding gems that emerge. So, if you\'re passionate about coding ,sharing knowledge,and want to be part of a lively community, think about becoming a judge at HackHive. It\'s more than a role; it\'s an invitation to be at the forefront of a community driven intiative to empower tommorow\'s builders',
            
            registerLink: 'https://example.com/register-judges',
        },
        mentors: {
            title: 'Mentors;',
            description: 'At HackHive, our mentors are the heart and soul of our HackHive family.They are here to guide, inspire, and empower participants to take their coding skills to the next level.Mentoring is more than just giving; it\'s a dynamic exchange of ideas and collaboration. If you\'re passionate about coding and love sharing your knowledge, HackHive is the perfect place for you!',
            
            registerLink: 'https://example.com/register-mentors',
        },
    };

    return (
        <div className=" bg-black text-white flex flex-col md:flex-row">
            <div className="w-full md:w-1/3 flex flex-col items-center p-4 space-y-4 bg-gray-900">
                <h2 className="text-yellow-500 text-2xl font-bold mb-4">let's be a part :</h2>
                <p className="text-gray-400 mb-4">not a Hacker ?</p>

                <button onClick={() => setContent('sponsors')} className="w-full py-6 bg-gray-800 hover:bg-gray-700 rounded-lg text-center">Sponsors</button>
                <button onClick={() => setContent('evangelist')} className="w-full py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-center">Evangelist</button>
                <button onClick={() => setContent('communityPartner')} className="w-full py-8 bg-gray-800 hover:bg-gray-700 rounded-lg text-center">Community Partner</button>
                <button onClick={() => setContent('judges')} className="w-full py-4 bg-gray-800 hover:bg-gray-700 rounded-lg text-center">Judges</button>
                <button onClick={() => setContent('mentors')} className="w-full py-6 bg-gray-800 hover:bg-gray-700 rounded-lg text-center">Mentors</button>
            </div>

            <div className="w-full md:w-2/3 p-6 flex items-center justify-center">
                <div className="text-left max-w-lg">
                    {contentData[content] && (
                        <Section
                            title={contentData[content].title}
                            description={contentData[content].description}
                            icons={contentData[content].icons}
                            registerLink={contentData[content].registerLink}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Hunters;
