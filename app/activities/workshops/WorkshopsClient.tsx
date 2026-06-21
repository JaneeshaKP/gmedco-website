"use client";

import SingleActivity from "@/components/Activities/SingleActivity";
import activityData from "@/components/Activities/activityData";
import { useState } from "react";

const ITEMS_PER_PAGE = 9;

export default function WorkshopsClient() {
  const [currentPage, setCurrentPage] = useState(1);

  const workshops = activityData()
    .filter(a => a.tags.includes("Workshop"))
    .sort((a,b) => new Date(b.publishDate.split("/").reverse().join("-")).getTime() - new Date(a.publishDate.split("/").reverse().join("-")).getTime());

  const totalPages = Math.ceil(workshops.length / ITEMS_PER_PAGE);
  const current = workshops.slice((currentPage-1)*ITEMS_PER_PAGE, currentPage*ITEMS_PER_PAGE);

  return (
    <div className="min-h-screen bg-white">
      <div className="border-b border-black/8 px-8 pb-14 pt-36 md:px-16">
        <div className="mx-auto" style={{ maxWidth: 1400 }}>
          <p className="restylane-label mb-4">Activities</p>
          <h1 style={{ fontFamily:"Cormorant Garamond,Georgia,serif", fontSize:"clamp(2.5rem,5vw,5rem)", fontWeight:300, letterSpacing:"-0.03em", lineHeight:1.0, color:"#0d1117" }}>
            Workshops
          </h1>
        </div>
      </div>
      <div className="mx-auto px-8 py-16 md:px-16" style={{ maxWidth: 1400 }}>
        <p className="mb-10 text-xs text-black/35" style={{ fontFamily:"Jost,sans-serif" }}>{workshops.length} workshops</p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {current.map(activity => <SingleActivity key={activity.id} activity={activity} />)}
        </div>
        {totalPages > 1 && (
          <div className="mt-16 flex items-center justify-center gap-2">
            <button onClick={() => setCurrentPage(p => Math.max(1,p-1))} disabled={currentPage===1}
              className="flex h-9 w-9 items-center justify-center border border-black/12 disabled:opacity-30 hover:border-black/40">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M7 2L3 6L7 10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
            {Array.from({length:totalPages},(_,i)=>i+1).map(n => (
              <button key={n} onClick={() => setCurrentPage(n)}
                className="flex h-9 w-9 items-center justify-center border text-xs font-semibold transition-all"
                style={{ fontFamily:"Jost,sans-serif", borderColor:n===currentPage?"#1a1a1a":"rgba(0,0,0,0.12)", background:n===currentPage?"#1a1a1a":"transparent", color:n===currentPage?"#fff":"rgba(0,0,0,0.5)" }}>
                {n}
              </button>
            ))}
            <button onClick={() => setCurrentPage(p => Math.min(totalPages,p+1))} disabled={currentPage===totalPages}
              className="flex h-9 w-9 items-center justify-center border border-black/12 disabled:opacity-30 hover:border-black/40">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M5 2L9 6L5 10" stroke="#1a1a1a" strokeWidth="1.5" strokeLinecap="round"/></svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
