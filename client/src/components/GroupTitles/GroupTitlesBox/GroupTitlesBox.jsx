/* eslint-disable react/prop-types */
import { PiArrowLeftBold } from "react-icons/pi";
import GroupTitlesSub from "../GroupTitlesSub/GroupTitlesSub";
import GroupTitlesText from "../GroupTitlesText/GroupTitlesText";
import AllCoursesBtn from "../../AllCoursesBtn/AllCoursesBtn";
import AllArticlesBtn from "../../AllArticlesBtn/AllArticlesBtn";

export default function GroupTitlesBox({
  text,
  sub,
  bgColor,
  showAllCourses,
  showAllArticles,
  sectionClass,
}) {
  return (
    <section className={`${sectionClass}`}>
      <div className="flex items-center justify-between flex-col gap-4 md:flex-row">
        <div className="flex flex-col gap-4">
          <GroupTitlesText text={text} bgColor={bgColor} />
          <GroupTitlesSub sub={sub} />
        </div>
        {showAllCourses ? (
          <AllCoursesBtn>
            مشاهده همه دوره ها
            <PiArrowLeftBold size={20} />
          </AllCoursesBtn>
        ) : showAllArticles ? (
          <AllArticlesBtn>
            مشاهده همه مقالات
            <PiArrowLeftBold size={20} />
          </AllArticlesBtn>
        ) : null}
      </div>
    </section>
  );
}
