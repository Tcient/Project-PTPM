import axios from "axios"

const getTrending = async (req, res, next) => {
    try {
        // console.log(response.data);
        res.status(200).json({
            message: 'Lấy dữ liệu thành công',
            data: {
                "page": 1,
                "results": [
                    {
                        "backdrop_path": "/4d0tMAk49gqbVwgvtQjCriBwyb8.jpg",
                        "id": 106379,
                        "original_name": "Fallout",
                        "overview": "The story of haves and have-nots in a world in which there’s almost nothing left to have. 200 years after the apocalypse, the gentle denizens of luxury fallout shelters are forced to return to the irradiated hellscape their ancestors left behind — and are shocked to discover an incredibly complex, gleefully weird, and highly violent universe waiting for them.",
                        "poster_path": "/AnsSKR9LuK0T9bAOcPVA3PUvyWj.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "Fallout",
                        "original_language": "en",
                        "genre_ids": [
                            10759,
                            18,
                            10765
                        ],
                        "popularity": 1116.5,
                        "first_air_date": "2024-04-10",
                        "vote_average": 8.617,
                        "vote_count": 201,
                        "origin_country": [
                            "US"
                        ]
                    },
                    {
                        "backdrop_path": "/xOMo8BRK7PfcJv9JCnx7s5hj0PX.jpg",
                        "id": 693134,
                        "original_title": "Dune: Part Two",
                        "overview": "Follow the mythic journey of Paul Atreides as he unites with Chani and the Fremen while on a path of revenge against the conspirators who destroyed his family. Facing a choice between the love of his life and the fate of the known universe, Paul endeavors to prevent a terrible future only he can foresee.",
                        "poster_path": "/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Dune: Part Two",
                        "original_language": "en",
                        "genre_ids": [
                            878,
                            12
                        ],
                        "popularity": 4742.163,
                        "release_date": "2024-02-27",
                        "video": false,
                        "vote_average": 8.312,
                        "vote_count": 2745
                    },
                    {
                        "backdrop_path": "/1XDDXPXGiI8id7MrUxK36ke7gkX.jpg",
                        "id": 1011985,
                        "original_title": "Kung Fu Panda 4",
                        "overview": "Po is gearing up to become the spiritual leader of his Valley of Peace, but also needs someone to take his place as Dragon Warrior. As such, he will train a new kung fu practitioner for the spot and will encounter a villain called the Chameleon who conjures villains from the past.",
                        "poster_path": "/1THOJsxIj3fqfYewAgIYZp7BfjG.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Kung Fu Panda 4",
                        "original_language": "en",
                        "genre_ids": [
                            16,
                            28,
                            10751,
                            35,
                            14
                        ],
                        "popularity": 3561.356,
                        "release_date": "2024-03-02",
                        "video": false,
                        "vote_average": 7.119,
                        "vote_count": 946
                    },
                    {
                        "backdrop_path": "/ciizJ9Okzt9tBBGK7Q3T14LFT2j.jpg",
                        "id": 108545,
                        "original_name": "3 Body Problem",
                        "overview": "Across continents and decades, five brilliant friends make earth-shattering discoveries as the laws of science unravel and an existential threat emerges.",
                        "poster_path": "/ykZ7hlShkdRQaL2aiieXdEMmrLb.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "3 Body Problem",
                        "original_language": "en",
                        "genre_ids": [
                            10765,
                            9648,
                            18
                        ],
                        "popularity": 640.67,
                        "first_air_date": "2024-03-21",
                        "vote_average": 7.595,
                        "vote_count": 503,
                        "origin_country": [
                            "US"
                        ]
                    },
                    {
                        "backdrop_path": "/5zmiBoMzeeVdQ62no55JOJMY498.jpg",
                        "id": 126308,
                        "original_name": "Shōgun",
                        "overview": "In Japan in the year 1600, at the dawn of a century-defining civil war, Lord Yoshii Toranaga is fighting for his life as his enemies on the Council of Regents unite against him, when a mysterious European ship is found marooned in a nearby fishing village.",
                        "poster_path": "/7O4iVfOMQmdCSxhOg1WnzG1AgYT.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "Shōgun",
                        "original_language": "en",
                        "genre_ids": [
                            18,
                            10768
                        ],
                        "popularity": 1089.95,
                        "first_air_date": "2024-02-27",
                        "vote_average": 8.744,
                        "vote_count": 428,
                        "origin_country": [
                            "US"
                        ]
                    },
                    {
                        "backdrop_path": "/p4rJTY1rvQrffoh2P09sty5cz8B.jpg",
                        "id": 208825,
                        "original_name": "기생수: 더 그레이",
                        "overview": "When unidentified parasites violently take over human hosts and gain power, humanity must rise to combat the growing threat.",
                        "poster_path": "/rubaKfmdCvWGPXErgW9aQsgzKVr.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "Parasyte: The Grey",
                        "original_language": "ko",
                        "genre_ids": [
                            10765,
                            10759,
                            18
                        ],
                        "popularity": 702.852,
                        "first_air_date": "2024-04-05",
                        "vote_average": 7.784,
                        "vote_count": 74,
                        "origin_country": [
                            "KR"
                        ]
                    },
                    {
                        "backdrop_path": "/lzWHmYdfeFiMIY4JaMmtR7GEli3.jpg",
                        "id": 438631,
                        "original_title": "Dune",
                        "overview": "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe to ensure the future of his family and his people. As malevolent forces explode into conflict over the planet's exclusive supply of the most precious resource in existence-a commodity capable of unlocking humanity's greatest potential-only those who can conquer their fear will survive.",
                        "poster_path": "/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Dune",
                        "original_language": "en",
                        "genre_ids": [
                            878,
                            12
                        ],
                        "popularity": 539.476,
                        "release_date": "2021-09-15",
                        "video": false,
                        "vote_average": 7.8,
                        "vote_count": 11201
                    },
                    {
                        "backdrop_path": "/j3Z3XktmWB1VhsS8iXNcrR86PXi.jpg",
                        "id": 823464,
                        "original_title": "Godzilla x Kong: The New Empire",
                        "overview": "Following their explosive showdown, Godzilla and Kong must reunite against a colossal undiscovered threat hidden within our world, challenging their very existence – and our own.",
                        "poster_path": "/tMefBSflR6PGQLv7WvFPpKLZkyk.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Godzilla x Kong: The New Empire",
                        "original_language": "en",
                        "genre_ids": [
                            28,
                            878,
                            12,
                            14
                        ],
                        "popularity": 2684.448,
                        "release_date": "2024-03-27",
                        "video": false,
                        "vote_average": 6.73,
                        "vote_count": 588
                    },
                    {
                        "backdrop_path": "/oe7mWkvYhK4PLRNAVSvonzyUXNy.jpg",
                        "id": 359410,
                        "original_title": "Road House",
                        "overview": "Ex-UFC fighter Dalton takes a job as a bouncer at a Florida Keys roadhouse, only to discover that this paradise is not all it seems.",
                        "poster_path": "/bXi6IQiQDHD00JFio5ZSZOeRSBh.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Road House",
                        "original_language": "en",
                        "genre_ids": [
                            28,
                            53
                        ],
                        "popularity": 1337.993,
                        "release_date": "2024-03-08",
                        "video": false,
                        "vote_average": 7.061,
                        "vote_count": 1392
                    },
                    {
                        "backdrop_path": "/xzjZDyqUobuJtkBljhgLH4Fdnye.jpg",
                        "id": 82684,
                        "original_name": "転生したらスライムだった件",
                        "overview": "37-year-old corporate worker Mikami Satoru is stabbed by a random killer, and is reborn to an alternate world. But he turns out to be reborn a slime! Thrown into this new world with the name Rimuru Tempest, he begins his quest to create a world that’s welcoming to all races. Broken free from ordinary, stale past life, his fresh adventure in a fantasy world as a slime monster with unique abilities begins.",
                        "poster_path": "/jQb1ztdko9qc4aCdnMXShcIHXRG.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "That Time I Got Reincarnated as a Slime",
                        "original_language": "ja",
                        "genre_ids": [
                            10759,
                            16,
                            10765,
                            35
                        ],
                        "popularity": 310.414,
                        "first_air_date": "2018-10-02",
                        "vote_average": 8.5,
                        "vote_count": 700,
                        "origin_country": [
                            "JP"
                        ]
                    },
                    {
                        "backdrop_path": "/2rmK7mnchw9Xr3XdiTFSxTTLXqv.jpg",
                        "id": 37854,
                        "original_name": "ワンピース",
                        "overview": "Years ago, the fearsome Pirate King, Gol D. Roger was executed leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new King of the Pirates.\n\nMonkey D. Luffy, a boy who consumed a \"Devil Fruit,\" decides to follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and that he's surrounded by a bevy of skilled fighters and thieves to help him along the way.\n\nLuffy will do anything to get the One Piece and become King of the Pirates!",
                        "poster_path": "/cMD9Ygz11zjJzAovURpO75Qg7rT.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "One Piece",
                        "original_language": "ja",
                        "genre_ids": [
                            10759,
                            35,
                            16
                        ],
                        "popularity": 163.351,
                        "first_air_date": "1999-10-20",
                        "vote_average": 8.732,
                        "vote_count": 4396,
                        "origin_country": [
                            "JP"
                        ]
                    },
                    {
                        "backdrop_path": "/ovUbhh84qB11B5wzHd01cM07yia.jpg",
                        "id": 138502,
                        "original_name": "X-Men '97",
                        "overview": "The X-Men, a band of mutants who use their uncanny gifts to protect a world that hates and fears them, are challenged like never before, forced to face a dangerous and unexpected new future.",
                        "poster_path": "/9Ycz7yYRf9V4jk3YXwcZhFtbNcF.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "X-Men '97",
                        "original_language": "en",
                        "genre_ids": [
                            16,
                            10759,
                            10765
                        ],
                        "popularity": 979.203,
                        "first_air_date": "2024-03-20",
                        "vote_average": 8.7,
                        "vote_count": 141,
                        "origin_country": [
                            "US"
                        ]
                    },
                    {
                        "backdrop_path": "/erpjqVdJLpDQJjsbxaSJmMwvcqd.jpg",
                        "id": 94028,
                        "original_name": "RIPLEY",
                        "overview": "A grifter in 1960s New York is hired to convince a wealthy man's son to return home from Italy and begins a life of deceit, fraud and murder.",
                        "poster_path": "/rpSo8z9alultGVTqQ3dkLEyU8xx.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "RIPLEY",
                        "original_language": "en",
                        "genre_ids": [
                            18
                        ],
                        "popularity": 343.341,
                        "first_air_date": "2024-04-04",
                        "vote_average": 8.26,
                        "vote_count": 48,
                        "origin_country": [
                            "US"
                        ]
                    },
                    {
                        "backdrop_path": "/bQS43HSLZzMjZkcHJz4fGc7fNdz.jpg",
                        "id": 792307,
                        "original_title": "Poor Things",
                        "overview": "Brought back to life by an unorthodox scientist, a young woman runs off with a debauched lawyer on a whirlwind adventure across the continents. Free from the prejudices of her times, she grows steadfast in her purpose to stand for equality and liberation.",
                        "poster_path": "/kCGlIMHnOm8JPXq3rXM6c5wMxcT.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Poor Things",
                        "original_language": "en",
                        "genre_ids": [
                            878,
                            10749,
                            35
                        ],
                        "popularity": 439.114,
                        "release_date": "2023-12-07",
                        "video": false,
                        "vote_average": 7.815,
                        "vote_count": 3064
                    },
                    {
                        "backdrop_path": "/3IoSYT0gnuImnZ73rqYySJnmefA.jpg",
                        "id": 967847,
                        "original_title": "Ghostbusters: Frozen Empire",
                        "overview": "The Spengler family returns to where it all started – the iconic New York City firehouse – to team up with the original Ghostbusters, who've developed a top-secret research lab to take busting ghosts to the next level. But when the discovery of an ancient artifact unleashes an evil force, Ghostbusters new and old must join forces to protect their home and save the world from a second Ice Age.",
                        "poster_path": "/6faYaQyiBPhqAizldJKq21mIVaE.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Ghostbusters: Frozen Empire",
                        "original_language": "en",
                        "genre_ids": [
                            14,
                            12,
                            35
                        ],
                        "popularity": 371.481,
                        "release_date": "2024-03-20",
                        "video": false,
                        "vote_average": 6.583,
                        "vote_count": 210
                    },
                    {
                        "backdrop_path": "/pwGmXVKUgKN13psUjlhC9zBcq1o.jpg",
                        "id": 634492,
                        "original_title": "Madame Web",
                        "overview": "Forced to confront revelations about her past, paramedic Cassandra Webb forges a relationship with three young women destined for powerful futures...if they can all survive a deadly present.",
                        "poster_path": "/rULWuutDcN5NvtiZi4FRPzRYWSh.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Madame Web",
                        "original_language": "en",
                        "genre_ids": [
                            28,
                            14
                        ],
                        "popularity": 1058.25,
                        "release_date": "2024-02-14",
                        "video": false,
                        "vote_average": 5.664,
                        "vote_count": 1054
                    },
                    {
                        "backdrop_path": "/8ohejkcQkNgkJgLn71Ws6Kd35g0.jpg",
                        "id": 872585,
                        "original_title": "Oppenheimer",
                        "overview": "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
                        "poster_path": "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "Oppenheimer",
                        "original_language": "en",
                        "genre_ids": [
                            18,
                            36
                        ],
                        "popularity": 466.941,
                        "release_date": "2023-07-19",
                        "video": false,
                        "vote_average": 8.111,
                        "vote_count": 7631
                    },
                    {
                        "backdrop_path": "/l4E2ZZGnmE4VbOLFwWsJwSpcNJe.jpg",
                        "id": 437342,
                        "original_title": "The First Omen",
                        "overview": "When a young American woman is sent to Rome to begin a life of service to the church, she encounters a darkness that causes her to question her own faith and uncovers a terrifying conspiracy that hopes to bring about the birth of evil incarnate.",
                        "poster_path": "/cIzk6GhxEZuweekGFXWEoAyuaMX.jpg",
                        "media_type": "movie",
                        "adult": false,
                        "title": "The First Omen",
                        "original_language": "en",
                        "genre_ids": [
                            27
                        ],
                        "popularity": 517.787,
                        "release_date": "2024-04-03",
                        "video": false,
                        "vote_average": 6.795,
                        "vote_count": 78
                    },
                    {
                        "backdrop_path": "/7sV0OgNkPiY9XPzr0f3rATFrGje.jpg",
                        "id": 203744,
                        "original_name": "Sugar",
                        "overview": "An enigmatic private detective struggles with personal demons as he investigates the disappearance of a Hollywood producer's beloved granddaughter.",
                        "poster_path": "/dNrk52Rt13MxwahLneTZJezM6qD.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "Sugar",
                        "original_language": "en",
                        "genre_ids": [
                            18
                        ],
                        "popularity": 352.149,
                        "first_air_date": "2024-04-04",
                        "vote_average": 7.923,
                        "vote_count": 13,
                        "origin_country": [
                            "US"
                        ]
                    },
                    {
                        "backdrop_path": "/zW0v2YT74C6tRafzqqBkfSqLAN0.jpg",
                        "id": 52814,
                        "original_name": "Halo",
                        "overview": "Depicting an epic 26th-century conflict between humanity and an alien threat known as the Covenant, the series weaves deeply drawn personal stories with action, adventure and a richly imagined vision of the future.",
                        "poster_path": "/hmHA5jqxN3ESIAGx0jAwV7TJhTQ.jpg",
                        "media_type": "tv",
                        "adult": false,
                        "name": "Halo",
                        "original_language": "en",
                        "genre_ids": [
                            10765,
                            10759
                        ],
                        "popularity": 1029.444,
                        "first_air_date": "2022-03-24",
                        "vote_average": 8.337,
                        "vote_count": 2567,
                        "origin_country": [
                            "US"
                        ]
                    }
                ],
                "total_pages": 1000,
                "total_results": 20000
            }
        })
    } catch (error) {
        // console.error(error);
        res.status(200).json('error!')
    }

}

export const mediaController = {
    getTrending
}
