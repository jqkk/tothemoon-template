import React from 'react';
import { Navbar, Container, Row, Col, Form } from 'react-bootstrap';
import styles from './EntryPage.module.css';

function EntryPage() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/">Naetube</Navbar.Brand>
        </Container>
      </Navbar>
      <header className={styles.masthead}>
        <Container>
          <Row>
            <Col>
              <div className="text-center">
                <h1 className="mb-5">
                  손쉽게 유튜브 영상을 <br /> 분석해보세요!
                </h1>
                <h5>해당 영상의 URL을 통해 확인하실 수 있습니다</h5>
                <Form>
                  <Row>
                    <Col>
                      <Form.Control placeholder="유튜브 영상의 URL을 입력해주세요" />
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
}

export default EntryPage;
