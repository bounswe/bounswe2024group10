const mockData = {
    subforums: [
        {
            id: 1,
            name: "BIST",
            posts: [
                {   
                    id: 101,
                    username: "finance_guru",
                    forumId: 1,
                    forumName: "BIST",
                    image: "https://forex.com.tr/wp-content/uploads/2016/08/bist-07042020-161139-3.jpg",
                    description: "Discussion about BIST trends.",
                    date: "2024-10-01",
                    time: "10:00",
                    likeCount: 50,
                    dislikeCount: 5,
                    commentCount: 12,
                    tags: ["BIST", "Stocks", "Investment"],
                    content: "The BIST index has been outperforming other markets in the region, especially in the energy sector. I strongly believe the upcoming reforms will push the index even higher. Energy stocks like Tüpraş and Enerjisa are my top picks. With a focus on clean energy, we might see a major shift in government policies favoring this sector. What do you all think?",
                    comments: [
                        {
                            username: "investor_jane",
                            postId: 101,
                            content: "Totally agree! I bought Tüpraş a few months ago and it has been doing wonders for my portfolio. I think the energy shift will benefit this sector immensely."
                        },
                        {
                            username: "john_smith",
                            postId: 101,
                            content: "I’m a bit concerned about short-term volatility in energy. Shouldn’t we be cautious with such stocks given the geopolitical landscape?"
                        },
                        {
                            username: "market_watcher",
                            postId: 101,
                            content: "Good point, John. I think diversification is key here. While energy is booming, I’m also looking into the financial sector to balance the risks."
                        },
                        {
                            username: "yasemin_aktas",
                            postId: 101,
                            content: "I’d also suggest keeping an eye on the technology sector. Turkey’s growing startup scene could soon reflect on BIST’s tech companies."
                        },
                        {
                            username: "finance_guru",
                            postId: 101,
                            content: "@john_smith It’s always good to be cautious, but I believe the energy reforms will provide long-term growth stability. Of course, hedging with financials, as @market_watcher suggests, makes sense."
                        }
                    ]
                },
                {
                    id: 102,
                    username: "newbie_investor",
                    forumId: 1,
                    forumName: "BIST",
                    image: null,
                    description: "How to invest in BIST?",
                    date: "2024-10-02",
                    time: "12:30",
                    likeCount: 25,
                    dislikeCount: 3,
                    commentCount: 5,
                    tags: ["BIST", "Investing", "Advice"],
                    content: "I’m new to investing and looking to get started with BIST. Should I focus on specific sectors or diversify my investments across the board? Also, what’s the best way to research and follow market trends? Any recommendations for tools or platforms?",
                    comments: [
                        {
                            username: "trader_tom",
                            postId: 102,
                            content: "Welcome to the world of investing! My advice would be to start with ETFs that cover a broad range of sectors. As you gain more confidence, you can start picking individual stocks."
                        },
                        {
                            username: "seasoned_veteran",
                            postId: 102,
                            content: "ETFs are definitely a safe way to start. I personally keep an eye on energy and technology sectors. For research, platforms like TradingView and Investing.com are great for real-time data."
                        },
                        {
                            username: "altug_kaya",
                            postId: 102,
                            content: "I'd recommend learning technical analysis too. It’s helpful to identify trends. You can try StockCharts or TradingView for easy charting."
                        },
                        {
                            username: "newbie_investor",
                            postId: 102,
                            content: "Thanks, @altug_kaya and @trader_tom! I’ll look into ETFs and try using TradingView to get a better grasp on technical analysis."
                        }
                    ]
                }
            ]
        },
        {
            id: 2,
            name: "GOLD",
            posts: [
                {
                    id: 201,
                    username: "gold_bug",
                    forumId: 2,
                    forumName: "GOLD",
                    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj3I0eQl0Yx1S5hswtxOuIIHNbPDYmjZOoeg&s",
                    description: "Is it the right time to invest in gold?",
                    date: "2024-10-03",
                    time: "09:15",
                    likeCount: 82,
                    dislikeCount: 6,
                    commentCount: 14,
                    tags: ["Gold", "Investment", "Market Trends"],
                    content: "With inflation rates climbing and the stock market looking volatile, many are turning to gold as a safe haven. I’m curious, is now the right time to buy gold? Should we expect further price increases, or is it smarter to hold off until after the next Federal Reserve meeting? I'd love to hear your thoughts on whether physical gold or gold ETFs are better at this time.",
                    comments: [
                        {
                            username: "wealth_advisor",
                            postId: 201,
                            content: "Gold has always been a solid hedge against inflation. If you're in for the long term, buying physical gold could be a good option, but ETFs offer more liquidity and are easier to manage."
                        },
                        {
                            username: "macro_economist",
                            postId: 201,
                            content: "The Federal Reserve meeting is definitely something to watch. If they raise interest rates, gold prices might drop temporarily. But long term, it’s still a safe bet."
                        },
                        {
                            username: "commodity_trader",
                            postId: 201,
                            content: "I prefer gold ETFs for flexibility. You avoid the hassle of storing physical gold, and you can sell more easily if needed."
                        },
                        {
                            username: "emily_williams",
                            postId: 201,
                            content: "I’m leaning towards physical gold. I’ve been burned by ETFs in the past. There’s something reassuring about having actual gold in hand during times of uncertainty."
                        },
                        {
                            username: "gold_bug",
                            postId: 201,
                            content: "@emily_williams I totally understand that sentiment. Physical gold does have a certain security, especially in times of crisis. I might diversify a bit into both!"
                        }
                    ]
                },
                {
                    id: 202,
                    username: "investor_james",
                    forumId: 2,
                    forumName: "GOLD",
                    image: null,
                    description: "Gold vs Crypto in 2024",
                    date: "2024-10-04",
                    time: "11:30",
                    likeCount: 65,
                    dislikeCount: 12,
                    commentCount: 16,
                    tags: ["Gold", "Crypto", "Investment"],
                    content: "With the rise of cryptocurrencies, I’ve been wondering how gold stacks up against them as a long-term investment. Do you all think crypto could eventually replace gold as a hedge against inflation, or is gold’s history too strong to be dethroned? What’s your preference for 2024 and beyond?",
                    comments: [
                        {
                            username: "crypto_king",
                            postId: 202,
                            content: "Crypto all the way! Bitcoin has already proven itself as a hedge against inflation in some markets. It’s the future, and gold will eventually lose its appeal."
                        },
                        {
                            username: "real_investor",
                            postId: 202,
                            content: "I’m sticking with gold. Crypto is far too volatile and unregulated to be a reliable hedge. Gold has stood the test of time for centuries."
                        },
                        {
                            username: "analyst_lisa",
                            postId: 202,
                            content: "Both have their merits. Gold is stable, but crypto has high potential for growth if you’re willing to take on more risk. Diversifying into both could be the best move."
                        },
                        {
                            username: "investor_james",
                            postId: 202,
                            content: "@analyst_lisa Diversifying sounds like a good approach. I think I’ll allocate a portion to both and keep a close eye on the market trends."
                        }
                    ]
                }
            ]
        },
        {
            id: 3,
            name: "NASDAQ",
            posts: [
                {
                    id: 301,
                    username: "tech_investor",
                    forumId: 3,
                    forumName: "NASDAQ",
                    image: "https://techstocks.com/nasdaq.jpg",
                    description: "Tech stocks on NASDAQ.",
                    date: "2024-10-04",
                    time: "14:00",
                    likeCount: 115,
                    dislikeCount: 10,
                    commentCount: 20,
                    tags: ["NASDAQ", "Tech Stocks", "Investment"],
                    content: "Tech stocks are on fire, especially giants like Apple, Google, and Amazon. But there are also emerging players in AI and cloud computing. How are you all positioning your portfolios in the current tech-driven market? Do you think the big names still have room to grow, or is it time to shift focus to smaller, more innovative companies?",
                    comments: [
                        {
                            username: "ai_enthusiast",
                            postId: 301,
                            content: "AI is the future, no doubt! I’m heavily invested in smaller AI companies working on cutting-edge tech. It’s risky, but the potential rewards are huge."
                        },
                        {
                            username: "blue_chip_loyalist",
                            postId: 301,
                            content: "I’m sticking with the big names for now. Apple and Google still have massive growth potential, especially with their expansion into AI and autonomous vehicles."
                        },
                        {
                            username: "john_doe",
                            postId: 301,
                            content: "Small-cap tech stocks can be lucrative, but they’re also highly volatile. I’d recommend balancing them with some established players like Microsoft and Amazon."
                        },
                        {
                            username: "susan_clarke",
                            postId: 301,
                            content: "Don’t sleep on cloud computing companies! They’re driving the tech revolution just as much as AI is. I’m heavily invested in AWS and Azure-related stocks."
                        }
                    ]
                },
                {
                    id: 302,
                    username: "day_trader",
                    forumId: 3,
                    forumName: "NASDAQ",
                    image: null,
                    description: "Is Tesla still a buy?",
                    date: "2024-10-05",
                    time: "10:00",
                    likeCount: 90,
                    dislikeCount: 8,
                    commentCount: 15,
                    tags: ["NASDAQ", "Tesla", "Electric Vehicles"],
                    content: "Tesla has had an incredible run, but with increasing competition from other electric vehicle manufacturers and some recent volatility, is Tesla still a buy at these levels? Or should we look to other players in the EV space like Rivian or Lucid Motors?",
                    comments: [
                        {
                            username: "ev_investor",
                            postId: 302,
                            content: "Tesla is still a leader in the EV market, but I think there’s more potential in newer companies like Rivian and Lucid. They’re smaller but have a lot of room to grow."
                        },
                        {
                            username: "long_term_bull",
                            postId: 302,
                            content: "I’m holding onto my Tesla shares. They’ve proven time and time again they can innovate and lead the market. Plus, their focus on autonomous driving could be the next big thing."
                        },
                        {
                            username: "risk_averse",
                            postId: 302,
                            content: "I’ve shifted my investments away from Tesla. It’s just too volatile for me right now. I’d rather play it safe with established automakers who are now transitioning into EVs."
                        }
                    ]
                }
            ]
        },
        {
            id: 4,
            name: "Real Estate",
            posts: [
                {
                    id: 401,
                    username: "property_mogul",
                    forumId: 4,
                    forumName: "Real Estate",
                    image: "https://cdn.statcdn.com/Infographic/images/normal/29562.jpeg",
                    description: "Real estate market trends.",
                    date: "2024-10-06",
                    time: "08:30",
                    likeCount: 75,
                    dislikeCount: 5,
                    commentCount: 10,
                    tags: ["Real Estate", "Market Trends", "Investment"],
                    content: "Real estate prices continue to skyrocket, especially in urban areas. I’m wondering if it’s too late to get in, or if there are still opportunities in suburban or rural markets. Also, what’s your take on commercial real estate? Is it set for a rebound post-pandemic?",
                    comments: [
                        {
                            username: "suburban_strategist",
                            postId: 401,
                            content: "Suburban markets are still growing, especially with remote work becoming more common. It’s not too late to invest, but prices are high."
                        },
                        {
                            username: "commercial_investor",
                            postId: 401,
                            content: "Commercial real estate is risky, but there are opportunities, especially in areas seeing a return to office work. Retail could see a rebound too."
                        },
                        {
                            username: "city_dweller",
                            postId: 401,
                            content: "Urban real estate will always have value, but I’m starting to invest in more rural properties. They’re cheaper, and with more people working remotely, the demand is increasing."
                        }
                    ]
                },
                {
                    id: 402,
                    username: "rental_king",
                    forumId: 4,
                    forumName: "Real Estate",
                    image: null,
                    description: "Short-term rentals vs long-term rentals?",
                    date: "2024-10-07",
                    time: "11:15",
                    likeCount: 50,
                    dislikeCount: 3,
                    commentCount: 8,
                    tags: ["Real Estate", "Rentals", "Investment"],
                    content: "I’m looking to expand my real estate portfolio and trying to decide between focusing on short-term rentals (Airbnb, VRBO) or long-term rentals. Which is more profitable in the current market, and what are the pros and cons of each?",
                    comments: [
                        {
                            username: "real_estate_guru",
                            postId: 402,
                            content: "It depends on your location. Short-term rentals can be highly profitable in tourist-heavy areas, but they also require more work and management. Long-term rentals are more stable but typically offer lower returns."
                        },
                        {
                            username: "property_owner",
                            postId: 402,
                            content: "I’ve had great success with short-term rentals, but as @real_estate_guru mentioned, it’s a lot of work. If you’re willing to manage it or hire a property manager, it’s worth it."
                        },
                        {
                            username: "long_term_view",
                            postId: 402,
                            content: "I prefer long-term rentals for the stability. You don’t have to worry about constant tenant turnover, and in the long run, property values tend to appreciate."
                        }
                    ]
                }
            ]
        },

                {
                    id: 5,
                    name: "Crypto & Blockchain",
                    posts: [
                        {
                            id: 501,
                            username: "crypto_enthusiast",
                            forumId: 5,
                            forumName: "Crypto & Blockchain",
                            image: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
                            description: "Bitcoin: Still worth buying in 2024?",
                            date: "2024-10-01",
                            time: "09:00",
                            likeCount: 150,
                            dislikeCount: 12,
                            commentCount: 25,
                            tags: ["Bitcoin", "Crypto", "Blockchain", "Investment"],
                            content: "Bitcoin has been through a lot since its inception—ups, downs, crashes, and surges. With 2024 already shaping up to be a volatile year, do you all think Bitcoin is still a solid investment? Some say institutional interest is growing, while others argue the regulatory crackdowns are making things more difficult. What’s your take?",
                            comments: [
                                {
                                    username: "hodl_forever",
                                    postId: 501,
                                    content: "Bitcoin is still the king. It’s the most established cryptocurrency with the largest network effect. It might be volatile, but long term, I believe it’s still going to go up. I'm holding no matter what!"
                                },
                                {
                                    username: "crypto_skeptic",
                                    postId: 501,
                                    content: "Honestly, I’m not sure Bitcoin has much room left to grow. It’s already so expensive, and with all the regulatory issues, it might struggle to gain widespread adoption as a real currency. I’ve been focusing on altcoins instead."
                                },
                                {
                                    username: "institutional_investor",
                                    postId: 501,
                                    content: "I think Bitcoin is transitioning into a ‘digital gold’ role. Institutional investors are treating it as a hedge against inflation, not necessarily a currency. So in that sense, there’s still demand, but it might not be as explosive as before."
                                },
                                {
                                    username: "blockchain_maximalist",
                                    postId: 501,
                                    content: "The real value is in Bitcoin’s underlying technology, blockchain. Even if Bitcoin itself doesn’t skyrocket, the future is in decentralized systems. BTC’s growth might slow down, but it paved the way for decentralized finance (DeFi) and smart contracts."
                                },
                                {
                                    username: "future_investor",
                                    postId: 501,
                                    content: "I think the game is just beginning. With countries like El Salvador making Bitcoin legal tender and talks of central banks developing their own digital currencies, I wouldn’t bet against Bitcoin just yet."
                                },
                                {
                                    username: "john_doe",
                                    postId: 501,
                                    content: "My concern is about environmental impact. The energy consumption for mining Bitcoin is huge, and I’m not sure how sustainable that is long term. Are there better alternatives?"
                                },
                                {
                                    username: "crypto_miner",
                                    postId: 501,
                                    content: "@john_doe There are definitely newer blockchains like Ethereum 2.0 and Cardano that use Proof of Stake (PoS), which is much more energy-efficient. Bitcoin might adapt eventually, but it’s a valid concern for now."
                                },
                                {
                                    username: "dca_strategist",
                                    postId: 501,
                                    content: "I think the best approach is Dollar-Cost Averaging (DCA). Bitcoin is volatile, but if you keep buying regularly, you’ll average out the highs and lows. That’s what I’ve been doing since 2017, and it’s worked pretty well for me."
                                }
                            ]
                        },
                        {
                            id: 502,
                            username: "eth_fanatic",
                            forumId: 5,
                            forumName: "Crypto & Blockchain",
                            image: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
                            description: "Is Ethereum 2.0 a game changer?",
                            date: "2024-10-02",
                            time: "11:30",
                            likeCount: 130,
                            dislikeCount: 8,
                            commentCount: 30,
                            tags: ["Ethereum", "Crypto", "Blockchain", "DeFi", "Investment"],
                            content: "Ethereum 2.0 finally launched, and with its move to Proof of Stake, gas fees are supposed to go down, and transactions will be faster and more scalable. Do you think this upgrade will solidify Ethereum’s position as the go-to platform for decentralized apps (dApps) and DeFi? Or will other platforms like Solana and Avalanche take over?",
                            comments: [
                                {
                                    username: "smart_contract_dev",
                                    postId: 502,
                                    content: "As a developer, I’m really excited about Ethereum 2.0. The reduced gas fees and increased scalability make it much more practical for deploying smart contracts. Solana is fast, but Ethereum has the developer community and network effect."
                                },
                                {
                                    username: "altcoin_believer",
                                    postId: 502,
                                    content: "I actually think Solana and Avalanche still have a chance. They’re much faster, and while Ethereum is reducing fees, the competition is fierce. Ethereum 2.0 is great, but other chains are already proving they can handle high throughput."
                                },
                                {
                                    username: "defi_master",
                                    postId: 502,
                                    content: "The real power of Ethereum is its role in DeFi. Most decentralized finance projects are built on Ethereum, and with ETH 2.0, the platform will be even better for building new financial products. DeFi is the future of finance, and Ethereum is leading the charge."
                                },
                                {
                                    username: "validator_node",
                                    postId: 502,
                                    content: "I’m staking my ETH now that it’s on Proof of Stake. The rewards are solid, and it’s a great way to participate in securing the network. The shift to PoS is a game changer for reducing the energy consumption issues we saw with Bitcoin."
                                },
                                {
                                    username: "traditional_investor",
                                    postId: 502,
                                    content: "I’m skeptical of Ethereum’s future dominance. Yes, ETH 2.0 addresses some scalability issues, but other platforms are much further along when it comes to high transaction volumes and energy efficiency. I’m more bullish on Solana."
                                },
                                {
                                    username: "jane_doe",
                                    postId: 502,
                                    content: "I’ve heard that institutional investors are getting interested in staking ETH, which could drive up demand. ETH 2.0 seems like it’s positioning Ethereum for more serious, long-term investment from traditional markets."
                                },
                                {
                                    username: "gas_fee_hater",
                                    postId: 502,
                                    content: "The gas fees were a killer for me. I stopped using Ethereum-based dApps because it was just too expensive. I hope ETH 2.0 really solves that issue."
                                },
                                {
                                    username: "solana_bull",
                                    postId: 502,
                                    content: "@gas_fee_hater I switched to Solana for the same reason. It’s just so much cheaper and faster. I’ll believe in ETH 2.0 when I actually see these improvements in action."
                                }
                            ]
                        },
                        {
                            id: 503,
                            username: "nft_collector",
                            forumId: 5,
                            forumName: "Crypto & Blockchain",
                            image: "https://cryptologos.cc/logos/decentraland-mana-logo.png",
                            description: "The future of NFTs: Hype or here to stay?",
                            date: "2024-10-03",
                            time: "14:45",
                            likeCount: 110,
                            dislikeCount: 20,
                            commentCount: 40,
                            tags: ["NFT", "Crypto", "Blockchain", "Digital Art"],
                            content: "NFTs exploded in 2021, but now, after a few years, the market seems to have cooled down a bit. Do you think NFTs were just a passing trend, or are they here to stay as a major part of the digital economy? Are there any new projects or platforms that stand out?",
                            comments: [
                                {
                                    username: "digital_artist",
                                    postId: 503,
                                    content: "As a digital artist, I’m still very bullish on NFTs. They’ve revolutionized how artists can monetize their work. Platforms like Decentraland and Sandbox are also pushing the boundaries with virtual real estate and digital collectibles."
                                },
                                {
                                    username: "nft_investor",
                                    postId: 503,
                                    content: "I think the hype has died down, but that’s a good thing. It’s weeding out the cash grabs and leaving room for more legitimate projects. I’m still holding some high-value NFTs, and I’m confident they’ll appreciate over time."
                                },
                                {
                                    username: "skeptical_trader",
                                    postId: 503,
                                    content: "I’m not sure. A lot of the NFT market felt like speculation and hype. Prices for some of the top NFTs have plummeted since the peak. I think they’ll stick around, but the wild valuations we saw before are probably gone."
                                },
                                {
                                    username: "blockchain_gamer",
                                    postId: 503,
                                    content: "NFTs in gaming are really where I see the most potential. The idea of owning in-game items that can be traded across platforms is really exciting. Projects like Axie Infinity and others have shown there’s real demand for this."
                                },
                                {
                                    username: "environmentalist",
                                    postId: 503,
                                    content: "One issue that’s still concerning is the environmental impact of NFTs, especially those built on Ethereum before ETH 2.0. That said, platforms like Tezos are more eco-friendly and could help make NFTs more sustainable."
                                },
                                {
                                    username: "virtual_real_estate_mogul",
                                    postId: 503,
                                    content: "I’m really into virtual real estate. I’ve bought parcels in Decentraland, and I’m renting them out. The metaverse is going to be huge, and owning digital land will be like owning real land one day."
                                },
                                {
                                    username: "crypto_punk_lover",
                                    postId: 503,
                                    content: "CryptoPunks will always be iconic in the NFT space. They were the OGs of NFTs, and I think their cultural significance will keep their value high."
                                },
                                {
                                    username: "ceo_visionary",
                                    postId: 503,
                                    content: "NFTs are more than just art or collectibles. I think we’re just scratching the surface of what NFTs can be used for, like identity verification, intellectual property, and ticketing for events. It’s a technology that’s here to stay."
                                }
                            ]
                        },
                        {
                            id: 504,
                            username: "metaverse_builder",
                            forumId: 5,
                            forumName: "Crypto & Blockchain",
                            image: "https://cryptologos.cc/logos/sandbox-sand-logo.png",
                            description: "The rise of the Metaverse: Hype or revolution?",
                            date: "2024-10-04",
                            time: "17:30",
                            likeCount: 140,
                            dislikeCount: 15,
                            commentCount: 35,
                            tags: ["Metaverse", "NFT", "Blockchain", "Virtual Reality"],
                            content: "The concept of the Metaverse has been gaining a lot of attention lately, with major companies like Facebook (Meta), Microsoft, and decentralized platforms like Sandbox and Decentraland all trying to stake their claim. Do you all think the Metaverse is going to be the next big thing, or is it just another overhyped concept that will fizzle out?",
                            comments: [
                                {
                                    username: "vr_gamer",
                                    postId: 504,
                                    content: "As a VR gamer, I’m incredibly excited about the Metaverse. The potential for immersive experiences is massive. We’re already seeing early stages with platforms like VRChat, and it’s only going to get bigger."
                                },
                                {
                                    username: "meta_skeptic",
                                    postId: 504,
                                    content: "The Metaverse seems like hype to me. People don’t even spend enough time in the current virtual spaces we have. I can’t see it becoming mainstream unless there’s a massive technological breakthrough."
                                },
                                {
                                    username: "sandbox_fan",
                                    postId: 504,
                                    content: "I’ve been building and creating in Sandbox for a while now, and I believe the decentralized Metaverse is the way to go. Owning virtual land and building whatever you want on it is revolutionary."
                                },
                                {
                                    username: "corporate_shill",
                                    postId: 504,
                                    content: "I think Facebook (Meta) will dominate the Metaverse just like it did with social media. They have the resources to make this thing go mainstream, and we’ll all be using Meta’s platforms in the next few years."
                                },
                                {
                                    username: "decentralized_visionary",
                                    postId: 504,
                                    content: "I hope not! The beauty of the Metaverse is that it can be decentralized, where users actually own their assets and data. Big corporations controlling the Metaverse would defeat the whole purpose."
                                },
                                {
                                    username: "real_estate_investor",
                                    postId: 504,
                                    content: "Virtual real estate in the Metaverse is a booming market. I’ve already bought plots in both Sandbox and Decentraland, and I’m planning on holding for the long term. It’s like buying land in a new world."
                                }
                            ]
                        }
                    ]
                }


        
    ],
    allUsers : [
        {
          name: 'Daron',
          surname: 'Acemoglu',
          username: 'daronnacemoglu',
          avatar:
            'https://mitsloan.mit.edu/sites/default/files/styles/profile_detail_headshot/public/profile-images/2024/06/19/profile-image-61349.jpeg?h=fbf7a813&itok=Iwywgvzd',
          followers: 150000,
          posts: 205,
          postList: [4, 5, 9, 13],
      
          followedUsers: ['warrenbuffet', 'gulsensabak'],
        },
        {
          name: 'Gulsen',
          surname: 'Sabak',
          username: 'gulsensabak',
          avatar:
            'https://media.licdn.com/dms/image/v2/D4D03AQGTfgK0m3eIFw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1724777725675?e=1735171200&v=beta&t=tS9Smt7QoMB-GsvxoruAiPItiRKgJrQo8-xSdgWrYfs',
          followers: 85000,
          posts: 178,
          postList: [1, 2, 14],
          followedUsers: ['daronnacemoglu', 'warrenbuffet'],
        },
        {
          name: 'Kivanc',
          surname: 'Karaman',
          username: 'kivanc_karaman',
          avatar:
            'https://pbs.twimg.com/profile_images/1495045642472861698/HUMUox6W_400x400.jpg',
          followers: 60000,
          posts: 124,
          postList: [6, 7, 10, 16],
          followedUsers: ['daronnacemoglu', 'gulsensabak'],
        },
        {
          name: 'Warren',
          surname: 'Buffet',
          username: 'warrenbuffet',
          avatar:
            'https://i.gazeteoksijen.com/storage/files/images/2024/06/29/warren-buffett-vasiyetini-acikladi-gates-vakfina-para-yok-j4wu.jpg',
          followers: 450000,
          posts: 310,
          postList: [11, 3, 15, 12, 8],
          followedUsers: ['daronnacemoglu', 'kivanc_karaman'],
        },
      ],
      allTags : [
        {
          id: 1,
          label: 'Investments',
          posts: 3213,
          people: 134,
        },
        {
          id: 2,
          label: 'Cryptocurrency',
          posts: 5871,
          people: 257,
        },
        {
          id: 3,
          label: 'RealEstate',
          posts: 2459,
          people: 98,
        },
        {
          id: 4,
          label: 'Stocks',
          posts: 7654,
          people: 312,
        },
        {
          id: 5,
          label: 'Bonds',
          posts: 1492,
          people: 58,
        },
        {
          id: 6,
          label: 'Commodities',
          posts: 1893,
          people: 76,
        },
        {
          id: 7,
          label: 'Gold&Silver',
          posts: 1324,
          people: 43,
        },
        {
          id: 8,
          label: 'PensionPlans',
          posts: 1021,
          people: 56,
        },
        {
          id: 9,
          label: 'PersonalFinance',
          posts: 9847,
          people: 431,
        },
        {
          id: 10,
          label: 'Budgeting',
          posts: 4035,
          people: 187,
        },
        {
          id: 11,
          label: 'Savings',
          posts: 6578,
          people: 224,
        },
        {
          id: 12,
          label: 'DebtManagement',
          posts: 3121,
          people: 143,
        },
        {
          id: 13,
          label: 'Taxes',
          posts: 2754,
          people: 97,
        },
        {
          id: 14,
          label: 'Retirement',
          posts: 3541,
          people: 126,
        },
        {
          id: 15,
          label: 'Insurance',
          posts: 1932,
          people: 81,
        },
        {
          id: 16,
          label: 'FinancialPlanning',
          posts: 4345,
          people: 212,
        },
        {
          id: 17,
          label: 'WealthManagement',
          posts: 2871,
          people: 109,
        },
        {
          id: 18,
          label: 'InvestmentStrategies',
          posts: 5128,
          people: 183,
        },
        {
          id: 19,
          label: 'TaxOptimization',
          posts: 1832,
          people: 63,
        },
        {
          id: 20,
          label: 'StockMarket',
          posts: 9125,
          people: 378,
        },
        {
          id: 21,
          label: 'ETF',
          posts: 2741,
          people: 89,
        },
        {
          id: 22,
          label: 'MutualFunds',
          posts: 3524,
          people: 123,
        },
        {
          id: 23,
          label: 'HedgeFunds',
          posts: 1987,
          people: 72,
        },
        {
          id: 24,
          label: 'IndexFunds',
          posts: 2473,
          people: 84,
        },
        {
          id: 25,
          label: 'ForexTrading',
          posts: 5648,
          people: 275,
        },
        {
          id: 26,
          label: 'OptionsTrading',
          posts: 2349,
          people: 110,
        },
        {
          id: 27,
          label: 'FuturesTrading',
          posts: 1287,
          people: 58,
        },
        {
          id: 28,
          label: 'RealEstateInvestmentTrusts(REITs)',
          posts: 1348,
          people: 49,
        },
        {
          id: 29,
          label: 'DividendInvesting',
          posts: 4523,
          people: 198,
        },
        {
          id: 30,
          label: 'ValueInvesting',
          posts: 3256,
          people: 139,
        },
        {
          id: 31,
          label: 'GrowthInvesting',
          posts: 4129,
          people: 162,
        },
        {
          id: 32,
          label: 'VentureCapital',
          posts: 1578,
          people: 61,
        },
        {
          id: 33,
          label: 'AngelInvesting',
          posts: 1432,
          people: 54,
        },
        {
          id: 34,
          label: 'Crowdfunding',
          posts: 1945,
          people: 72,
        },
        {
          id: 35,
          label: 'Peer-to-PeerLending',
          posts: 2187,
          people: 80,
        },
        {
          id: 36,
          label: 'SavingsAccounts',
          posts: 1679,
          people: 67,
        },
        {
          id: 37,
          label: 'CreditCards',
          posts: 2983,
          people: 109,
        },
        {
          id: 38,
          label: 'Loans',
          posts: 3211,
          people: 118,
        },
        {
          id: 39,
          label: 'Mortgage',
          posts: 2746,
          people: 105,
        },
        {
          id: 40,
          label: 'AutoLoans',
          posts: 1847,
          people: 69,
        },
        {
          id: 41,
          label: 'StudentLoans',
          posts: 2412,
          people: 88,
        },
        {
          id: 42,
          label: 'EmergencyFunds',
          posts: 1564,
          people: 58,
        },
        {
          id: 43,
          label: 'FinancialIndependence',
          posts: 3724,
          people: 135,
        },
        {
          id: 44,
          label: 'EarlyRetirement',
          posts: 2941,
          people: 116,
        },
        {
          id: 45,
          label: 'FIREMovement',
          posts: 2132,
          people: 77,
        },
        {
          id: 46,
          label: 'SideHustles',
          posts: 4357,
          people: 196,
        },
        {
          id: 47,
          label: 'Freelancing',
          posts: 4892,
          people: 221,
        },
        {
          id: 48,
          label: 'PassiveIncome',
          posts: 5764,
          people: 243,
        },
        {
          id: 49,
          label: 'SmallBusiness',
          posts: 3921,
          people: 184,
        },
        {
          id: 50,
          label: 'Entrepreneurship',
          posts: 6541,
          people: 267,
        },
        {
          id: 51,
          label: 'MicroEconomy',
          posts: 4321,
          people: 189,
        },
        {
          id: 52,
          label: 'CryptoEconomy',
          posts: 5432,
          people: 198,
        },
      ],
      allAssets : [
        {
          abbreviation: 'BTC',
          label: 'Bitcoin',
          image: 'https://example.com/btc.png',
        },
        {
          abbreviation: 'ETH',
          label: 'Ethereum',
          image: 'https://example.com/eth.png',
        },
        {
          abbreviation: 'LTC',
          label: 'Litecoin',
          image: 'https://example.com/ltc.png',
        },
        {
          abbreviation: 'AAPL',
          label: 'Apple Inc.',
          image: 'https://example.com/aapl.png',
        },
        {
          abbreviation: 'GOOGL',
          label: 'Alphabet Inc.',
          image: 'https://example.com/googl.png',
        },
        {
          abbreviation: 'AMZN',
          label: 'Amazon.com Inc.',
          image: 'https://example.com/amzn.png',
        },
        {
          abbreviation: 'TSLA',
          label: 'Tesla Inc.',
          image: 'https://example.com/tsla.png',
        },
        {
          abbreviation: 'XAU',
          label: 'Gold',
          image: 'https://example.com/xau.png',
        },
        {
          abbreviation: 'XAG',
          label: 'Silver',
          image: 'https://example.com/xag.png',
        },
        {
          abbreviation: 'EURUSD',
          label: 'Euro/US Dollar',
          image: 'https://example.com/eurusd.png',
        },
        {
          abbreviation: 'GBPUSD',
          label: 'British Pound/US Dollar',
          image: 'https://example.com/gbpusd.png',
        },
        {
          abbreviation: 'USDJPY',
          label: 'US Dollar/Japanese Yen',
          image: 'https://example.com/usdjpy.png',
        },
        {
          abbreviation: 'USDCAD',
          label: 'US Dollar/Canadian Dollar',
          image: 'https://example.com/usdcad.png',
        },
        {
          abbreviation: 'WTI',
          label: 'West Texas Intermediate (Crude Oil)',
          image: 'https://example.com/wti.png',
        },
        {
          abbreviation: 'BRN',
          label: 'Brent Crude Oil',
          image: 'https://example.com/brn.png',
        },
        {
          abbreviation: 'SP500',
          label: 'S&P 500 Index',
          image: 'https://example.com/sp500.png',
        },
        {
          abbreviation: 'DJIA',
          label: 'Dow Jones Industrial Average',
          image: 'https://example.com/djia.png',
        },
        {
          abbreviation: 'NDAQ',
          label: 'NASDAQ 100 Index',
          image: 'https://example.com/ndaq.png',
        },
        {
          abbreviation: 'BABA',
          label: 'Alibaba Group',
          image: 'https://example.com/baba.png',
        },
        {
          abbreviation: 'NFLX',
          label: 'Netflix Inc.',
          image: 'https://example.com/nflx.png',
        },
        {
          abbreviation: 'MSFT',
          label: 'Microsoft Corporation',
          image: 'https://example.com/msft.png',
        },
        {
          abbreviation: 'V',
          label: 'Visa Inc.',
          image: 'https://example.com/visa.png',
        },
        {
          abbreviation: 'JPM',
          label: 'JPMorgan Chase & Co.',
          image: 'https://example.com/jpm.png',
        },
        {
          abbreviation: 'FB',
          label: 'Meta Platforms (Facebook)',
          image: 'https://example.com/fb.png',
        },
        {
          abbreviation: 'BA',
          label: 'The Boeing Company',
          image: 'https://example.com/ba.png',
        },
        {
          abbreviation: 'NVDA',
          label: 'NVIDIA Corporation',
          image: 'https://example.com/nvda.png',
        },
        {
          abbreviation: 'EUR',
          label: 'Euro',
          image: 'https://example.com/eur.png',
        },
        {
          abbreviation: 'USD',
          label: 'US Dollar',
          image: 'https://example.com/usd.png',
        },
        {
          abbreviation: 'GBP',
          label: 'British Pound',
          image: 'https://example.com/gbp.png',
        },
        {
          abbreviation: 'JPY',
          label: 'Japanese Yen',
          image: 'https://example.com/jpy.png',
        },
        {
          abbreviation: 'CAD',
          label: 'Canadian Dollar',
          image: 'https://example.com/cad.png',
        },
        {
          abbreviation: 'AUD',
          label: 'Australian Dollar',
          image: 'https://example.com/aud.png',
        },
        {
          abbreviation: 'CHF',
          label: 'Swiss Franc',
          image: 'https://example.com/chf.png',
        },
        {
          abbreviation: 'CNY',
          label: 'Chinese Yuan',
          image: 'https://example.com/cny.png',
        },
        {
          abbreviation: 'MXN',
          label: 'Mexican Peso',
          image: 'https://example.com/mxn.png',
        },
        {
          abbreviation: 'SGD',
          label: 'Singapore Dollar',
          image: 'https://example.com/sgd.png',
        },
        {
          abbreviation: 'KRW',
          label: 'South Korean Won',
          image: 'https://example.com/krw.png',
        },
        {
          abbreviation: 'RUB',
          label: 'Russian Ruble',
          image: 'https://example.com/rub.png',
        },
        {
          abbreviation: 'ZAR',
          label: 'South African Rand',
          image: 'https://example.com/zar.png',
        },
        {
          abbreviation: 'TRY',
          label: 'Turkish Lira',
          image: 'https://example.com/try.png',
        },
        {
          abbreviation: 'HKD',
          label: 'Hong Kong Dollar',
          image: 'https://example.com/hkd.png',
        },
        {
          abbreviation: 'INR',
          label: 'Indian Rupee',
          image: 'https://example.com/inr.png',
        },
        {
          abbreviation: 'BRL',
          label: 'Brazilian Real',
          image: 'https://example.com/brl.png',
        },
        {
          abbreviation: 'ARS',
          label: 'Argentine Peso',
          image: 'https://example.com/ars.png',
        },
        {
          abbreviation: 'CLP',
          label: 'Chilean Peso',
          image: 'https://example.com/clp.png',
        },
        {
          abbreviation: 'NZD',
          label: 'New Zealand Dollar',
          image: 'https://example.com/nzd.png',
        },
        {
          abbreviation: 'COP',
          label: 'Colombian Peso',
          image: 'https://example.com/cop.png',
        },
      ].map((asset, index) => ({
        ...asset,
        id: index + 1,
      }))
};

export default mockData;
