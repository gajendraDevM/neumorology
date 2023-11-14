import React from "react";
import Slider from "react-slick";
import bgt from "../../images/bgt.jpg";
import Title from "../shared/title";
import { MdFormatQuote } from "react-icons/md";
export default function Testimonial() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  const testimonialData = [
    {
      name: "Harish Sagade",
      desc: "Unbelievable All the celebrities believe in it but they don't seem to talk about it in front of everyone.",
    },
    {
      name: "Karan R",
      desc: "Vivid explanation given to me and my friends by Ichalkranji numerrology on requested area and results are amazing .I wish very best luck to vinayak sir and hope all receive expected results to their demands on numerology queries . 👌👌💐",
    },
    {
      name: "Roma s",
      desc: "Vinayak sir has great knowledge and reached many individuals ,families and friends to help out with numerological advice and everyone has shared happy and positive results . Kudos , keep going sir . 👍👍💐",
    },
    {
      name: "Niyaaz Pathan",
      desc: "Veenayak sir passion for numrology can be seen in his work.i have complete trust in him. thank u very much sir for making me understand the value of numrology.",
    },
    {
      name: "Shashikant Kadam",
      desc: "Wish you bright and prosperous future,🙏🙏🙏 very good and reliable guidance from the page...IN",
    },
  ];

  return (
    <div style={{ backgroundImage: `url(${bgt})` }} className="py-6">
      <br />
      <br />
      <div className="container mx-auto p-6 md:w-[65%] ">
        <div className="flex justify-center">
          <Title title="Testimonial" />
        </div>
        <br />
        <Slider {...settings}>
          {testimonialData?.map((item, i) => {
            return (
              <div key={i} className="">
                <div className="bg-[#17384E] mx-2 p-4 px-8 h-[300px] flex items-center justify-center  rounded-xl">
                  <div>
                    <MdFormatQuote
                      className="text-[100px] text-center block mx-auto "
                      style={{ color: "var(--accentColor)" }}
                    />
                    <p className=" text-gray-300 text-center text-[16px]">
                      {item?.desc}
                    </p>
                    <p
                      className=" font-bold text-[var(--accentColor)] text-center text-2xl my-4"
                      style={{ fontFamily: "var(--headerFont)" }}
                    >
                      {item?.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>

      <br />
      <br />
    </div>
  );
}
