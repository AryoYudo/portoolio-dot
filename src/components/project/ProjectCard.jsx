import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, Badge, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProjectCard = ({ category, icon, title, imageUrl }) => {
  const navigate = useNavigate();

  return (
    <Card className="h-100 border-0 shadow" style={{ borderRadius: '15px', overflow: 'hidden' }}>
      <div style={{ position: 'relative' }}>
        {/* Gambar dengan overlay */}
        <Card.Img src={imageUrl} alt={title} />
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(to bottom, rgba(255, 20, 147, 0.5), rgba(0, 0, 0, 0.5))',
          }}
        ></div>
        {/* Badge */}
        <Badge
          bg="light"
          className="text-dark"
          style={{
            position: 'absolute',
            top: '10px',
            left: '10px',
            padding: '5px 10px',
            fontSize: '0.8rem',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <img src={icon} alt="icon" style={{ width: '16px', height: '16px' }} />
          {category}
        </Badge>
      </div>
      {/* Konten bawah */}
      <Card.Body className="d-flex flex-column justify-content-end align-items-center bg-light p-3">
        <Link to="/detailproject">
          <Button
            variant="danger"
            className="text-white fw-bold"
            style={{ borderRadius: '20px', padding: '10px 20px', fontSize: '0.9rem' }}
            >
            {title}
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default ProjectCard;
