import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, projectUrl }) => {
  const handleCardClick = () => {
    if (projectUrl && projectUrl !== "#") {
      window.open(projectUrl, "_blank", "noopener noreferrer");
    }
  };

  return (
    <Col xs={12} sm={6} md={4}>
      <div 
        className="proj-imgbx" 
        onClick={handleCardClick}
        style={{ cursor: projectUrl && projectUrl !== "#" ? 'pointer' : 'default' }}
      >
        <img src={imgUrl} alt={title} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          {projectUrl && projectUrl !== "#" && (
            <div style={{ marginTop: '10px', fontSize: '14px' }}>
              🔗 Click to view
            </div>
          )}
        </div>
      </div>
    </Col>
  );
};