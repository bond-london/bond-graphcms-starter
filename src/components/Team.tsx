import React from "react";
import { Icon, Individual, Person } from ".";
import {
  ButtonBack,
  ButtonNext,
  CarouselProvider,
  Slide,
  Slider,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { Section } from "../layouts";
import classNames from "classnames";
import { useMediaQuery } from "@bond-london/gatsby-graphcms-components";

export const Team: React.FC<{ team: Individual[] }> = ({ team }) => {
  const isSm = useMediaQuery("(min-width: 640px)");
  const isMd = useMediaQuery("(min-width: 768px)");
  const isLg = useMediaQuery("(min-width: 1024px)");

  return (
    <Section
      componentName="Team"
      className="bg-light-blue"
      preChildren={
        <div className="col-start-1 col-span-3 row-start-4 row-span-3 bg-blue" />
      }
    >
      <CarouselProvider
        className={classNames("col-span-full content-grid")}
        totalSlides={team.length}
        naturalSlideWidth={1}
        naturalSlideHeight={1}
        isIntrinsicHeight={true}
        visibleSlides={isLg ? 4 : isMd ? 3 : isSm ? 2 : 1}
      >
        <ButtonBack
          className={classNames(
            "row-start-1 self-end justify-self-start z-30",
            "col-start-1",
            "tablet:col-start-1",
            "tablet:grid tablet:grid-cols-1 tablet:grid-rows-3 tablet:self-auto"
          )}
        >
          <div
            className={classNames(
              "h-xs w-xs rounded-square bg-green",
              "flex justify-center items-center",
              "tablet:row-start-1 tablet:row-span-2 tablet:self-center"
            )}
          >
            <Icon type="ArrowBack" className="text-dark-blue h-xxs" />
          </div>
        </ButtonBack>
        <Slider
          className={classNames(
            "row-start-1",
            "col-start-1 col-span-4",
            "tablet:col-start-2 tablet:col-span-6",
            "laptop:col-start-2 laptop:col-span-10",
            "text-grey"
          )}
          classNameTray="space-x-mobile-gap tablet:space-x-tablet-gap laptop:space-x-desktop-gap"
        >
          {team.map((individual, index) => (
            <Slide key={individual.name} index={index}>
              <Person
                visual={individual.visual}
                name={individual.name}
                position={individual.position}
              />
            </Slide>
          ))}
        </Slider>
        <ButtonNext
          className={classNames(
            "row-start-1 self-end justify-self-end z-30",
            "col-start-4",
            "tablet:col-start-8 laptop:col-start-12",
            "tablet:grid tablet:grid-cols-1 tablet:grid-rows-3 tablet:self-auto"
          )}
        >
          <div
            className={classNames(
              "h-xs w-xs rounded-square bg-green",
              "flex justify-center items-center",
              "tablet:row-start-1 tablet:row-span-2 tablet:self-center"
            )}
          >
            <Icon type="ArrowForward" className="text-dark-blue h-xxs" />
          </div>
        </ButtonNext>
      </CarouselProvider>
    </Section>
  );
};
