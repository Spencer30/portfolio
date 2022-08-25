const about = {
    titleOne: "Back Story",
    contentOne:
      "I grew up in Kansas City and went to the University of Missouri for college. After college, I left Kansas City for the East Coast. I landed in Philadelphia where I worked in the investment accounting industry. After 7+ years in the investment accounting industry and a run at entrepreneurship, my experiences have led me to become a software developer. I found more passion in coding than I have with any other industry. I love problem solving and coding has given me the chance to expand on those skills.",
    titleTwo: "LauchCode Graduate",
    contentTwo:
      "I graduated from LaunchCode's LC101 program this past March and just finished their LiftOff program in June. LaunchCode is a national nonprofit offering free tech education and job placement opportunities. Their goal is to bring new people from all backgrounds into the tech field and reshape the way employers think about hiring. LaunchCode is highly competitive. The amount of value and education the program offers is exceptional and I'm very thankful to get that experience. My goal is to take my knowledge and apply it to the real world.",
    titleThree: "Ready To Work",
    contentThree:
      "I'm currently seeking a role as a full time developer. My strength is with JavaScript, so I would love to work with React or Node but eager to learn other frameworks and languages. I enjoy working in small teams and in a collaborative environment where ideas and thoughts are shared freely to solve problems. My business background has given me the chance to see both sides of the equation between business and technology teams. I understand the high cost that comes with breakdown of communication between the two. I believe I can help fill those gaps and make sure challenges from both sides are communicated effectively.",
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
      "In addition to LaunchCode, I have been teaching myself to code for the last nine months and have developed a strong passion for it. Major problems can be solved with a few lines of code. I enjoy working with Javascript, especially React.",
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
      img: "../images/retroLanesReduced.png",
      coverImage: "../images/lane2.jpg",
      coverMini: "../images/lane2Mini.png",
      // photos: retro,
      website: "https://festive-keller-753d09.netlify.app/",
      gitHub: "#Contact",
      public: false,
      techStack: "React, React Router",
      type: "Client",
      overview:
        "Working with a client that wanted to redo his bowling alley website. Since the site was made in the early 2000's, I wanted to give it a fresh and updated look. The website is being built with React and React Router.",
      stackReasons:
        "This website is built with React and React Router. I love using React and continue to use it for my projects. React just makes creating any type of user interfaces easy and can help you deliver a great experience to the end user. I like being able to keep the content/data seperated from the view and then just bind to it. It helps me keep my components smaller and less content to navigate through when looking at the code. I'm using React Router to navigate to different routes in the site. React Router makes it look like your navigating to a different page which will give the user the impression of a fast site. As I continue to build projects with React, I have re-usable components that I'm able to use in other projects which really keeps me coming back to React.",
      challenges:
        "It was fun building this site. It was pretty straight forward and so I didn't comes across to many problems along the way. One of my favorite parts of the site is on the pricing section. Once the user navigates to the section, they can easily tell the pricing based on whatever day it is. This was fairly easy to accomplish with Javascript. First, I get the day using the Date library provided by Javascript then used a switch statement to figure out the day. Pass that information into the component and then styled it based on the active day vs inactive day. React makes little things like this easy and with only a few lines of code.",
    },
    {
      id: 7,
      title: "Urban Tree Specialists",
      summary:
        "A client of mine was looking to get one of their customers a new website to launch at the end of fall. Their current website is a bit outdated. They wanted a fresh look with the same content.",
      // photos:trees,
      website: "https://pensive-raman-96913f.netlify.app/",
      gitHub: "#Contact",
      public: false,
      techStack: "React, React Router",
      type: "Client",
      overview:
        'A client of mine was looking to get one of their customers a new website to launch at the end of fall. Their current website is a bit outdated and not responsive at all. They wanted a fresh look with the same content. The site is for a Tree Serivce company located in Kansas City. They provide a wide arrange of services and I wanted to highlight them in a way that was easy for users to see and understand. Since they are a small company with a small team, I also wanted to make sure users could "meet the team" with a profile page for each team member that highilights their experience. I felt adding a bit of personality to the site could add to the comfort level before deciding to get in touch with the company. I also made sure to add call to action buttons so the user is always being guided to reach out to the company.',
      stackReasons:
        "This website is built with React and React Router. I love using React and continue to use it for my projects. React just makes creating any type of user interfaces easy and can help you deliver a great experience to the end user. One of the unique features I used in the website is having a light and dark mode. React made it simple to implement it. I just used a useState hook that keeps track of current mode and that will set the theme automatically based on the time of day on first load. I'm using React Router to navigate to different routes in the site. React Router makes it look like your navigating to a different page when you're really just rendering different components. React Router is fairly easy to set up and they have great documentation in case you get stuck. Will be using React Router for any project that I use React with and requires different pages.",
      challenges:
        "This was my first big client project and hit some speed bumps along the way. To design the project, I looked for inspiration through other websites. Getting the design down first made the coding go a lot smoother. Having a design to go off of is a huge help. One of my biggest challenges when coding was loading images, since this site uses quite a few images. If a user has a slow internet connection, the loading of an image took forever and just did not deliver a smooth experience. To accomodate for a slow connection, I used a minified version of the image and loaded it first while waiting on the actual image to load. I kept track of it using the React useState hook and using onLoad property of an image tag.",
    },
    {
      id: 6,
      title: "Bowling Buddy",
      summary:
        "Keep track of your bowling games and stats. You can select your ball, alley, and type of bowling for each game. Track your progress and use stats to improve your game.",
      // photos: bowl,
      website: "https://www.bowling-buddy.com/",
      gitHub: "#Contact",
      public: false,
      techStack: "React, Node, MySQL",
      type: "Personal",
      overview:
        "Bowling Buddy is a personal project I created during my time at LaunchCode. I initially planned to make something similar to my bowling calculator where you would just calc the score and then save your game. But I felt like I was learning a lot and felt I should challenge myself more so I decided to create a score and stat tracking application. When a user goes bowling, all they need to do is login to the site and begin a new game. Everytime they bowl a frame, they should record their pin fall. Bowling Buddy will calculate your score for you as you go along. During this time, you can also change the ball being used, the alley you are bowling at, and the type of bowling you are doing. When you finish your game(s), is when the magic of Bowling Buddy comes to life. You can see a dedicated stats page to see how you are performing. There you can filter on the bowling balls you have used, the alleys you bowled at and the types of bowling you do. Being able to see stats is critical to improving your game so you understand what you need to work on in practice.",
      stackReasons:
        "Bowling Buddy was built with React on the front end. It uses Node on the backend and uses MySQL as the datatbase. I decided to use React as I wanted to learn a front end framework and wanted to choose a popular one with good job demand. This really gave me the first impression of the difference in building a project without vanilla javascript. I really started to grasp the component structure and how it made building a website almost like putting a puzzle together. I got a lot of experience with the useState hook and managed all my app's state with that hook. I felt like my app was small enough that I didn't need a state management system yet. Since my strength has been with Javascript, I decided to build my backend with Node.js. Going from Javascript on the front end to the backend is a game changer in my opinion. I used Express.js which is a great framework for building apps on top of Node. Making api calls to the backend was a lot more simple than I thought it would be, especially since it took me a while to grasp how the backend communicates with the front end. One of thing that makes Bowling Buddy great, is being able to store all your games and info. To accomplish that, I decided to use a SQL over NoSQL database. Both would have accomplished the job, but relational tables just seemed easier to visualize how I wanted to organize my data.",
      challenges:
        "I faced quite a few challenges when building Bowling Buddy. For starters, this was my first time using React so I was learning as I was building. Once I was able to grasp State and Props, things started to click and really  started feel more and more comfortable using it. One of the first things I tackled was the recording of the game. I had to keep track of the frame, update the score and keep the game progressing. I used the useState hook to manage all of the state for the game. The tricky part was handling actions that user would not use as much, like editing a frame or editing the frame then canceling. Each of those situations need to be handled and can get quite complex. One of the takeways for this screen is my component was quite large and filled with a ton of logic. I do plan on rebuilding this screen in the future to cut down on the size. Another challenged I faced was calculating all the stats. I basically had to go through each user's game and look at every frame they bowled. I built functions that would do some type of calculation based off the stat I was tracking. For instance, I track each spare attempt a user has. So, if a user leaves a ten pin a 100 times and makes it 90 times, Bowlng Buddy will show the user he has left the ten pin 100 times while picking it up 90/100 times for a 90% avg. These kind of stats are critical to see how you're progressing.",
    },
    {
      id: 5,
      title: "Search The News",
      summary:
        "Search for your news using a Google like search. Widgets display your local weather and a random Dow Jones stock. Styled the app with Semantic UI.",
      // photos:news,
      website: "https://search-the-news.herokuapp.com/",
      gitHub: "https://github.com/Spencer30/search-the-news",
      public: true,
      techStack: "React, Node",
      type: "Personal",
      overview:
        "Search for your news using a Google like search. Widgets display your local weather and a random Dow Jones stock. Styled the app with Semantic UI. I thought it would be pretty cool having a dedicated search engine just for news and thought this would give me some good practice working with API's and being able to handle and display the data. I tried to make a simple and fresh looking site. The site has a light and dark theme to give the user choice in their experience.",
      stackReasons:
        "I chose to build this with React as I was looking for more practice. I built this during the same time as Bowling Buddy so I wanted to take my gains from this and apply it. I also wanted to try to use some already UI styled components and see their benefits. I used Semantic UI to style the search bar and the news articles. I am also using Node/Express on the backend. I initially wanted to skip the backend and just deploy this to Netlify but since I'm using an api, I had to build out the backend to keep the api key a secret. ",
      challenges:
        "This project gave me a pretty good experience working with API's. I use an api to get the news, weather and stocks. The stock ticker was the most challenging of the three as you need to send over a valid date to return information. Submitting a date that is on a weekend will result in an error for instance. I had to write some logic that would determine what the day is and then use that date or the closest previous date. One of things that I need to add in there is handling the date if it is a holiday.",
    },
    {
      id: 4,
      title: "Video Poker",
      summary:
        "Play video poker online. Taking a casino game and bringing it to the web. Play up to 4 credits. Keep track of your wins and win percentage while you play.",
      // photos:poker,
      website: "https://play-video-poker.herokuapp.com/",
      gitHub: "https://github.com/Spencer30/video_poker",
      public: true,
      techStack: "React, Node",
      type: "Personal",
      overview:
        "Play video poker online. Taking a casino game and bringing it to the web. Play up to 4 credits. Keep track of your wins and win percentage while you play. My mom loves playing video poker and thought this would be a good project to get some more practice with React while being able to give her a game she likes to play.",
      stackReasons:
        "This is built with React. I chose React to keep practicing and get more experience with it. I'm using React's useState hook to manage all of the state within the application. Instead of using a databse, I'm just storing the stats and credits to local storage. I do not have plans to improve on the project unless my mom is looking for additional features in which case I'll add a db to store user's information.",
      challenges:
        "One of the challenges that came with the project was writing functions that would determine if the user a had a winning hand. To accomplish this, I wrote a function for each hand that would accept 5 cards then return true or false based on a set of conditions. For instance, each card has a suit associtated with it so when checking if the hand was a flush, I would look at the first card's suit then compare it to the remaining 4 cards. If one card didn't match, I would return False, otherwise I will return true. I enjoyed writing these functions becuase it tested myself and being able to write logic based off certain conditions.",
    },
    {
      id: 3,
      title: "SocialUp",
      summary:
        "A social chat application for large groups. SocialUp helps people find their fit within their group by joining circles and doing the things they currently enjoy.",
      // photos:social,
      website: "https://socialup-new.herokuapp.com/",
      gitHub: "https://github.com/Spencer30/socialUp_react_website",
      public: true,
      techStack: "React, React Router, Node",
      type: "Personal",
      overview:
        "A social chat application for large groups. SocialUp helps people find their fit within their group by joining circles and doing the things they currently enjoy. In the age of covid, people are now realizing how important human relationships are. Our company at the time focused on just that. We wanted people within their already existing groups, whether it be their work, professional assoctiation, or religious group, to be able to connect offline with each other wjile doing the things they enjoy. When people build solid relationships with each other, the overall group thrives. We unforunately had to shutdown in 2019 but I wanted to redo our website since the old one was not the best and wanted the practice.",
      stackReasons:
        "I chose React for this since I wanted to build something quickly and didn't want to spend a whole lot of time building a website for now closed business. Using React made the process go by quickly. I'm currently using Node/Express on the backend but thinking about just hosting this on Netlify since it is pretty much a static site. For anything that has a backend, I use Heroku to host. It's great since they have a free tier but the free tier is also slow and takes a while to load.",
      challenges:
        "I didn't face to many challenges in building this. I'm using React Router to navigate routes and they are pretty straight forward. Most of my challenges came in the form of position elements on the page and keeping the website responsive.",
    },
    {
      id: 2,
      title: "BlackJack",
      summary:
        "Play blackjack online. Start with $500 and see how much you can win! I built this with HTML, CSS, and vanilla JavaScript. Rules are similar to what you see at a casino.",
      // photos:blackJack,
      website: "https://spencer30.github.io/simple_blackjack/",
      gitHub: "https://github.com/Spencer30/simple_blackjack",
      public: true,
      techStack: "HTML, CSS, JavaScript",
      type: "Personal",
      overview:
        "Play blackjack online. Start with $500 and see how much you can win! I built this with HTML, CSS, and vanilla JavaScript. Rules are similar to what you see at a casino. One of my first projects. I feel like building games gives you good experience creating logic based off certain conditions.",
      stackReasons:
        "This is one my of my very first projects. This gave me some solid exposure to Javascript and felt like I learned a good amount along the way. I went with plain old html, css and javascript as it was the only thing I knew at the time. Buidling something from scratch and then building something with a framework gives you appreciation how difficult tasks can be.",
      challenges:
        "I would consider myself a Javascript novice at the time I built this so I ran into quite a few bumps along the way. One of things that made this a challenge was just how big my javascript file got. Lot of logic in one file makes it difficult to navigate through it. Keeping track of the player's turn, their score and money balance was quite difficult and use quite of few if/else statements to do it. Looking back on it, it really made me appreciate the beauty of React and how much heavy lifting it does for you.",
    },
    {
      id: 1,
      title: "Bowling Calculator",
      summary:
        "My first JavaScript project. A simple web app that caluclates your score based off the number of pins you knock down. Simple, responsive and easy to use. My project philosphy.",
      // photos:bowlCalc,
      website: "https://spencer30.github.io/bowling-calculator/",
      gitHub: "https://github.com/Spencer30/bowling-calculator",
      public: true,
      techStack: "HTML, CSS, JavaScript",
      type: "Personal",
      overview:
        "My first JavaScript project. A simple web app that caluclates your score based off the number of pins you knock down. Simple, responsive and easy to use - my project philosophy. I learned a lot along the way and really help me start to grasp some of the fundamentals of JavaScript.",
      stackReasons:
        "This project was built with html, css and JavaScript as it was my very first real project and the only stack I knew. Building projects without any frameworks definitely gives you better hands on experience but definitely slows the build process down.",
      challenges:
        "I  faced numerous of challenges along the way as this was my first true js project. I used a lot of if/else statements to manage the state and control the flow of the game. If I was going to rebuild the project, I would definitely use a different approach. However, I do like looking back and seeing where my skill level was at compared to now. I've been coding for a year now and continue to learn more and more each day.",
    },
  ];
  