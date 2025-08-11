import React from 'react'

function MyCourses() {
  return (
    <div className='bg-white text-black'>
      <div>
      My Courses Data Coming Soon...
    </div>
    </div>
  )
}

export default MyCourses





// "use client";
// import { useEffect, useState } from "react";
// import { useGetCourseQuery } from "@/redux/services/coursesApi";
// import { skipToken } from "@reduxjs/toolkit/query";
// import { useSession } from "next-auth/react";

// export default function MyCourses() {
//   const { data: session } = useSession();
//   const email = session?.user?.email;
  

//   const { data: bookedCourses, isLoading: bookedLoading } = useGetCourseQuery(
//     email ?? skipToken
//   );

//   const [courseDetails, setCourseDetails] = useState([]);

//   useEffect(() => {
//     if (!bookedCourses) return;

//     const fetchDetails = async () => {
//       const responses = await Promise.all(
//         bookedCourses.map((booked) =>
//           fetch(`/api/courses?courseId=${booked.courseId}`).then((res) => res.json())
//         )
//       );
//       setCourseDetails(responses.map((res) => res.data));
//     };

//     fetchDetails();
//   }, [bookedCourses]);

//   if (bookedLoading) return <p>Loading booked courses...</p>;

//   return (
//     <div className="bg-white text-black">
//       <h2>My Courses</h2>
//       {courseDetails.map((course) => (
//         <div key={course._id}>
//           <h3>{course.title}</h3>
//           <p>{course.description}</p>
//         </div>
//       ))}
//     </div>
//   );
// }
