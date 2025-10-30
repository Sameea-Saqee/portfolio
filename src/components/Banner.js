import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer", "WordPress Developer", "React.js Developer", "Shopify Expert"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const handleDownloadCV = () => {
    try {
      const cvUrl = process.env.PUBLIC_URL + '/Sameea CV.pdf';
      const link = document.createElement('a');
      link.href = cvUrl;
      link.download = 'Sameea_CV.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      
      setTimeout(() => {
        window.open(cvUrl, '_blank');
      }, 1000);
      
    } catch (error) {
      console.error('Error downloading CV:', error);
      alert('CV download failed. Please check the file path.');
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={8} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Sameea`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Software Engineer", "WordPress Developer", "React.js Developer" ]'><span className="wrap">{text}</span></span></h1>
                  <p>Software Engineer with expertise in WordPress development, React.js, Next.js, TypeScript, Tailwind CSS, and Shopify. Experienced in WordPress theme customization, plugin development, React Hooks, state management, and performance optimization. Skilled in creating visually appealing and conversion-focused eCommerce websites with seamless digital experiences.</p>
                  <button onClick={handleDownloadCV}>Download my CV<ArrowRightCircle size={25} /></button>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={4} xl={5}>
            {/* Image removed - space for better text layout */}
          </Col>
        </Row>
      </Container>
    </section>
  )
}