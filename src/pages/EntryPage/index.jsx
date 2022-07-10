import React from 'react';
import { Navbar, Container, Row, Col, Form, Button } from 'react-bootstrap';
import { Intro } from '../../components';
import styles from './EntryPage.module.css';

function EntryPage() {
  return (
    <div>
      <Navbar variant="light" bg="light">
        <Container>
          <Navbar.Brand href="/" className={styles.logo}>
            Naetube
          </Navbar.Brand>
        </Container>
      </Navbar>
      <header className={styles.masthead}>
        <Container>
          <Row className="justify-content-center">
            <Col xl={6}>
              <div className="text-center">
                <h1 className="mb-5">
                  손쉽게 유튜브 영상을 <br /> 분석해보세요 !
                </h1>
                <h5>해당 영상의 URL을 통해 확인하실 수 있습니다</h5>
                <Form>
                  <Row>
                    <Col>
                      <Form.Control
                        placeholder="유튜브 영상의 URL을 입력해주세요"
                        size="lg"
                      />
                    </Col>
                    <Col className="col-auto d-flex">
                      <Button
                        className={styles.btn}
                        style={{
                          backgroundColor: 'transparent',
                          padding: '13px 30px',
                        }}
                      >
                        분석
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </header>
      <section className="bg-light text-center" style={{ padding: '7rem 0' }}>
        <Container>
          <Row>
            <Intro
              title="타임라인과 키워드"
              contents={
                <>
                  해당 영상의 주요 타임라인과
                  <br />
                  베스트 키워드를 조회할 수 있습니다
                </>
              }
              img="bi-clipboard-minus"
            />
            <Intro
              title="댓글 긍정 부정 분류"
              contents="긍정 댓글과 부정 댓글의 비율을 확인할 수 있습니다"
              img="bi-bar-chart-line"
            />
            <Intro
              title="댓글 감정 분석"
              contents="도넛차트를 통해 댓글의 7가지 감정 비율을 확인할 수 있습니다"
              img="bi-pie-chart"
            />
          </Row>
        </Container>
      </section>
    </div>
  );
}

export default EntryPage;
