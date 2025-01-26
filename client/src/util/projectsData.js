import kevtify from "../images/kevtify.png";
import massproshopimage from "../images/mass-pro-shops-home.png";
import movieDBhome from "../images/MovieDB/home.png";
import infinitySpaceHome from "../images/InfinitySpace/home.png";
import kevScreensStreamerWindow from "../images/KevScreens/streamer_window.png"

const projectsData = {  
    movieDB:{
        title:"MovieDB",
        thumbnail:movieDBhome,
        gitHubUrl: "https://github.com/keven0311/MovieDB_Web",
        projectUrl: null,
        description: "MoviesDB App is a dynamic front-end application built with React.js that allows users to explore movies based on categories such as popularity, upcoming releases, top-rated movies, and currently playing films. Powered by the Themoviedb API, this app fetches movie data and displays it seamlessly on the browser."
    },
    infinitySpace:{
        title:"Infinity Space",
        thumbnail:infinitySpaceHome,
        gitHubUrl:"https://github.com/keven0311/JubenshaWeb",
        projectUrl: null,
        description: "Infinity Space is a dynamic web application designed for the popular table game 'Jubensha'. The platform enables users to explore and choose from a variety of engaging storylines, making it easy for players to find a game that suits their preferences. Users can filter available storylines based on different categories such as the number of players, price ranges, story backgrounds, and difficulty levels. Each storyline has a dedicated detail page, which provides all necessary information to help users decide if the game is the right fit for them.",
    },
    kevScreen:{
        title:"KevScreens",
        thumbnail:kevScreensStreamerWindow,
        gitHubUrl:"https://github.com/keven0311/Kev_Screens",
        projectUrl: null,
        description: "KevScreens is a desktop application built with Electron.js, designed to enable seamless screen sharing experiences. Leveraging WebRTC technology for peer-to-peer connections and WebSocket technology for real-time data exchange, KevScreens provides a robust solution for both streamers and audiences."
    },
    kevtify: {
        title:"Kevtify",
        thumbnail:kevtify,
        gitHubUrl:"https://github.com/keven0311/Spotify-clone.Kaichong/tree/main/spotify-clone",
        projectUrl:null,
        description:"Kevtify is an impressive Spotify-clone, meticulously crafted using React, Tailwind CSS, and Material UI. Just like its inspiration, Spotify, Kevtify offers a list of songs that you can play. Leveraging the power of Firebase, the app seamlessly stores its extensive collection of songs in Firebase Cloud Storage. Immerse yourself in the world of music and enjoy the seamless experience of Kevtify, your go-to Spotify-clone deployed effortlessly on Firebase."   
    },
    massProShops:{
        title:"Mass-Pro-Shop",
        thumbnail:massproshopimage,
        gitHubUrl: "https://github.com/mass-pro-shops/grace-shopper",
        projectUrl:"https://two303-mass-pro-shops.onrender.com/home",
        description:"An extensive e-commerce website with user profiles, product selection, cart, and Stripe API for checkout. Admins can manage products and users."
    },

}

export default projectsData;