"use client";

import Image from "next/image";
import { useState } from "react";
import ReactPlayer from "react-player";
import { Pagination } from "./Pagination";
import { styled } from "styled-components";
import { FaYoutube } from "react-icons/fa";
import { IoCloudDownloadOutline } from "react-icons/io5";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/variants";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PropsData = {
  data: {
    categories: string[];
    results: VideosData[];
  };
};

type VideosData = {
  title: string;
  categories: string[];
  description: string;
  img: string;
  url: string;
};

export function Videos({ data: { categories, results } }: PropsData) {
  const [videosData, setVideosData] = useState<VideosData[]>(results);
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const videosPerPage = 9;
  const lastVideoIndex = currentPage * videosPerPage;
  const firstVideoIndex = lastVideoIndex - videosPerPage;
  const currentVideos = videosData.slice(firstVideoIndex, lastVideoIndex);

  const handleFilterCategory = (category: string) => {
    setLoading(true);
    setVideosData([]);
    setCurrentPage(1);
    setSelectedCategory(category);

    const filteredVideos = results.filter((res) =>
      res.categories.includes(category)
    );

    setTimeout(() => {
      setVideosData(filteredVideos);
      setLoading(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col">
      <motion.div
        className="flex items-center justify-center md:justify-between mt-8 md:mt-[90px] flex-wrap gap-y-4"
        initial="initial"
        animate="animate"
        variants={fadeIn("up", 0.6)}
      >
        <div className="grid grid-cols-2 gap-4 md:gap-x-2 md:flex md:flex-wrap items-center justify-center md:p-0">
          {categories.map((category, i) => {
            const isActive: boolean = category === selectedCategory;

            return (
              <StyledButton
                key={`${category}${i}`}
                onClick={() => handleFilterCategory(category)}
                $isactive={isActive}
                disabled={loading || isActive}
              >
                {loading && isActive ? <span>loading...</span> : category}
              </StyledButton>
            );
          })}
        </div>

        <div className="flex gap-x-2 md:flex-none items-center justify-center md:p-0">
          <label
            htmlFor="date"
            className="text-text-color font-bold text-xs md:text-sm"
          >
            Ordenar por
          </label>
          <select
            id="date"
            className="border border-text-color bg-transparent text-text-color-50 font-semibold rounded-lg py-[0.4rem] px-1 md:px-[.6rem] text-xs md:text-base"
          >
            <option value="">Data de Publicação</option>
          </select>
        </div>
      </motion.div>

      <motion.hr
        className="flex self-center w-[90%] md:w-full h-[1px] md:h-[2px] bg-gray-500 mt-8"
        initial="initial"
        animate="animate"
        variants={fadeIn("up", 0.7)}
      ></motion.hr>

      <motion.div
        className={`min-h-[270px] md:min-h-[300px] flex ${
          loading && "justify-center items-center"
        } p-4 md:p-0 overflow-x-scroll md:overflow-x-visible ${
          loading
            ? "md:grid md:grid-cols-1 md:place-items-center"
            : "md:grid md:grid-cols-3"
        }  md:my-16 gap-x-4 md:gap-8`}
        initial="initial"
        animate="animate"
        variants={fadeIn("up", 0.8)}
      >
        {loading && (
          <div className="w-[60px] h-[60px] border-2 border-transparent border-l-blue-primary rounded-full animate-spin" />
        )}
        {!loading &&
          currentVideos?.map((result, i) => (
            <Dialog key={`result-${i}`}>
              <DialogTrigger>
                <StyledVideo>
                  <div className="w-full relative overflow-hidden">
                    <Image src={result.img} alt="" width={362} height={204} />
                    <span className="overlay grid place-items-center">
                      <FaYoutube size={"5rem"} color="#fff" />
                    </span>
                  </div>

                  <p className="title_video">{result.title}</p>

                  <div className="flex flex-wrap gap-2 ml-4 mb-4 md:ml-8 md:mb-6">
                    {result.categories.map((category) => {
                      const sameCategory: boolean =
                        category === selectedCategory;

                      return (
                        <StyledTags
                          key={category}
                          $samecategory={sameCategory}
                          className={`text-[9px] sm:text-[11px] py-[2px] px-[6px] sm:px-2 rounded-full font-semibold uppercase`}
                        >
                          {category}
                        </StyledTags>
                      );
                    })}
                  </div>
                </StyledVideo>
              </DialogTrigger>
              <DialogContent className="text-text-color py-2 md:py-0">
                <DialogHeader className=" md:flex items-center">
                  <DialogTitle className="w-[240px] md:w-[340px] md:px-0 md:py-6 text-center text-base md:text-2xl">
                    <span className="text-blue-primary">Webinar:</span>&nbsp;
                    {result.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="player-wrapper">
                  <ReactPlayer
                    className="react-player"
                    url={result.url}
                    width="100%"
                    height="100%"
                  />
                </div>

                <div className="px-6 md:min-h-full md:overflow-y-auto">
                  <div className="md:inline-block md:mt-4 w-full text-sm md:text-base">
                    <DialogTitle className="text-sm md:text-lg">
                      Descrição
                    </DialogTitle>
                    <hr className="my-1 md:my-2" />
                    <p className="">{result.description}</p>
                  </div>

                  <div className="md:inline-block mt-4">
                    <div className="md:inline-block w-full text-sm md:text-base my-3">
                      <DialogTitle className="text-sm md:text-lg">
                        Downloads
                      </DialogTitle>
                      <hr className="my-1 md:my-2" />
                    </div>

                    <div className="flex gap-x-2 gap-y-2 md:pb-5 text-xs md:text-sm flex-wrap">
                      <div className="flex items-center gap-x-0 text-modal-color-1 font-semibold bg-modal-color-1/25 rounded-md overflow-hidden cursor-pointer">
                        <div className="bg-modal-color-1/20 grid place-items-center p-2">
                          <IoCloudDownloadOutline size={"1.1rem"} />{" "}
                        </div>
                        <span className="py-1 px-2">Spreadsheet.xls</span>
                      </div>

                      <div className="flex items-center gap-x-0 text-modal-color-2 font-semibold bg-modal-color-2/25 rounded-md overflow-hidden cursor-pointer">
                        <div className="bg-modal-color-2/20 grid place-items-center p-2">
                          <IoCloudDownloadOutline size={"1.1rem"} />{" "}
                        </div>
                        <span className="py-1 px-2">Document.doc</span>
                      </div>

                      <div className="flex items-center gap-x-0 text-modal-color-3 font-semibold bg-modal-color-3/25 rounded-md overflow-hidden cursor-pointer">
                        <div className="bg-modal-color-3/20 grid place-items-center p-2">
                          <IoCloudDownloadOutline size={"1.1rem"} />{" "}
                        </div>
                        <span className="py-1 px-2">Presentation.ppt</span>
                      </div>
                    </div>
                  </div>
                </div>
              </DialogContent>
            </Dialog>
          ))}
      </motion.div>

      <hr className="w-full h-[1px] md:h-[2px] bg-gray-500" />

      {!loading && (
        <Pagination
          totalVideos={videosData.length}
          videosPerPage={videosPerPage}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </div>
  );
}

const theme = {
  colors: {
    primary: "#1c3c50",
    secondary: "#007eff",
  },
};

const { primary, secondary } = theme.colors;

const StyledTags = styled.span<{ $samecategory: boolean }>`
  color: ${(props) => (props.$samecategory ? "#FFF" : primary)};
  background: ${(props) => (props.$samecategory ? secondary : "#FFF")};
  border: 1px solid
    ${({ $samecategory }) => ($samecategory ? "transparent" : primary)};
`;

const StyledVideo = styled.div`
  display: flex;
  flex-direction: column;
  width: 262px;
  height: auto;
  box-shadow: 0 0 16px #1113;
  border-radius: 1rem;
  overflow: hidden;

  @media (min-width: 768px) {
    width: 362px;
  }

  .title_video {
    width: 100%;
    color: ${primary};
    text-align: left;
    font-size: 14px;
    line-height: 1.2;
    font-weight: 700;
    padding: 1rem;
    padding-top: 0;
    transition: 0.25s;

    @media (min-width: 768px) {
      font-size: 18px;
      padding: 0 0 1rem 2rem;
      width: 100%;
      margin-left: 0;
      line-height: normal;
    }
  }

  .overlay {
    position: absolute;
    bottom: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    transition: 0.25s;
    background: rgba(0, 126, 255, 0.5);
  }

  &:hover {
    cursor: pointer;

    .overlay {
      bottom: 0;
    }

    p {
      color: ${secondary};
    }
  }
`;

const StyledButton = styled.button<{ $isactive: boolean }>`
  color: ${(props) => (props.$isactive ? "#FFF" : primary)};
  border: 1px solid ${({ $isactive }) => ($isactive ? "transparent" : primary)};
  background: ${({ $isactive }) => ($isactive ? secondary : "")};
  font-weight: 700;
  padding: 0.4rem 0;
  border-radius: 50px;
  transition: all 0.2s;
  font-size: 12px;
  width: max-content;
  min-width: 160px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    font-size: 1rem;
    font-weight: 600;
  }

  &:hover {
    color: ${({ $isactive }) => ($isactive ? "#fff" : secondary)};
    border-color: ${secondary};
  }
`;
