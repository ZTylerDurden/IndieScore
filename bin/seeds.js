const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/indiescore-project');

const User = require('../models/user');
const Score = require('../models/score');

const scores = [
    {
        band: "Eels",
        song: "Peach Blossom",
        link: "https://youtu.be/L_-cusLLvMI",
        tag: ["Beatemup", "Mature", "Steampunk"]
    },
    {
        band: "Kauf",
        song: "Pacify",
        link: "https://youtu.be/NY61Y5mEiAk",
        tag: ["Cyberpunk", "Futuristic", "Driving"]
    },
    {
        band: "Poolside",
        song: "Drifting",
        link: "https://youtu.be/7xnP4E27sIs",
        tag: ["Driving", "Utopia", "Platformer"]
    },
    {
    band: "Keith Johns",
    song: "Music Box",
    link: "https://youtu.be/Lsm-ApUKQ00",
    tag: ["Puzzle", "Relaxing", "Utopia"]
    },
    {
    band: "Wei Zhongle",
    song: "Mute",
    link: "https://youtu.be/s7USYHOjEAs",
    tag: ["Beatemup"]
    },
    {
    band: "Death of Lovers",
    song: "Orphans Of The Smog",
    link: "https://youtu.be/UE9MR3tGGqk",
    tag: ["Driving", "Futuristic", "Cyberpunk"]
    },
    {
    band: "Alpha 606",
    song: "Gauges",
    link: "https://youtu.be/gX-pogildbE",
    tag: ["Cyberpunk", "Futuristic", "Driving"]
    },
    {
    band: "Wing Vilma",
    song: "Cherry Granola",
    link: "https://youtu.be/K6Fe8qocGDU",
    tag: ["Dystopia", "Relaxing", "Futuristic", "Steampunk"]
    },
    {
    band: "Ouzo Bazooka",
    song: "1001 Nights",
    link: "https://youtu.be/GWKuOePcEQE",
    tag: ["Mature", "Beatemup", "Violent"]
    },
    {
    band: "Skinny Hendrix",
    song: "Buffalo Chicken Dip",
    link: "https://youtu.be/nO5hPBVYtKI",
    tag: ["Shootemup"]
    },
    {
    band: "Mac Demarco",
    song: "Ode to Viceroy",
    link: "https://youtu.be/6bfTTeZOrs4",
    tag: ["Shootemup", "Noir"]
    },
    {
    band: "Midnight Danger",
    song: "System Outage",
    link: "https://youtu.be/UAW90qhZ-co",
    tag: ["Futuristic", "Shootemup", "Cyberpunk"]
    },
    {
    band: "Yumi Zouma",
    song: "Persephone",
    link: "https://youtu.be/U9cXWCJl5jg",
    tag: ["Relaxing", "Puzzle"]
    },
    {
    band: "Meat Beat Manifesto",
    song: "T.M.I",
    link: "https://youtu.be/4kpHAvvlBNo",
    tag: ["Shootemup", "Puzzle", "Steampunk"]
    },
    {
    band: "Dro",
    song: "Vidal (Steve Leroy Remix)",
    link: "https://youtu.be/bSor0iRqYyQ",
    tag: ["Futuristic", "Driving", "Shootemup", "Fast-paced"]
    },
    {
    band: "Mas Ysa",
    song: "Service",
    link: "https://youtu.be/QMTt5RExjC0",
    tag: ["Relaxing", "Puzzle"]
    },
    {
    band: "Mere",
    song: "HoneyBun",
    link: "https://youtu.be/0fvum947Je0",
    tag: ["Fast-paced", "Futuristic", "Driving"]
    },
    {
    band: "Ty Segall",
    song: "She",
    link: "https://youtu.be/rQl7Wyk2I_k",
    tag: ["Violent", "Fast-paced", "Shootemup", "Mature"]
    },
    {
    band: "Mount Kimbie",
    song: "Bells_5",
    link: "https://youtu.be/z8r3qE1gmD4",
    tag: ["Dystopia", "Futuristic", "Cyberpunk"]
    },
    {
    band: "NADINE",
    song: "Little Self In The Garden",
    link: "https://youtu.be/oG-zWGVYfjs",
    tag: ["Puzzle", "Relaxing"]
    },
    {
    band: "Jaco Pastorius",
    song: "Forgotten Love",
    link: "https://youtu.be/vW7jJUhz1vM",
    tag: ["Relaxing", "Puzzle", "Utopia"]
    },
    {
    band: "Pangaea",
    song: "Scaled Wing",
    link: "https://youtu.be/-Yaa-qZP6zc",
    tag: ["Dystopia", "Platformer", "Futuristic"]
    },
    {
    band: "Gang Signs",
    song: "LA on Monday",
    link: "https://youtu.be/2VCbOkNL6a8",
    tag: ["Shootemup", "Steampunk"]
    },
    {
    band: "Wild Nothing",
    song: "Confirmation",
    link: "https://youtu.be/gxmBXbz2vIk",
    tag: ["Puzzle", "Creative"]
    },
    {
    band: "Hollie Cook",
    song: "Survive",
    link: "https://youtu.be/JUaNPIrsO-k",
    tag: ["Puzzle", "Creative", "Relaxing"]
    },
    {
    band: "Day Wave",
    song: "Drag",
    link: "https://youtu.be/KMOoNlD_bNg",
    tag: ["Puzzle", "Creative", "Relaxing"]
    },
    {
    band: "Blank Banshee",
    song: "Hungry Ghost",
    link: "https://youtu.be/M1kAGDg_QQk",
    tag: ["Futuristic", "Puzzle", "Platformer"]
    },
    {
    band: "Matthewdavid",
    song: "Lines and Lattice",
    link: "https://youtu.be/Jxrrb5B6ujc",
    tag: ["Dystopia", "Puzzle", "Platformer"]
    },
    {
    band: "Bekon",
    song: "Cold As Ice",
    link: "https://youtu.be/ZN0tvwAiLkw",
    tag: ["Mature"]
    },
    {
    band: "Professor Caveman",
    song: "Tappy Tappy Bling Bling",
    link: "https://youtu.be/xHvlbgQOEtE",
    tag: ["Shootemup", "Fast-paced"]
    },
    {
    band: "Sun Palace",
    song: "I Want You",
    link: "https://youtu.be/JzGfiC8h9Js",
    tag: ["Shootemup", "Platformer", "Cyberpunk"]
    },
    {
    band: "Pompeya",
    song: "Last One",
    link: "https://youtu.be/zOnlktpWtns",
    tag: ["Mature", "Shootemup"]
    },
    {
    band: "Ellen O",
    song: "Another Planet",
    link: "https://youtu.be/zf0ms5yyuhg",
    tag: ["Futuristic", "Utopia", "Driving"]
    },
    {
    band: "Shlohmo",
    song: "Birthday Beat",
    link: "https://youtu.be/ghrU5zHRCZ0",
    tag: ["Platformer", "Futuristic"]
    },
    {
    band: "Nabihah Iqbal",
    song: "New New Eyes",
    link: "https://youtu.be/65VLfB9WYAg",
    tag: ["Dystopia", "Futuristic"]
    },
    {
    band: "Palm",
    song: "Forced Hand",
    link: "https://youtu.be/ScjSJPNwdgw",
    tag: ["Puzzle", "Creative", "Platformer"]
    },
    {
    band: "Soulwax",
    song: "Is It Always Binary",
    link: "https://youtu.be/aLnzrkVbHgs",

    tag: ["Violent", "Beatemup", "Mature"]
    },
    {
    band: "Leyya",
    song: "Heat",
    link: "https://youtu.be/opT5wq353FQ",
    tag: ["Puzzle", "Driving"]
    },
    {
    band: "Midnight Danger",
    song: "Stranger Days",
    link: "https://youtu.be/mWQjO9XLLcY", 
    tag: ["Cyberpunk", "Shootemup", "Futuristic"]
    },
    {
    band: "Cavern Of Anti-Matter",
    song: "I’m the unknown",
    link: "https://youtu.be/ab0aMWj1Oes",
    tag: ["Platformer", "Shootemup", "Mature"]
    },
    {
    band: "Nothing",
    song: "Curse Of The Sun",
    link: "https://youtu.be/pWyVU1Xxn08",
    tag: ["Violent", "Mature"]
    }
]

Score.create(scores, (err, docs) => {
    if (err) {
      throw err;
    }
  
    docs.forEach((score) => {
      console.log(score)
    });
    mongoose.connection.close();
});