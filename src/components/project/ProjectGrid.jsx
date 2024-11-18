import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCard';

const projects = [
  {
    category: 'Artificial Intelligence (AI)',
    icon: 'https://via.placeholder.com/16', // Ikon kategori
    title: 'AI Smart Parking And Application',
    imageUrl: 'https://via.placeholder.com/300', // URL gambar
  },
  {
    category: 'Artificial Intelligence (AI)',
    icon: 'https://via.placeholder.com/16',
    title: 'AI-Enhanced PCB Counter',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    category: 'Mobile',
    icon: 'https://via.placeholder.com/16',
    title: 'Forklift Management System',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    category: 'Mobile',
    icon: 'https://via.placeholder.com/16',
    title: 'My Satnusa Mobile Apps',
    imageUrl: 'https://via.placeholder.com/300',
  },
  {
    category: 'Artificial Intelligence (AI)',
    icon: 'https://via.placeholder.com/16',
    title: 'Xiaomi AI-Powered',
    imageUrl: 'https://via.placeholder.com/300',
  },
];

const ProjectGrid = () => {
  return (
    <Container className="my-5">
      <h1 className="text-center fw-bold">DOT PROJECT</h1>
      <p className="text-center text-muted">
        #AdaptiveLeadership #StartupVisionary #InnoMaestro #TeamAgility
      </p>
      <Row className="g-4 mt-4">
        {projects.map((project, index) => (
          <Col key={index} md={4} lg={3} sm={6} xs={12}>
            <ProjectCard
              category={project.category}
              icon={project.icon}
              title={project.title}
              imageUrl={project.imageUrl}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProjectGrid;
