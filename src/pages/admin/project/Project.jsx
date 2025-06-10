import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const projects = [
  {
    title: 'Development of a Smart Parking System',
    description: 'based on IoT for Urban Area Optimization',
    image: '/images/parking.jpg',
  },
  {
    title: 'IoT Integration in Manufacturing',
    description: 'to Improve Efficiency and Reduce Operational Costs',
    image: '/images/iot.jpg',
  },
  {
    title: 'Development of an AI Chatbot',
    description: 'as a Virtual Assistant for E-Commerce Customer Service',
    image: '/images/ai-chatbot.jpg',
  },
  {
    title: 'Building a Local Marketplace Website',
    description: 'with a Customized Checkout Experience',
    image: '/images/marketplace.jpg',
  },
  {
    title: 'Mobile Learning Application',
    description: 'with AI-Powered Quiz Recommendations',
    image: '/images/mobile-learning.jpg',
  },
];

const ProjectList = () => {
  return (
    <div className="p-6">
      {/* Breadcrumb */}
      <nav className="text-sm text-gray-500 mb-4">
        <span>Dashboards</span> / <span className="text-black font-semibold">Project List</span>
      </nav>

      {/* Title */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Project List</h1>
        <button className="bg-rose-500 hover:bg-rose-600 text-white px-4 py-2 rounded-lg text-sm">
          + Add Project
        </button>
      </div>

      {/* Search Bar */}
      <div className="relative mb-6 max-w-xl">
        <input
          type="text"
          placeholder="Search by name, etc."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none"
        />
      </div>

      {/* Project List */}
      <div className="space-y-6">
        {projects.map((project, index) => (
          <div key={index} className="flex items-start justify-between border-b pb-4">
            <div className="flex items-start gap-4">
              <img src={project.image} alt={project.title} className="w-28 h-20 object-cover rounded-md" />
              <div>
                <h2 className="font-semibold text-lg">{project.title}</h2>
                <p className="text-sm text-gray-500">{project.description}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <button className="bg-gray-100 hover:bg-gray-200 p-2 rounded">
                <Pencil size={16} />
              </button>
              <button className="bg-rose-100 hover:bg-rose-200 p-2 rounded">
                <Trash2 size={16} className="text-rose-500" />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Controls */}
      <div className="mt-6 flex justify-between items-center text-sm text-gray-500">
        <div>
          Show result:
          <select className="ml-2 border rounded px-2 py-1">
            <option>5</option>
            <option>10</option>
          </select>
        </div>
        <div className="flex items-center gap-1">
          <button className="px-2">&lt;</button>
          <button className="w-6 h-6 rounded-full bg-rose-500 text-white">2</button>
          <button className="px-2">3</button>
          <button className="px-2">4</button>
          <span>...</span>
          <button className="px-2">20</button>
          <button className="px-2">&gt;</button>
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
