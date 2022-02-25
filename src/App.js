import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [jobs, setJobs] = useState([]);
  const [index, setIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchJobs = async () => {
    try {
      const response = await fetch(url);
      const jobs = await response.json();
      setJobs(jobs);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
    //console.log(tours);
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const activeButton = (order) => {
    let index = 0;
    for (let btn of document.querySelectorAll("button")) {
      if (index === order) {
        btn.classList.add("active-btn");
        index++;
        continue;
      }

      btn.classList.remove("active-btn");
      index++;
    }
  };

  if (loading) {
    return (
      <>
        <main>
          <section className="section">
            <div className="title">
              <h2>Loading...</h2>
              <div className="underline"></div>
            </div>
          </section>
        </main>
      </>
    );
  }

  const { id, order, title, dates, duties, company } = jobs[index];
  return (
    <>
      <section className="section">
        <div className="title">
          <h2>experience</h2>
          <div className="underline"></div>
        </div>
        <div className="jobs-center">
          <nav className="btn-container">
            <button
              onClick={() => {
                setIndex(0);
                activeButton(0);
              }}
              className="job-btn"
            >
              TOMMY
            </button>
            <button
              onClick={() => {
                setIndex(1);
                activeButton(1);
              }}
              className="job-btn"
            >
              BIGDROP
            </button>
            <button
              onClick={() => {
                setIndex(2);
                activeButton(2);
              }}
              className="job-btn"
            >
              CUKER
            </button>
          </nav>

          <article className="job-info ">
            <h3>{title}</h3>
            <h4>{company}</h4>
            <p className="job-dates">{dates}</p>
            {duties.map((dutie) => {
              return (
                <div className="job-desc">
                  <div className="job-icon">{<FaAngleDoubleRight />}</div>
                  <p>{dutie}</p>
                </div>
              );
            })}
          </article>
        </div>
      </section>
    </>
  );
}

export default App;
