"use client";
import { BsClipboard2Fill } from "react-icons/bs";
import { BsStarFill } from "react-icons/bs";

interface CourseRateProps {
  rate?: number;
  lessons?: number;
}

export default function CourseRate({
  rate = 0,
  lessons = 0,
}: Readonly<CourseRateProps>) {
  return (
    <div className="flex items-center pt-2">
      <BsStarFill className="text-[.25em] text-primary-light mr-1" />
      <span className="text-[.25em] text-font-light mr-4">{rate}</span>
      <BsClipboard2Fill className="text-[.25em] text-primary-light mr-1"/>
      <span className="text-[.25em] text-font-light">{lessons} Lessons</span>
    </div>
  );
}
