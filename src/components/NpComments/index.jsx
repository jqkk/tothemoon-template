import React from 'react';
import { Nav } from 'react-bootstrap';
// import { CSSTransition } from 'react-transition-group';
import styles from './NpComments.module.css';
import TabContent from '../TabContent';

function NpComments({ data }) {
  return (
    <div className={styles.comments_div}>
      <h3 style={{ fontFamily: 'NanumGothic' }}>Comments</h3>
      <div className="navbar" style={{ justifyContent: 'flex-end' }}>
        <Nav className="bg-white" variant="tabs" defaultActiveKey="/link-0">
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_positive} eventKey="link-0">
              긍정
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link id={styles.nav_menu_negative} eventKey="link-1">
              부정
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
      <TabContent comments={data.positive} />
    </div>
  );
}

export default NpComments;
