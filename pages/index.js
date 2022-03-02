import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
const images = require.context("../public/images", true);
import { families } from "../data/families";
import Navbar from "../components/MobileNav";
import Carousel from "../components/Carousel";

export default function Home({ families }) {
  const [selectedFamilies, setSelectedFamilies] = useState(
    Object.keys(families)
  );
  const [randomizedFamilies, setRandomizedFamilies] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextFamily = () => {
    if (currentIndex < selectedFamilies.length - 1)
      setCurrentIndex(currentIndex + 1);
  };

  const prevFamily = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  function shuffle() {
    let array = [...selectedFamilies];
    let currentIndex = array.length,
      randomIndex;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }

    setRandomizedFamilies(array);
    setCurrentIndex(0);
  }

  const addOrRemoveFamily = (family) => {
    if (selectedFamilies.includes(family)) {
      const filteredFamilies = selectedFamilies.filter(
        (item) => item !== family
      );
      setSelectedFamilies(filteredFamilies);
      localStorage.setItem(
        "selectedFamilies",
        JSON.stringify(filteredFamilies)
      );
    } else {
      setSelectedFamilies([...selectedFamilies, family]);
      localStorage.setItem(
        "selectedFamilies",
        JSON.stringify([...selectedFamilies, family])
      );
    }
    shuffle();
  };

  useEffect(() => {
    shuffle();
  }, [selectedFamilies]);

  useEffect(() => {
    setSelectedFamilies(
      localStorage.getItem("selectedFamilies")
        ? JSON.parse(localStorage.getItem("selectedFamilies"))
        : Object.keys(families)
    );
  }, []);

  return (
    <div className="bg-green-100 bg-opacity-10 dark:bg-gray-900 min-h-screen pb-12">
      <Head>
        <title>California Plant Taxonomy</title>
        <meta name="description" content="California Plant Taxonomy Review" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar
        addOrRemoveFamily={addOrRemoveFamily}
        selectedFamilies={selectedFamilies}
      />
      <div>
        {randomizedFamilies.length > 0 && (
          <Carousel
            showButtons
            nextFamily={nextFamily}
            prevFamily={prevFamily}
            key={
              randomizedFamilies.length > 0
                ? randomizedFamilies[currentIndex]
                : null
            }
            family={
              randomizedFamilies.length > 0
                ? randomizedFamilies[currentIndex]
                : null
            }
          />
        )}
      </div>
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      families: families,
    },
  };
};
