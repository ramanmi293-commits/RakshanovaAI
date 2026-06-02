"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projectName, setProjectName] = useState("");
  const [budget, setBudget] = useState("");
  const [projects, setProjects] = useState<any[]>([]);

  useEffect(() => {
    const saved =
      JSON.parse(localStorage.getItem("projects") || "[]");

    setProjects(saved);
  }, []);

  function saveProject() {
    if (!projectName || !budget) {
  alert("Please enter Project Name and Budget");
  return;
}
    const project = {
      projectName,
      budget,
      status: "Active",
    };

    const existing =
      JSON.parse(localStorage.getItem("projects") || "[]");

    existing.push(project);

    localStorage.setItem(
      "projects",
      JSON.stringify(existing)
    );

    setProjects(existing);

    setProjectName("");
    setBudget("");

    alert("Project Saved!");
  }

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <h1 className="text-4xl font-bold mb-6">
        Project Manager AI
      </h1>

      <div className="bg-gray-900 p-5 rounded-xl max-w-xl">
        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Project Name"
          value={projectName}
          onChange={(e) => setProjectName(e.target.value)}
        />

        <input
          className="w-full mb-3 p-3 rounded bg-gray-800"
          placeholder="Budget"
          value={budget}
          onChange={(e) => setBudget(e.target.value)}
        />

        <button
          onClick={saveProject}
          className="bg-green-600 px-4 py-2 rounded-lg"
        >
          Save Project
        </button>

        <div className="mt-6">
          <h2 className="text-xl font-bold mb-2">
            Saved Projects
          </h2>

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-3 rounded mb-2"
            >
              {project.projectName} | ₹{project.budget} | {project.status}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}