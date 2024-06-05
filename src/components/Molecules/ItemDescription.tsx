"use client";

import CourseRate from "@/components/Atoms/CourseRate";
import ImageCard, { ImageCardProps } from "@/components/Atoms/ImageCard";

interface ItemDescriptionProps {
  title: string;
  description: string;
  imageHeight?: ImageCardProps["imageHeight"];
  rate?: number;
  lessons?: number;
}

export default function ItemDescription({
  title,
  description,
  imageHeight,
  rate,
  lessons,
}: Readonly<ItemDescriptionProps>) {
  return (
    <div className="flex flex-col">
      <ImageCard imageHeight={imageHeight} />
      <span className="small-title text-font-light">{title}</span>
      <span className="small-content grow">{description}</span>
      {rate && lessons && <CourseRate rate={rate} lessons={lessons} />}
    </div>
  );
}
