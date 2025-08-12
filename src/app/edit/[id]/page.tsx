import EditCourseForm from "@/components/edit-course-form/EditCourseForm";
import React from "react";

type SingleCourseResponse = {
  data: object;
};

const getSingleCourseData = async (id: string): Promise<SingleCourseResponse> => {
  const res = await fetch(`http://localhost:3000/api/courses/${id}`);
  if (!res.ok) throw new Error("Failed to fetch single course data");
  return res.json();
};

async function EditCourse({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const singleData = await getSingleCourseData(id);
  console.log("Single Course Data --> ", singleData);

  return (
    <div className="bg-white text-black">
      <EditCourseForm id={id} data={singleData.data} />
    </div>
  );
}

export default EditCourse;
