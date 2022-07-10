import React from 'react';
import { Col } from 'react-bootstrap';

function Intro({ title, contents, img }) {
  return (
    <Col lg={4}>
      <div
        className="mx-auto mb-5 mb-lg-0 mb-lg-3"
        style={{ maxWidth: '20rem' }}
      >
        <div className="d-flex" style={{ height: '7rem' }}>
          <i
            className={`bi ${img} m-auto text-primary`}
            style={{ fontSize: '4.5rem', fontFamily: 'NanumGothic' }}
          />
        </div>
        <h3 style={{ fontFamily: 'NanumGothic' }}>{title}</h3>
        <p
          className="lead mb-0"
          style={{ margin: '30px', fontFamily: 'NanumGothic' }}
        >
          {contents}
        </p>
      </div>
    </Col>
  );
}

export default Intro;
