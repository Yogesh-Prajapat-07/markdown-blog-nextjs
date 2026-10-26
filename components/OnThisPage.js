
"use client";

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";

const OnThisPage = ({ htmlContent }) => {
  const [headings, setHeadings] = useState([]);
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!htmlContent) {
      setHeadings([]);
      return;
    }

    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlContent, "text/html");

    const parsedHeadings = Array.from(
      doc.querySelectorAll("h2")
    ).map((el, idx) => ({
      text: el.textContent?.trim() || `Section ${idx + 1}`,
      id: el.id || `otp-heading-${idx}`,
    }));

    setHeadings(parsedHeadings);
  }, [htmlContent]);

  useEffect(() => {
    if (!headings.length) return;

    const elements = headings
      .map(({ id }) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          );

        if (visible.length) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-100px 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));

    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 5
      ) {
        setActiveId(elements[elements.length - 1]?.id || "");
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [headings]);

  return (
    <nav aria-label="On this page">
      <h2 className="mb-3 text-base font-bold">On This Page</h2>

      <ul className="space-y-1 text-sm">
        {headings.map((heading) => {
          const isActive = activeId === heading.id;

          return (
            <li key={heading.id}>
              <a
                href={`#${heading.id}`}
                onClick={() => setActiveId(heading.id)}
                aria-current={isActive ? "location" : undefined}
             className={`block rounded-md border-l-2 py-1 pl-3 transition-colors ${
                  isActive
                    ? "border-primary bg-primary/10 font-semibold text-primary"
                    : "border-transparent text-muted-foreground hover:!text-purple-600"
                }`}
              >
                {heading.text}
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

OnThisPage.propTypes = {
  htmlContent: PropTypes.string.isRequired,
};

export default OnThisPage;
