"use client";
import React from "react";
import OurCourses from "@/components/Courses";
import {useState, useEffect} from "react";
import Link from "next/link";
import Loading from "@/components/Loading";
import CourseSearch from "@/components/CourseSearch";

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourses = async () => {
      const res = await fetch("/api/courses");
      const data = await res.json();
      setCourses(data);
      setLoading(false);
    };

    fetchCourses();
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div>
      <div className="bg-white">
        <div className="relative isolate px-6 pt-14 lg:px-8">
          <div
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            aria-hidden="true"
          >
            <div
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
            />
          </div>
          <div className="mx-auto max-w-2xl  py-24 sm:py-24 lg:py-24">
            <p className="mt-2 text-3xl text-center text-violet-700 font-bold tracking-tight  sm:text-4xl">
              Courses
            </p>
            <CourseSearch getSearchResults={(result) => setCourses(result)} />
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <OurCourses courses={courses} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;
