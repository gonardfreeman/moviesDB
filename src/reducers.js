import { FAV, UNFAV, fav, unFav } from './actions'
import Immutable from 'immutable';

export const movies = {
  "page": 1,
  "results": [
    {
      "poster_path": "/WLQN5aiQG8wc9SeKwixW7pAR8K.jpg",
      "adult": false,
      "overview": "The quiet life of a terrier named Max is upended when his owner takes in Duke, a stray whom Max instantly dislikes.",
      "release_date": "2016-06-18",
      "genre_ids": [
        12,
        16,
        35,
        10751
      ],
      "id": 328111,
      "original_title": "The Secret Life of Pets",
      "original_language": "en",
      "title": "The Secret Life of Pets",
      "backdrop_path": "/lubzBMQLLmG88CLQ4F3TxZr2Q7N.jpg",
      "popularity": 289.434746,
      "vote_count": 1922,
      "video": false,
      "vote_average": 5.8,
    },
    {
      "poster_path": "/z4x0Bp48ar3Mda8KiPD1vwSY3D8.jpg",
      "adult": false,
      "overview": "In Ancient Polynesia, when a terrible curse incurred by Maui reaches an impetuous Chieftain's daughter's island, she answers the Ocean's call to seek out the demigod to set things right.",
      "release_date": "2016-11-23",
      "genre_ids": [
        12,
        16,
        35,
        10751,
        14
      ],
      "id": 277834,
      "original_title": "Moana",
      "original_language": "en",
      "title": "Moana",
      "backdrop_path": "/1qGzqGUd1pa05aqYXGSbLkiBlLB.jpg",
      "popularity": 230.22034,
      "vote_count": 1022,
      "video": false,
      "vote_average": 6.5
    },
    {
      "poster_path": "/e1mjopzAS2KNsvpbpahQ1a6SkSn.jpg",
      "adult": false,
      "overview": "From DC Comics comes the Suicide Squad, an antihero team of incarcerated supervillains who act as deniable assets for the United States government, undertaking high-risk black ops missions in exchange for commuted prison sentences.",
      "release_date": "2016-08-02",
      "genre_ids": [
        28,
        80,
        14
      ],
      "id": 297761,
      "original_title": "Suicide Squad",
      "original_language": "en",
      "title": "Suicide Squad",
      "backdrop_path": "/34dxtTxMHGKw1njHpTjDqR8UBHd.jpg",
      "popularity": 174.019262,
      "vote_count": 3990,
      "video": false,
      "vote_average": 5.9
    },
    {
      "poster_path": "/ylXCdC106IKiarftHkcacasaAcb.jpg",
      "adult": false,
      "overview": "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs in dingy bars, but as success mounts they are faced with decisions that begin to fray the fragile fabric of their love affair, and the dreams they worked so hard to maintain in each other threaten to rip them apart.",
      "release_date": "2016-12-01",
      "genre_ids": [
        10749,
        35,
        18,
        10402
      ],
      "id": 313369,
      "original_title": "La La Land",
      "original_language": "en",
      "title": "La La Land",
      "backdrop_path": "/fp6X6yhgcxzxCpmM0EVC6V9B8XB.jpg",
      "popularity": 124.171997,
      "vote_count": 715,
      "video": false,
      "vote_average": 8.1
    },
    {
      "poster_path": "/tIKFBxBZhSXpIITiiB5Ws8VGXjt.jpg",
      "adult": false,
      "overview": "Lynch discovers he is a descendant of the secret Assassins society through unlocked genetic memories that allow him to relive the adventures of his ancestor, Aguilar, in 15th Century Spain. After gaining incredible knowledge and skills he’s poised to take on the oppressive Knights Templar in the present day.",
      "release_date": "2016-12-21",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "id": 121856,
      "original_title": "Assassin's Creed",
      "original_language": "en",
      "title": "Assassin's Creed",
      "backdrop_path": "/r8aRipzR4wlDx0m7Bpi43Q84imc.jpg",
      "popularity": 114.52664,
      "vote_count": 812,
      "video": false,
      "vote_average": 5.2
    },
    {
      "poster_path": "/z09QAf8WbZncbitewNk6lKYMZsh.jpg",
      "adult": false,
      "overview": "Dory is reunited with her friends Nemo and Marlin in the search for answers about her past. What can she remember? Who are her parents? And where did she learn to speak Whale?",
      "release_date": "2016-06-16",
      "genre_ids": [
        16,
        10751
      ],
      "id": 127380,
      "original_title": "Finding Dory",
      "original_language": "en",
      "title": "Finding Dory",
      "backdrop_path": "/iWRKYHTFlsrxQtfQqFOQyceL83P.jpg",
      "popularity": 103.389825,
      "vote_count": 2039,
      "video": false,
      "vote_average": 6.7
    },
    {
      "poster_path": "/jjBgi2r5cRt36xF6iNUEhzscEcb.jpg",
      "adult": false,
      "overview": "Twenty-two years after the events of Jurassic Park, Isla Nublar now features a fully functioning dinosaur theme park, Jurassic World, as originally envisioned by John Hammond.",
      "release_date": "2015-06-09",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 135397,
      "original_title": "Jurassic World",
      "original_language": "en",
      "title": "Jurassic World",
      "backdrop_path": "/dkMD5qlogeRMiEixC4YNPUvax2T.jpg",
      "popularity": 87.849639,
      "vote_count": 5734,
      "video": false,
      "vote_average": 6.5
    },
    {
      "poster_path": "/vR9YvUJCead23MOWwVzv9776eb1.jpg",
      "adult": false,
      "overview": "A teenager finds himself transported to an island where he must help protect a group of orphans with special powers from creatures intent on destroying them.",
      "release_date": "2016-09-28",
      "genre_ids": [
        14
      ],
      "id": 283366,
      "original_title": "Miss Peregrine's Home for Peculiar Children",
      "original_language": "en",
      "title": "Miss Peregrine's Home for Peculiar Children",
      "backdrop_path": "/qXQinDhDZkTiqEGLnav0h1YSUu8.jpg",
      "popularity": 71.044002,
      "vote_count": 1147,
      "video": false,
      "vote_average": 6.3
    },
    {
      "poster_path": "/gri0DDxsERr6B2sOR1fGLxLpSLx.jpg",
      "adult": false,
      "overview": "In 1926, Newt Scamander arrives at the Magical Congress of the United States of America with a magically expanded briefcase, which houses a number of dangerous creatures and their habitats. When the creatures escape from the briefcase, it sends the American wizarding authorities after Newt, and threatens to strain even further the state of magical and non-magical relations.",
      "release_date": "2016-11-16",
      "genre_ids": [
        12,
        10751,
        14
      ],
      "id": 259316,
      "original_title": "Fantastic Beasts and Where to Find Them",
      "original_language": "en",
      "title": "Fantastic Beasts and Where to Find Them",
      "backdrop_path": "/6I2tPx6KIiBB4TWFiWwNUzrbxUn.jpg",
      "popularity": 64.109831,
      "vote_count": 1884,
      "video": false,
      "vote_average": 7
    },
    {
      "poster_path": "/nBNZadXqJSdt05SHLqgT0HuC5Gm.jpg",
      "adult": false,
      "overview": "Interstellar chronicles the adventures of a group of explorers who make use of a newly discovered wormhole to surpass the limitations on human space travel and conquer the vast distances involved in an interstellar voyage.",
      "release_date": "2014-11-05",
      "genre_ids": [
        12,
        18,
        878
      ],
      "id": 157336,
      "original_title": "Interstellar",
      "original_language": "en",
      "title": "Interstellar",
      "backdrop_path": "/xu9zaAevzQ5nnrsXN6JcahLnG4i.jpg",
      "popularity": 50.358586,
      "vote_count": 6772,
      "video": false,
      "vote_average": 8
    },
    {
      "poster_path": "/5N20rQURev5CNDcMjHVUZhpoCNC.jpg",
      "adult": false,
      "overview": "Following the events of Age of Ultron, the collective governments of the world pass an act designed to regulate all superhuman activity. This polarizes opinion amongst the Avengers, causing two factions to side with Iron Man or Captain America, which causes an epic battle between former allies.",
      "release_date": "2016-04-27",
      "genre_ids": [
        878,
        28
      ],
      "id": 271110,
      "original_title": "Captain America: Civil War",
      "original_language": "en",
      "title": "Captain America: Civil War",
      "backdrop_path": "/m5O3SZvQ6EgD5XXXLPIP1wLppeW.jpg",
      "popularity": 48.254312,
      "vote_count": 4153,
      "video": false,
      "vote_average": 6.8
    },
    {
      "poster_path": "/yNsdyNbQqaKN0TQxkHMws2KLTJ6.jpg",
      "adult": false,
      "overview": "Extreme athlete turned government operative Xander Cage (Vin Diesel) comes out of self-imposed exile, thought to be long dead, and is set on a collision course with deadly alpha warrior Xiang (Donnie Yen) and his team in a race to recover a sinister and seemingly unstoppable weapon known as Pandora's Box. Recruiting an all-new group of thrill-seeking cohorts, Xander finds himself enmeshed in a deadly conspiracy that points to collusion at the highest levels of world governments.",
      "release_date": "2017-01-17",
      "genre_ids": [
        28,
        12,
        80,
        53
      ],
      "id": 47971,
      "original_title": "xXx: Return of Xander Cage",
      "original_language": "en",
      "title": "xXx: Return of Xander Cage",
      "backdrop_path": "/6AewnVY9zBgVQEuCufLvsufeRcH.jpg",
      "popularity": 46.613769,
      "vote_count": 170,
      "video": false,
      "vote_average": 5.5
    },
    {
      "poster_path": "/5gJkVIVU7FDp7AfRAbPSvvdbre2.jpg",
      "adult": false,
      "overview": "A spacecraft traveling to a distant colony planet and transporting thousands of people has a malfunction in its sleep chambers. As a result, two passengers are awakened 90 years early.",
      "release_date": "2016-12-21",
      "genre_ids": [
        12,
        18,
        10749,
        878
      ],
      "id": 274870,
      "original_title": "Passengers",
      "original_language": "en",
      "title": "Passengers",
      "backdrop_path": "/5EW4TR3fWEqpKsWysNcBMtz9Sgp.jpg",
      "popularity": 45.482837,
      "vote_count": 896,
      "video": false,
      "vote_average": 6.3
    },
    {
      "poster_path": "/4Iu5f2nv7huqvuYkmZvSPOtbFjs.jpg",
      "adult": false,
      "overview": "Taking place after alien crafts land around the world, an expert linguist is recruited by the military to determine whether they come in peace or are a threat.",
      "release_date": "2016-11-10",
      "genre_ids": [
        18,
        878
      ],
      "id": 329865,
      "original_title": "Arrival",
      "original_language": "en",
      "title": "Arrival",
      "backdrop_path": "/yIZ1xendyqKvY3FGeeUYUd5X9Mm.jpg",
      "popularity": 38.098202,
      "vote_count": 1312,
      "video": false,
      "vote_average": 6.6
    },
    {
      "poster_path": "/kqjL17yufvn9OVLyXYpvtyrFfak.jpg",
      "adult": false,
      "overview": "An apocalyptic story set in the furthest reaches of our planet, in a stark desert landscape where humanity is broken, and most everyone is crazed fighting for the necessities of life. Within this world exist two rebels on the run who just might be able to restore order. There's Max, a man of action and a man of few words, who seeks peace of mind following the loss of his wife and child in the aftermath of the chaos. And Furiosa, a woman of action and a woman who believes her path to survival may be achieved if she can make it across the desert back to her childhood homeland.",
      "release_date": "2015-05-13",
      "genre_ids": [
        28,
        12,
        878,
        53
      ],
      "id": 76341,
      "original_title": "Mad Max: Fury Road",
      "original_language": "en",
      "title": "Mad Max: Fury Road",
      "backdrop_path": "/phszHPFVhPHhMZgo0fWTKBDQsJA.jpg",
      "popularity": 37.512622,
      "vote_count": 6383,
      "video": false,
      "vote_average": 7.1
    },
    {
      "poster_path": "/qjiskwlV1qQzRCjpV0cL9pEMF9a.jpg",
      "adult": false,
      "overview": "A rogue band of resistance fighters unite for a mission to steal the Death Star plans and bring a new hope to the galaxy.",
      "release_date": "2016-12-14",
      "genre_ids": [
        28,
        12,
        14,
        878
      ],
      "id": 330459,
      "original_title": "Rogue One: A Star Wars Story",
      "original_language": "en",
      "title": "Rogue One: A Star Wars Story",
      "backdrop_path": "/tZjVVIYXACV4IIIhXeIM59ytqwS.jpg",
      "popularity": 36.820321,
      "vote_count": 1911,
      "video": false,
      "vote_average": 7.2
    },
    {
      "poster_path": "/nHXiMnWUAUba2LZ0dFkNDVdvJ1o.jpg",
      "adult": false,
      "overview": "Vampire death dealer Selene fends off brutal attacks from both the Lycan clan and the Vampire faction that betrayed her. With her only allies, David and his father Thomas, she must stop the eternal war between Lycans and Vampires, even if it means she has to make the ultimate sacrifice.",
      "release_date": "2016-12-01",
      "genre_ids": [
        28,
        27
      ],
      "id": 346672,
      "original_title": "Underworld: Blood Wars",
      "original_language": "en",
      "title": "Underworld: Blood Wars",
      "backdrop_path": "/PIXSMakrO3s2dqA7mCvAAoVR0E.jpg",
      "popularity": 33.001754,
      "vote_count": 642,
      "video": false,
      "vote_average": 4.2
    },
    {
      "poster_path": "/n8WNMt7stqHUZEE7bEtzK4FwrWe.jpg",
      "adult": false,
      "overview": "Rachel Watson, devastated by her recent divorce, spends her daily commute fantasizing about the seemingly perfect couple who live in a house that her train passes every day, until one morning she sees something shocking happen there and becomes entangled in the mystery that unfolds.",
      "release_date": "2016-10-05",
      "genre_ids": [
        53
      ],
      "id": 346685,
      "original_title": "The Girl on the Train",
      "original_language": "en",
      "title": "The Girl on the Train",
      "backdrop_path": "/fpq86AP0YBYUwNgDvUj5kxwycxH.jpg",
      "popularity": 31.734996,
      "vote_count": 680,
      "video": false,
      "vote_average": 6
    },
    {
      "poster_path": "/oFOG2yIRcluKfTtYbzz71Vj9bgz.jpg",
      "adult": false,
      "overview": "After waking up in a hospital with amnesia, professor Robert Langdon and a doctor must race against time to foil a deadly global plot.",
      "release_date": "2016-10-13",
      "genre_ids": [
        28,
        80,
        9648,
        878,
        53
      ],
      "id": 207932,
      "original_title": "Inferno",
      "original_language": "en",
      "title": "Inferno",
      "backdrop_path": "/anmLLbDx9d98NMZRyVUtxwJR6ab.jpg",
      "popularity": 29.189494,
      "vote_count": 1025,
      "video": false,
      "vote_average": 5.5
    },
    {
      "poster_path": "/z6BP8yLwck8mN9dtdYKkZ4XGa3D.jpg",
      "adult": false,
      "overview": "Seven gun men in the old west gradually come together to help a poor village against savage thieves.",
      "release_date": "2016-09-14",
      "genre_ids": [
        12,
        28,
        37
      ],
      "id": 333484,
      "original_title": "The Magnificent Seven",
      "original_language": "en",
      "title": "The Magnificent Seven",
      "backdrop_path": "/T3LrH6bnV74llVbFpQsCBrGaU9.jpg",
      "popularity": 28.026704,
      "vote_count": 1322,
      "video": false,
      "vote_average": 5.3
    }
  ],
  "total_results": 19652,
  "total_pages": 983
}
export const initialState = movies;

export const faver = (state = initialState, action)=>{
  switch (action.type) {
    case FAV:
      return Object.assign({}, state, {
          "fav":true
        });
    case UNFAV:
      return Object.assign({}, state, {
        fav:true
      });
    default:
      return state;
  }
}
