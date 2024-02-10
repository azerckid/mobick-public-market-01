import Head from "next/head";
import Center from "@/components/Center";
import styled from "styled-components";

import Header from "@/components/Header";
import LogoAndSearch from "@/components/LogoAndSearch";
import Banner from "@/components/Banner";
import TodayItem from "@/components/TodayItem";
import NowBooks from "@/components/NowBooks";

import MultiSection from "@/components/MultiSection";
import Youtube from "@/components/Youtube";
import AdArea from "@/components/AdArea";
import PopularBooks from "@/components/PopularBooks";
import MultiSectionOTC from "@/components/MultiSectionOTC";
import Market from "@/components/Market";
import NewsSection from "@/components/NewsSection";
import VerificationSection from "@/components/VerificationSection";

const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Center>
        <LogoAndSearch />
        <Banner />
        <TodayItem />
        <NowBooks />
        <Youtube />
        <PopularBooks />
        <MultiSection />
        <MultiSectionOTC />
        <Market />
        <NewsSection />
        <AdArea />
        <VerificationSection />
      </Center>
    </>
  );
}
