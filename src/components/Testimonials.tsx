import React from 'react';
import Slider from 'react-slick';
import { motion } from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
  text: string;
  name: string;
  role: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    text: 'It seems that only fragments of the original text remain in the Lorem Ipsum texts used today.',
    name: 'Calvin Carlo',
    role: 'Manager',
    image: '01.jpg',
  },
  {
    text: "The most well-known dummy text is the 'Lorem Ipsum', which is said to have originated in the 16th century.",
    name: 'Christa Smith',
    role: 'Manager',
    image: '02.jpg',
  },
  {
    text: 'One disadvantage of Lorum Ipsum is that in Latin certain letters appear more frequently than others.',
    name: 'Jemina CLone',
    role: 'Manager',
    image: '03.jpg',
  },
];

const Testimonials: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    dotsClass: `slick-dots custom-dots`,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  const animationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section id="testimonials" className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:mt-24 mt-16">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.h3
            className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold text-gray-900 dark:text-white"
            variants={animationVariants}
          >
            Trusted by Teams Around the World
          </motion.h3>
          <motion.p
            className="text-slate-400 dark:text-slate-300 max-w-xl mx-auto"
            variants={animationVariants}
          >
            Start working with Tailwind CSS that can provide everything you need
            to generate awareness, drive traffic, connect.
          </motion.p>
        </motion.div>

        <Slider {...settings} className="mt-8 z-10">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="p-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="relative rounded shadow dark:shadow-gray-800 p-6 bg-white dark:bg-slate-900">
                <i className="mdi mdi-format-quote-open mdi-48px text-indigo-600 dark:text-indigo-400"></i>
                <p className="text-slate-400 dark:text-slate-300 mt-4">
                  "{testimonial.text}"
                </p>
                <ul className="list-none mb-0 text-amber-400 mt-3 flex justify-center">
                  {[...Array(5)].map((_, starIndex) => (
                    <li className="inline" key={starIndex}>
                      <i className="mdi mdi-star"></i>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="text-center mt-5">
                <img
                  src={testimonial.image}
                  className="w-14 h-14 rounded-full shadow-md mx-auto"
                  alt={testimonial.name}
                />
                <h6 className="mt-2 font-semibold text-gray-900 dark:text-white">
                  {testimonial.name}
                </h6>
                <span className="text-slate-400 dark:text-slate-300 text-sm">
                  {testimonial.role}
                </span>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Testimonials;
