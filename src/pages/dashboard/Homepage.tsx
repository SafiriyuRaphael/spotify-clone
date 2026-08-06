import MusicRow from "./components/MusicRow";
import { useEffect } from "react";
import { getSpotifyToken, fetchSongs } from "./api";

const Homepage = () => {
  useEffect(() => {
    fetchSongs();
  }, []);

  // const fetchSongs = async () => {
  //   const response = await axios.get("");
  // };

  const songs = [
    {
      img: "/Akon ft.png",
      title: "Gheto Gheto",
      artist: "Akon ft Ne-Yo",
      isExplicit: true,
    },
    {
      img: "/Celine Dion.png",
      title: "Goodbye",
      artist: "Celine Dion",
      isExplicit: true,
    },

    {
      img: "/Justin Bieber.png",
      title: "Somebody to love",
      artist: "Justin Bieber ft Drake",
      isExplicit: true,
    },
    {
      img: "/Michael Jackson.png",
      title: "Earthsong",
      artist: "Michael Jackson",
      isExplicit: true,
    },
    {
      img: "/Michael Jay.png",
      title: "Heal the world",
      artist: "Michael Jackson",
      isExplicit: true,
    },
  ];

  const popularArtists = [
    {
      img: "/Justin B.png",
      artist: "Justin Bieber",
    },
    {
      img: "/M Jay.png",
      artist: "Michael Jackson",
    },
    {
      img: "/Celine.png",
      artist: "Celine Dion",
    },
    {
      img: "/Akon tour.png",
      artist: "Akon",
    },
    {
      img: "/Shakira.png",
      artist: "Shakira",
    },
  ];

  return (
    <div className="bg-[#121212] mx-3 p-2 rounded-[10px] max-h-screen overflow-y-scroll hide-scroll">
      <div className="flex justify-between text-white px-5">
        <h1 className="text-[25px] text-bold">Trending songs</h1>
        <button>show all</button>
      </div>
      <section className="flex  ">
        {songs.map((song, index) => (
          <MusicRow key={index} {...song} />
        ))}
      </section>

      <div className="flex justify-between text-white px-5 mt-10">
        <h1 className="text-[25px] text-bold">Popular artists</h1>
        <button>show all</button>
      </div>
      <section className="flex">
        {popularArtists.map((artist, index) => (
          <MusicRow key={index} {...artist} variant="circle" />
        ))}
      </section>

      <div className="flex justify-between text-white px-5 mt-10">
        <h1 className="text-[25px] text-bold">Most played</h1>
        <button>show all</button>
      </div>
      <section className="flex">
        {popularArtists.map((artist, index) => (
          <MusicRow key={index} {...artist} variant="circle" />
        ))}
      </section>
    </div>
  );
};

export default Homepage;
