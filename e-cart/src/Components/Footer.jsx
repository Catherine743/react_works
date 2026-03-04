import React from 'react';
import { Button, Container } from 'react-bootstrap';

function Footer() {
  return (
    <div className="bg-primary text-center text-white mt-5">
      
      <Container className="p-4 pb-0">
        <section className="mb-4">

          <Button
            variant="primary"
            className="m-1 rounded-circle"
            href="#!"
          >
            <i className="fab fa-facebook-f"></i>
          </Button>

          <Button
            variant="info"
            className="m-1 rounded-circle"
            href="#!"
          >
            <i className="fab fa-twitter"></i>
          </Button>

          <Button
            variant="danger"
            className="m-1 rounded-circle"
            href="#!"
          >
            <i className="fab fa-google"></i>
          </Button>

          <Button
            variant="warning"
            className="m-1 rounded-circle"
            href="#!"
          >
            <i className="fab fa-instagram"></i>
          </Button>

          <Button
            variant="secondary"
            className="m-1 rounded-circle"
            href="#!"
          >
            <i className="fab fa-linkedin-in"></i>
          </Button>

          <Button
            variant="dark"
            className="m-1 rounded-circle"
            href="#!"
          >
            <i className="fab fa-github"></i>
          </Button>

        </section>
      </Container>

      <div
        className="text-center p-3"
        style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}
      >
        © 2026 Copyright:
        <a
          className="text-white ms-2"
          href="https://mdbootstrap.com/"
          target="_blank"
          rel="noreferrer"
        >
          bootstrap.com
        </a>
      </div>

    </div>
  );
}

export default Footer;