import { CourseDetailsProgress } from "@/components/course-details/CourseDetailsProgress";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Course Details",
  description: "We are the best",
};

export default function Courses() {
  return <CourseDetailsProgress />;
}
