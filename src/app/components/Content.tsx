import React from "react";

const Content = () => {
  type Feature = {
    title: string;
    description: string;
    number: number;
  };

  const features: Feature[] = [
    {
      title: "Track company-wide progress",
      description:
        "See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
      number: 1,
    },
    {
      title: "Advanced built-in reports",
      description:
        "Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
      number: 2,
    },
    {
      title: "Everything you need in one place",
      description:
        "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
      number: 3,
    },
  ];

  return (
    <div className="w-full h-auto bg-white py-24">
      <div
        className="w-full h-full max-w-[1280px] mx-auto flex justify-between"
        data-aos="fade-up"
        data-aos-duration="1100"
      >
        <div className="flex flex-col items-start gap-y-10">
          <div className="text-5xl text-darkBlue font-bold ">
            {`What's different about`}
            <br /> Manage?
          </div>
          <div className="text-lg text-darkGrayBlue ">
            Manage provides all the functionality your
            <br />
            team needs, without the complexity. Our <br />
            software is tailor-made for modern digital <br />
            product teams.
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-10">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-y-4 max-w-[450px]">
              <div className="flex items-center gap-x-7 ml-[-103px]">
                <div className="w-fit py-2 px-7 rounded-full bg-brightRed text-white font-bold">
                  0{feature.number}
                </div>
                <div className="text-lg text-darkBlue font-bold ">
                  {feature.title}
                </div>
              </div>
              <div className="text-lg text-darkGrayBlue">
                {feature.description}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
