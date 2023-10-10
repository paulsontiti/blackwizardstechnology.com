import CourseDetailsComponent from "@/components/course-details/CourseDetailsComponent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Classroom",
  description: "We are the best",
};
export default function CourseDetails() {
  return <CourseDetailsComponent />;
}
