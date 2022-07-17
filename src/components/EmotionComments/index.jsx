import React from 'react';
import { Nav } from 'react-bootstrap';
import styles from './EmotionComments.module.css';
import TabContent from '../TabContent';

function EmotionComments({ data }) {
  return (
    <div className={styles.comments_div}>
      <h3 style={{ fontFamily: 'NanumGothic' }}>Comments</h3>
      <div className="navbar" style={{ justifyContent: 'flex-end' }}>
        <Nav className="bg-white" variant="tabs" defaultActiveKey="/link-0">
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_happy} eventKey="link-0">
              행복
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_surprised} eventKey="link-1">
              놀람
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_anger} eventKey="link-0">
              분노
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_sadness} eventKey="link-1">
              슬픔
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_neutral} eventKey="link-0">
              중립
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_fear} eventKey="link-1">
              공포
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_emotion_disgust} eventKey="link-1">
              혐오
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </div>

      <table style={{ width: '100%' }} className={styles.tb}>
        <colgroup>
          <col style={{ width: '40%' }} />
          <col style={{ width: '60%' }} />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" style={{ fontSize: '20px' }}>
              작성자 아이디
            </th>
            <th scope="col" style={{ fontSize: '20px' }}>
              댓글
            </th>
          </tr>
        </thead>
      </table>
      <TabContent comments={data.fear} />
    </div>
  );
}

export default EmotionComments;
