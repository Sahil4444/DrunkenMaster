import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { SplitText } from "gsap/all";
import { Star } from "lucide-react";
import React from "react";
import { profileLists } from "../../constants";

const About = () => {
  useGSAP(() => {
    const titleSplit = SplitText.create("#about h2", {
      type: "words",
    });

    const scrollTimeline = gsap
      .timeline({
        scrollTrigger: {
          trigger: "#about",
          start: "top center",
        },
      })

      .from(titleSplit.words, {
        opacity: 0,
        duration: 1,
        yPercent: 100,
        ease: "expo.out",
        stagger: 0.02,
      })
      .from(
        ".top-grid div, .bottom-grid div",
        {
          opacity: 0,
          duration: 1,
          ease: "power1.inOut",
          stagger: 0.04,
        },
        "-=0.5"
      );
  });

  return (
    <div id="about" className="">
      <div className="mb-16 md:px-0 px-5">
        <div className="content">
          <div className="md:col-span-8">
            <p className="badge">Best Cocktails</p>
            <h2>
              Where every detail matters <span className="text-white">-</span>
              from muddle to garnish
            </h2>
          </div>
          <div className="sub-content">
            <p>
              Every cocktail we serve is a reflection of our obsession with
              detail — from the first muddle to the final garnish. That care is
              what turns a simple drink into something truly memorable.
            </p>
            <div className="flex flex-row items-center">
              <div>
                <div className="flex justify-start flex-row gap-2 w-'50%">
                  <p className="text-white">
                    {" "}
                    <Star fill="white" />{" "}
                  </p>
                  <p className="text-white">
                    {" "}
                    <Star fill="white" />{" "}
                  </p>
                  <p className="text-white">
                    {" "}
                    <Star fill="white" />{" "}
                  </p>
                  <p className="text-white">
                    {" "}
                    <Star fill="white" />{" "}
                  </p>
                  <p className="text-white">
                    {" "}
                    <Star fill="white" />{" "}
                  </p>
                </div>

                <p className="md:text-3xl text-xl font-bold">
                  <span>4.5</span>/5
                </p>
                <p className="text-sm text-white-100">
                  More than +44000 customers
                </p>
              </div>
              <div className="w-0.5 h-20 bg-purple-600 rounded-2xl">
                
              </div>
              <div>
                <div className="bg-slate-900 flex flex-row py-4 px-3 rounded-4xl gap-0">
                  {profileLists.map((profile, index)=>(
                    <img key={index} src={profile.imgPath} alt="" className="w-7 rounded" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="top-grid">
        <div className="md:col-span-3">
          <div className="" />
          <img src="/DrunkenMaster/images/abt1.png" alt="grid-img1" />
        </div>
        <div className="md:col-span-6">
          <div className="" />
          <img src="/DrunkenMaster/images/abt2.png" alt="grid-img2" />
        </div>
        <div className="md:col-span-3">
          <div className="" />
          <img src="/DrunkenMaster/images/abt5.png" alt="grid-img5" />
        </div>
      </div>

      <div className="bottom-grid">
        <div className="md:col-span-8">
          <div className="" />
          <img src="/DrunkenMaster/images/abt3.png" alt="grid-img3" />
        </div>
        <div className="md:col-span-4">
          <div className="" />
          <img src="/DrunkenMaster/images/abt4.png" alt="grid-img4" />
        </div>
      </div>
    </div>
  );
};

export default About;
