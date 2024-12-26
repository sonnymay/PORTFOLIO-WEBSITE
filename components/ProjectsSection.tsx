import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Search } from "lucide-react";

const ProjectsSection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "react", label: "React" },
    { id: "javascript", label: "JavaScript" },
    { id: "html", label: "HTML/CSS" },
    { id: "python", label: "Python" },
  ];

  const projects = [
    {
      id: 1,
      title: "Anime Survey Form",
      description: "A responsive survey form with modern design and validation",
      tags: ["html", "javascript"],
      image: "/projects/anime-survey.jpg", // Updated path
      github: "https://github.com/sonnymay/Anime-Survey-Form",
      demo: "https://sonnymay.github.io/Anime-Survey-Form/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description:
        "Modern portfolio website built with Next.js and TailwindCSS",
      tags: ["react", "javascript"],
      image: "/projects/portfolio.jpg", // Updated path
      github: "https://github.com/sonnymay/Portfolio-Website",
      demo: "https://sonnymay.dev",
    },
    {
      id: 3,
      title: "Python Web Scraper",
      description: "Web scraping tool built with Python and Beautiful Soup",
      tags: ["python"],
      image: "/projects/web-scraper.jpg",
      github: "https://github.com/sonnymay/Python-Web-Scraper",
      demo: "#",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesFilter =
      selectedFilter === "all" || project.tags.includes(selectedFilter);
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-12"
        >
          My Projects
        </motion.h2>

        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
            <div className="relative w-full md:w-64">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 rounded-lg border dark:bg-gray-800 dark:border-gray-700"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setSelectedFilter(filter.id)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedFilter === filter.id
                      ? "bg-blue-600 text-white"
                      : "bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -5 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg"
              >
                <div className="relative group">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center space-x-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <Github size={24} />
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={24} />
                    </a>
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
