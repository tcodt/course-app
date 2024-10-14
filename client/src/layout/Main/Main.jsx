import Courses from "../../components/CoursesContainer/Courses/Courses";
import GroupTitlesBox from "../../components/GroupTitles/GroupTitlesBox/GroupTitlesBox";
import LandingBox from "../../components/Landing/LandingBox/LandingBox";
import PopularCourses from "../../components/PopularCourses/PopularCourses";
import RoadMap from "../../components/RoadMap/RoadMap";
import AboutUsMain from "../../components/AboutUsMain/AboutUsMain";
import ArticlesBox from "../../components/ArticlesContainer/ArticlesBox/ArticlesBox";

export default function Main() {
  return (
    <main className="bg-slate-100 p-4 pb-24 sm:pb-40 relative z-10">
      <div className="container mx-auto">
        <LandingBox />
        <GroupTitlesBox
          text="آخرین دوره های تیکد"
          sub="سکوی پرتاپ شما به سمت موفقیت"
          bgColor="bg-amber-500"
          showAllCourses={true}
          sectionClass="mt-24 sm:mt-40"
        />
        <Courses />
        <GroupTitlesBox
          text="نقشه راه ها"
          sub="نقشه های راه برای شروع اصولی یادگیری"
          bgColor="bg-red-500"
          showAllCourses={false}
          sectionClass="mt-24 sm:mt-40"
        />
        <RoadMap />
        <GroupTitlesBox
          text="پرطرفدار ترین دوره ها"
          sub="دوره های محبوب و پروژه محور تیکد"
          bgColor="bg-emerald-500"
          sectionClass="mt-24 sm:mt-40"
        />
        <PopularCourses />
        <GroupTitlesBox
          text="ما چه کمکی میتونیم بهت بکنیم"
          sub="از شروع مسیر کنارتیم نمیذاریم آب تو دلت تکون بخوره"
          bgColor="bg-sky-500"
          sectionClass="mt-24 sm:mt-40"
        />
        <AboutUsMain />
        <GroupTitlesBox
          text="وبلاگ آموزشی تیکد"
          sub="مقالات بروز برنامه نویسی"
          bgColor="bg-amber-500"
          showAllArticles={true}
          sectionClass="mt-24 sm:mt-40"
        />
        <ArticlesBox count={4} />
      </div>
    </main>
  );
}
