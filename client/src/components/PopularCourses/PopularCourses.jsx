import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-coverflow";
import { useEffect, useState } from "react";
import Course from "../CoursesContainer/Course/Course";
import { getCourses } from "../../api/courseService";

export default function PopularCourses() {
  const [popularCoursesData, setPopularCoursesData] = useState([]);

  useEffect(() => {
    try {
      const fetchData = async () => {
        const data = await getCourses();

        const filteredCourses = data.filter((course) => course.rates >= 4.6);
        setPopularCoursesData(filteredCourses);
      };
      fetchData();
    } catch (err) {
      throw new Error("متاسفانه مشکلی پیش آمد!", err);
    }
  }, []);

  return (
    <section className="mt-12 flex items-center justify-center p-4  rounded-xl">
      <Swiper
        effect="coverflow" // Enable Coverflow effect
        grabCursor={true} // Show grab cursor
        centeredSlides={true} // Center the active slide
        // slidesPerView="4" // Allow auto slides per view
        loop={true}
        coverflowEffect={{
          rotate: 60, // Rotate effect
          stretch: 0, // Stretch effect
          depth: 200, // Depth effect
          modifier: 2, // Modifier for effect
          slideShadows: true, // Enable slide shadows
        }}
        breakpoints={{
          // Define breakpoints for responsive behavior
          640: {
            slidesPerView: "auto", // 1 slide per view on small screens
          },
          768: {
            slidesPerView: 4, // 4 slides per view on medium screens and above
          },
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCoverflow]}
      >
        <section className="mt-12">
          <div className="grid grid-cols-12 gap-8">
            {popularCoursesData.map((course) => (
              <SwiperSlide key={course.id}>
                <Course courseData={[course]} />
              </SwiperSlide>
            ))}
          </div>
        </section>
      </Swiper>
    </section>
  );
}
