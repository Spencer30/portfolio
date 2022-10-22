const about = {
    titleOne: "Back Story",
    contentOne:
      "I grew up in Kansas City and went to the University of Missouri for college. After college, I left Kansas City for the East Coast. I landed in Philadelphia where I worked in the investment accounting industry. I spent 7+ years in the industry before deciding to switch careers and moving back to Kansas City. It was a long journey to get there but my experiences have led me to become a software developer. I found real passion in coding and enjoy doing it outside of work. I love problem solving and coding has given me the chance to do that. ",
    titleThree: "Got An Idea?",
    contentThree:
      "I am happy to make that idea come to life! I enjoy taking on side projects outside of work and would love to help people get their dreams off the ground. If you need a website or mobile app, feel free to reach out. ",
    titleTwo: "Little More",
    contentTwo:
      "I'm currently a software developer working at a small shop here in Kansas City. I am full stack developer and work in primarly in php (laravel framework) and c# for the backend. For the frontend, it's either vue.js or alpine.js. In my free time and side projects, I will use React more than often as I'm a big fan of the library. I also enjoy developing in React Native when creating mobile apps.",
  };
  
const skills = {
    titleOne: "Problem Solving",
    contentOne:
      "I understand to solve a complex problem requires breaking the problem down, working through possible solutions and determining what is the best path forward.",
    titleTwo: "Business Acumen",
    contentTwo:
      "My experience has given me the opportunity to work with a wide range of clients, understand their needs and be able to effectively communicate back to the team.",
    titleThree: "Coding",
    contentThree:
      "I'm flexible when it comes to developing applications. Some applications might be better suited for one programming language compared to another depending on the scope of the project. ",
    list: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "React Native",
      "Node.js",
      "Vue.js",
      "Alpine.js",
      "SQL",
      "C#",
      "PHP/Laravel",
    ],
  };
  
