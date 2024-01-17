const jobs = [
    {
      title: "Helper",
      image: "assets/anchor.png",
      details:
        "Assist and support other workers in various tasks. Helpers provide aid to skilled workers and contribute to the smooth functioning of the work environment.",
      openPositions: "4",
      link: "#",
    },
  
    {
      title: "Fitter",
      image: "assets/anchor.png",
      details:
        "Assemble, install, and maintain machinery and equipment. Fitters are responsible for ensuring that all components fit together correctly and function properly.",
      openPositions: "2",
      link: "#",
    },
  
    {
      title: "Wiper",
      image: "assets/anchor.png",
      details:
        "Perform cleaning and maintenance tasks, often on ships or in industrial settings. Wipers are responsible for keeping equipment and surfaces free from dirt, grease, and other contaminants.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Driver",
      image: "assets/anchor.png",
      details:
        "Operate vehicles to transport goods, people, or materials. Drivers may work in various industries, such as transportation, delivery, or logistics.",
      openPositions: "1",
      link: "#",
    },
  
    {
      title: "Liftman",
      image: "assets/anchor.png",
      details:
        "Operate and maintain elevators (lifts) in buildings. Liftmen ensure the safe and efficient transportation of people and goods between different floors of a structure.",
      openPositions: "4",
      link: "#",
    },
  
    // {
    //   title: "Marketing Manager",
    //   image: "assets/anchor.png",
    //   details:
    //     "Responsible for creating and executing marketing strategies to promote a company or product.",
    //   openPositions: "1",
    //   link: "#",
    // },
  ];
  
  const jobsHeading = document.querySelector(".jobs-list-container h2");
  const jobsContainer = document.querySelector(".jobs-list-container .jobs");
  const jobSearch = document.querySelector(".jobs-list-container .job-search");
  
  let searchTerm = "";
  
  if (jobs.length == 1) {
    jobsHeading.innerHTML = `${jobs.length} Job`;
  } else {
    jobsHeading.innerHTML = `${jobs.length} Jobs`;
  }
  
  const createJobListingCards = () => {
    jobsContainer.innerHTML = "";
  
    jobs.forEach((job) => {
      if (job.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        let jobCard = document.createElement("div");
        jobCard.classList.add("job");
  
        let image = document.createElement("img");
        image.src = job.image;
  
        let title = document.createElement("h3");
        title.innerHTML = job.title;
        title.classList.add("job-title");
  
        let details = document.createElement("div");
        details.innerHTML = job.details;
        details.classList.add("details");
  
        let detailsBtn = document.createElement("a");
        detailsBtn.href = job.link;
        detailsBtn.innerHTML = "More Details";
        detailsBtn.classList.add("details-btn");
  
        let openPositions = document.createElement("span");
        openPositions.classList.add("open-positions");
  
        if (job.openPositions == 1) {
          openPositions.innerHTML = `${job.openPositions} open position`;
        } else {
          openPositions.innerHTML = `${job.openPositions} open positions`;
        }
  
        jobCard.appendChild(image);
        jobCard.appendChild(title);
        jobCard.appendChild(details);
        jobCard.appendChild(detailsBtn);
        jobCard.appendChild(openPositions);
  
        jobsContainer.appendChild(jobCard);
      }
    });
  };
  
  createJobListingCards();
  
  jobSearch.addEventListener("input", (e) => {
    searchTerm = e.target.value;
  
    createJobListingCards();
  });