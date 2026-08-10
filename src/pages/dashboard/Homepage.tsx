import MusicRow from "./components/MusicRow";
import { useEffect } from "react";
import { getSpotifyToken, fetchSongs } from "./api";
import { useQuery } from "@tanstack/react-query";
import ArtistRow from "./components/ArtistRow";

const Homepage = () => {
  // useEffect(() => {
  //   fetchSongs();
  // }, []);

  const albums = useQuery({
    queryKey: ["albums"],
    queryFn: () => fetchSongs("track"),
  });

  const artists = useQuery({
    queryKey: ["artists"],
    queryFn: () => fetchSongs("artist"),
  });

  // const fetchSongs = async () => {
  //   const response = await axios.get("");
  // };

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
        {albums.data?.tracks.items.map((song: any, index: number) => (
          <MusicRow key={index} {...song} />
        ))}
      </section>

      <div className="flex justify-between text-white px-5 mt-10">
        <h1 className="text-[25px] text-bold">Popular artists</h1>
        <button>show all</button>
      </div>
      <section className="flex max-w-screen overflow-x-scroll hide-scroll">
        {artists.data?.artists.items
          .slice(0, 5)
          .map((artist: any, index: number) => (
            <ArtistRow key={index} {...artist} variant="circle" />
          ))}
      </section>

      <div className="flex justify-between text-white px-5 mt-10">
        <h1 className="text-[25px] text-bold">Most played</h1>
        <button>show all</button>
      </div>
      <section className="flex">
        {popularArtists.map((artist: any, index: number) => (
          <MusicRow key={index} {...artist} variant="circle" />
        ))}
      </section>
    </div>
  );
};

export default Homepage;