const projects = [
    {
      id: 8,
      title: "Retro Lanes",
      summary:
        "Working with a client that wanted to redo his bowling alley website. Since the site was made in the early 2000's, I wanted to give it a fresh and updated look.",
      img: "./images/projects/retro/retroLanesReduced.png",
      coverImage: "./images/projects/retro/lane2.jpg",
      coverMini: "./images/projects/retro/lane2Mini.png",
      photos: [
        './images/projects/retro/retro1.png',
        './images/projects/retro/retro2.png',
        './images/projects/retro/retro3.png',
        './images/projects/retro/retro4.png',
        './images/projects/retro/retro5.png',
        './images/projects/retro/retro6.png'
      ],
      website: "https://festive-keller-753d09.netlify.app/",
      gitHub: "#Contact",
      public: false,
      techStack: "React, React Router",
      type: "Client",
      overview:
        "Working with a client that wanted to redo his bowling alley website. Since the site was made in the early 2000's, I wanted to give it a fresh and updated look. The website is being built with React and React Router.",
    },
    {
      id: 7,
      title: "Urban Tree Specialists",
      summary:
        "A client of mine was looking to get one of their customers a new website to launch at the end of fall. Their current website is a bit outdated. They wanted a fresh look with the same content.",
      photos:[
        './images/projects/urban/urban1.png',
        './images/projects/urban/urban2.png',
        './images/projects/urban/urban3.png',
        './images/projects/urban/urban4.png',
        './images/projects/urban/urban5.png'
      ],
      img: "./images/projects/urban/utsReduced.png",
      coverImage: "./images/projects/urban/treeLake.png",
      coverMini:"./images/projects/urban/treeLakeMini.png",
      website: "https://pensive-raman-96913f.netlify.app/",
      gitHub: "#Contact",
      public: false,
      techStack: "React, React Router",
      type: "Client",
      overview:
        'A client of mine was looking to get one of their customers a new website to launch at the end of fall. Their current website is a bit outdated and not responsive at all. They wanted a fresh look with the same content. The site is for a Tree Serivce company located in Kansas City. They provide a wide arrange of services and I wanted to highlight them in a way that was easy for users to see and understand. Since they are a small company with a small team, I also wanted to make sure users could "meet the team" with a profile page for each team member that highilights their experience. I felt adding a bit of personality to the site could add to the comfort level before deciding to get in touch with the company. I also made sure to add call to action buttons so the user is always being guided to reach out to the company.',
    },
    {
      id: 6,
      title: "Bowling Buddy",
      summary:
        "Keep track of your bowling games and stats. You can select your ball, alley, and type of bowling for each game. Track your progress and use stats to improve your game.",
      photos: [
        './images/projects/bowling-buddy/bowl1.png',
        './images/projects/bowling-buddy/bowl2.png',
        './images/projects/bowling-buddy/bowl3.png',
        './images/projects/bowling-buddy/bowl4.png',
        './images/projects/bowling-buddy/bowl5.png'
      ],
      img: './images/projects/bowling-buddy/bowlingBuddyReduced.png',
      coverImage: './images/projects/bowling-buddy/pins.jpg',
      coverMini:'./images/projects/bowling-buddy/pinsMini.png',
      website: "https://www.bowling-buddy.com/",
      gitHub: "#Contact",
      public: false,
      techStack: "React, Node, MySQL",
      type: "Personal",
      overview:
        "Bowling Buddy is a personal project I created during my time at LaunchCode. I initially planned to make something similar to my bowling calculator where you would just calc the score and then save your game. But I felt like I was learning a lot and felt I should challenge myself more so I decided to create a score and stat tracking application. When a user goes bowling, all they need to do is login to the site and begin a new game. Everytime they bowl a frame, they should record their pin fall. Bowling Buddy will calculate your score for you as you go along. During this time, you can also change the ball being used, the alley you are bowling at, and the type of bowling you are doing. When you finish your game(s), is when the magic of Bowling Buddy comes to life. You can see a dedicated stats page to see how you are performing. There you can filter on the bowling balls you have used, the alleys you bowled at and the types of bowling you do. Being able to see stats is critical to improving your game so you understand what you need to work on in practice. "
    },
    {
      id: 5,
      title: "Search The News",
      summary:
        "Search for your news using a Google like search. Widgets display your local weather and a random Dow Jones stock. Styled the app with Semantic UI.",
      photos:[
        './images/projects/news/news0.png',
        './images/projects/news/news1.png',
        './images/projects/news/news2.png',
        './images/projects/news/news3.png',
        './images/projects/news/news4.png'
      ],
      img: './images/projects/news/searchReduced.png',
      coverImage: './images/projects/news/city.png',
      coverMini:'./images/projects/news/cityMini.png',
      website: "https://search-the-news.herokuapp.com/",
      gitHub: "https://github.com/Spencer30/search-the-news",
      public: true,
      techStack: "React, Node",
      type: "Personal",
      overview:
        "Search for your news using a Google like search. Widgets display your local weather and a random Dow Jones stock. Styled the app with Semantic UI. I thought it would be pretty cool having a dedicated search engine just for news and thought this would give me some good practice working with API's and being able to handle and display the data. I tried to make a simple and fresh looking site. The site has a light and dark theme to give the user choice in their experience."
    },
    {
      id: 4,
      title: "Video Poker",
      summary:
        "Play video poker online. Taking a casino game and bringing it to the web. Play up to 4 credits. Keep track of your wins and win percentage while you play.",
      photos:[
        './images/projects/poker/poker1.png',
        './images/projects/poker/poker2.png',
        './images/projects/poker/poker3.png'
      ],
      img: './images/projects/poker/videoPokerReduced.png',
      coverImage: './images/projects/poker/casino.png',
      coverMini:'./images/projects/poker/casinoMini.png',
      website: "https://resplendent-marzipan-347f2b.netlify.app",
      gitHub: "https://github.com/Spencer30/video_poker",
      public: true,
      techStack: "React, Node",
      type: "Personal",
      overview:
        "Play video poker online. Taking a casino game and bringing it to the web. Play up to 4 credits. Keep track of your wins and win percentage while you play. My mom loves playing video poker and thought this would be a good project to get some more practice with React while being able to give her a game she likes to play.",
    },
    {
      id: 3,
      title: "SocialUp",
      summary:
        "A social chat application for large groups. SocialUp helps people find their fit within their group by joining circles and doing the things they currently enjoy.",
      photos:[
        './images/projects/social/social1.png',
        './images/projects/social/social2.png',
        './images/projects/social/social3.png',
        './images/projects/social/social4.png'
      ],
      img: './images/projects/social/socialUpReduced.png',
      coverImage: './images/projects/social/people.png',
      coverMini:'./images/projects/social/peopleMini.png',
      website: "https://socialup-new.herokuapp.com/",
      gitHub: "https://github.com/Spencer30/socialUp_react_website",
      public: true,
      techStack: "React, React Router, Node",
      type: "Personal",
      overview:
        "A social chat application for large groups. SocialUp helps people find their fit within their group by joining circles and doing the things they currently enjoy. In the age of covid, people are now realizing how important human relationships are. Our company at the time focused on just that. We wanted people within their already existing groups, whether it be their work, professional assoctiation, or religious group, to be able to connect offline with each other wjile doing the things they enjoy. When people build solid relationships with each other, the overall group thrives. We unforunately had to shutdown in 2019 but I wanted to redo our website since the old one was not the best and wanted the practice."
    },
    {
      id: 2,
      title: "BlackJack",
      summary:
        "Play blackjack online. Start with $500 and see how much you can win! I built this with HTML, CSS, and vanilla JavaScript. Rules are similar to what you see at a casino.",
      photos:[
        './images/projects/blackjack/bj1.png',
        './images/projects/blackjack/bj2.png',
        './images/projects/blackjack/bj3.png'
      ],
      img:'./images/projects/blackjack/blackJackReduced.png',
      coverImage: './images/projects/blackjack/blackjack1.PNG',
      coverMini: './images/projects/blackjack/blackjackMini.png',
      website: "https://spencer30.github.io/simple_blackjack/",
      gitHub: "https://github.com/Spencer30/simple_blackjack",
      public: true,
      techStack: "HTML, CSS, JavaScript",
      type: "Personal",
      overview:
        "Play blackjack online. Start with $500 and see how much you can win! I built this with HTML, CSS, and vanilla JavaScript. Rules are similar to what you see at a casino. One of my first projects. I feel like building games gives you good experience creating logic based off certain conditions."
    },
    {
      id: 1,
      title: "Bowling Calculator",
      summary:
        "My first JavaScript project. A simple web app that caluclates your score based off the number of pins you knock down. Simple, responsive and easy to use. My project philosphy.",
      photos:[
        './images/projects/bowl-calc/calc1.png',
        './images/projects/bowl-calc/calc2.png',
        './images/projects/bowl-calc/calc3.png',
        './images/projects/bowl-calc/calc4.png'
      ],
      img: './images/projects/bowl-calc/bowlReduced.png',
      coverImage: './images/projects/bowl-calc/pins1.jpg',
      coverMini: './images/projects/bowl-calc/pins1Mini.png',
      website: "https://spencer30.github.io/bowling-calculator/",
      gitHub: "https://github.com/Spencer30/bowling-calculator",
      public: true,
      techStack: "HTML, CSS, JavaScript",
      type: "Personal",
      overview:
        "My first JavaScript project. A simple web app that caluclates your score based off the number of pins you knock down. Simple, responsive and easy to use - my project philosophy. I learned a lot along the way and really help me start to grasp some of the fundamentals of JavaScript.",
    },
  ];
  