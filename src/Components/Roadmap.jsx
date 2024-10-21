import React from 'react';
import './Roadmap.css';

const Roadmap = () => {
  const roadmapData = [
    {
      quarter: "2024 Q4:",
      subtitle: "Project Launch and Community Engagement",
      description: "Officially launch the STXFWOG project and website. Release the game demo with basic frog training and harvesting features. Start building the community through social media, partnerships, and the introduction of unique NFT collectibles.",
      colorClass: "q1"
    },
    {
      quarter: "2025 Q1",
      subtitle: "Game Features Expansion",
      description: "Enhance the game by introducing frog evolution stages, advanced quests, and multiplayer leaderboards. Implement a referral program to encourage player engagement and community growth.",
      colorClass: "q2"
    },
    {
      quarter: "2024 Q3",
      subtitle: "Public testing and ecological construction",
      description: "Complete security audit, open beta test of online games on the TON main network, attract early users to try out games, establish cooperation with wallets and exchanges in the TON ecosystem, and promote Token circulation.",
      colorClass: "q3"
    },
    {
      quarter: "2025 Q2",
      subtitle: "Partnerships and Special Events",
      description: "Form strategic partnerships within the crypto and blockchain gaming space. Expand the NFT marketplace with new upgrades and launch special events to keep the community engaged.",
      colorClass: "q4"
    },
    {
      quarter: "2025 Q3",
      subtitle: "Community Governance and New Challenges",
      description: "Introduce a community governance model for token holders. Launch new game areas and quests, and host the first major STXFWOG virtual tournament for players to compete for rewards.",
      colorClass: "q5"
    },
    {
      quarter: "2025 Q4",
      subtitle: "Mobile App Development and Global Expansion",
      description: "Begin development of the STXFWOG mobile app for iOS and Android. Execute a global marketing campaign to attract new players and integrate further with the Stacks blockchain for enhanced features and scalability.",
      colorClass: "q6"
    }
  ];

  return (
    <div className="roadmap-container">
      <img src="./images/roadmap.png" alt="Roadmap" className='roadmap-img' />
      
      {roadmapData.map((item, index) => (
        <div 
          key={item.quarter} 
          className="quarter-block"
          style={{ '--index': index }}
        >
          <div className="quarter-info">
            <div className={`quarter-label ${item.colorClass}`}>
              {item.quarter}
            </div>
            <div className={`quarter-subtitle ${item.colorClass}`}>
              {item.subtitle}
            </div>
          </div>
          <div className={`description-box ${item.colorClass}`}>
            {item.description}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Roadmap;