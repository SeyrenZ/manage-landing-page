"use client";
import Image from "next/image";
import React, { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import { Button } from ".";
import "./styles.css";
const Review = () => {
  const [isPaused, setIsPaused] = useState(false);
  type Review = {
    name: string;
    image: string;
    review: string;
  };

  const reviews: Review[] = [
    {
      name: "Ali Bravo",
      image: "/avatar-ali.png",
      review:
        "We have been able to cancel so many other subscriptions since using Manage, There is no more cross-channel confusion and everyone is much more focused.",
    },
    {
      name: "Anisha Li",
      image: "/avatar-anisha.png",
      review:
        "Manage has supercharged our team's workflow. The ability to maintain visibility on larger milestones at all times keeps everyone motivated.",
    },
    {
      name: "Richard Watts",
      image: "/avatar-richard.png",
      review:
        "Manage allows us to provide structure and process. It keeps us organized and focused. I can’t stop recommending them to everyone I talk to!",
    },
    {
      name: "Shanai Gough",
      image: "/avatar-shanai.png",
      review:
        "Their software allows us to track, manage and collaborate on our projects from anywhere. It keeps the whole team in-sync without being intrusive.",
    },
  ];

  return (
    <div className="w-full h-auto">
      <div className="w-full h-auto py-20 max-w-[1280px] mx-auto flex flex-col items-center justify-center gap-y-12">
        <div className="text-5xl mb-20 text-darkBlue font-bold">
          What they've said
        </div>
        <div className="flex items-center gap-x-5">
          {[...reviews, ...reviews].map((review, index) => (
            <div
              key={index}
              className="w-[600px] p-10 rounded-lg bg-veryLightGray flex flex-col items-center justify-center gap-y-5 relative animate-infinite-scroll"
            >
              <div>
                <Image
                  src={review.image}
                  width={80}
                  height={80}
                  alt=""
                  className="absolute right-0 left-0 mx-auto top-[-40px]"
                />
              </div>
              <div className="text-lg font-bold text-darkBlue">
                {review.name}
              </div>
              <div className="w-[550px] text-lg text-darkGrayBlue text-center">
                {review.review}
              </div>
            </div>
          ))}
        </div>
        <Button />
      </div>
    </div>
  );
};

export default Review;
