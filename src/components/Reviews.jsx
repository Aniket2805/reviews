"use client";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Typography from "@mui/material/Typography";
import { IoMdThumbsUp } from "react-icons/io";
import { IoMdThumbsDown } from "react-icons/io";
import Link from "next/link";

export default function Reviews() {
  const [upactive, setUpActive] = useState(false);
  const [downactive, setDownActive] = useState(false);
  const [goodactive, setGoodActive] = useState(false);
  const [averageactive, setAverageActive] = useState(false);
  const [badactive, setBadActive] = useState(false);
  return (
    <div className="h-screen flex justify-center items-center bg-slate-300">
      <div className="px-10 py-10 bg-white rounded-3xl shadow-[0_20px_30px_-4px_rgba(0,0,0,0.8)]">
        <h1 className="mb-6 text-5xl font-bold">Leave a review</h1>
        <div className="mb-3">
          <Typography
            component="legend"
            className="text-2xl font-semibold mb-1"
          >
            Safety
          </Typography>
          <Rating name="simple-controlled" />
        </div>
        <div className="mb-3">
          <Typography
            component="legend"
            className="text-2xl font-semibold mb-1"
          >
            Communication
          </Typography>
          <Rating name="simple-controlled" />
        </div>
        <div className="mb-3">
          <Typography
            component="legend"
            className="text-2xl font-semibold mb-1"
          >
            Would you recommend?
          </Typography>
          <div className="flex font-semibold">
            <div
              className={
                "flex items-center mr-6 text-2xl cursor-pointer " +
                (downactive ? "text-red-500" : "text-slate-400")
              }
              onClick={(event) => {
                setUpActive(false);
                setDownActive(!downactive);
              }}
            >
              <IoMdThumbsDown className="text-3xl mr-1" />
              <span>No</span>
            </div>
            <div
              className={
                "flex items-center mr-6 text-2xl cursor-pointer " +
                (upactive ? "text-green-700" : "text-slate-400")
              }
              onClick={(event) => {
                setDownActive(false);
                setUpActive(!upactive);
              }}
            >
              <IoMdThumbsUp className="text-3xl mr-1" />
              <span>Yes</span>
            </div>
          </div>
        </div>
        <div className="mb-4">
          <Typography
            component="legend"
            className="text-2xl font-semibold mb-3"
          >
            Product Quality
          </Typography>
          <div>
            <span
              className={
                "text-lg font-semibold mr-2 border-2 px-3 py-[6px] rounded-3xl cursor-pointer " +
                (goodactive
                  ? "text-green-700 border-green-400 bg-green-200"
                  : "text-slate-500 border-slate-200 bg-slate-100")
              }
              onClick={(event) => {
                setGoodActive(!goodactive);
                setAverageActive(false);
                setBadActive(false);
              }}
            >
              Good
            </span>
            <span
              className={
                "text-lg font-semibold mr-2 border-2 px-3 py-[6px] rounded-3xl cursor-pointer " +
                (averageactive
                  ? "text-yellow-600 border-yellow-200 bg-yellow-100"
                  : "text-slate-500 border-slate-200 bg-slate-100")
              }
              onClick={() => {
                setAverageActive(!averageactive);
                setBadActive(false);
                setGoodActive(false);
              }}
            >
              Average
            </span>
            <span
              className={
                "text-lg font-semibold mr-2 border-2 px-3 py-[6px] rounded-3xl cursor-pointer " +
                (badactive
                  ? "text-red-600 border-red-400 bg-red-200"
                  : "text-slate-500 border-slate-200 bg-slate-100")
              }
              onClick={() => {
                setBadActive(!badactive);
                setAverageActive(false);
                setGoodActive(false);
              }}
            >
              Bad
            </span>
          </div>
        </div>
        <div>
          <Link href="/thankyou">
            <button
              type="submit"
              className="px-6 py-3 text-xl font-semibold rounded-xl border-2 border-blue-300 bg-blue-200 hover:shadow-[0_10px_10px_-4px_rgba(0,0,0,0.4)]"
            >
              Submit
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
