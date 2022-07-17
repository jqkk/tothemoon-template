import React from 'react';
import styles from './TabContent.module.css';

function TabContent({ comments }) {
  return (
    <div
      className={styles.box}
      style={{ overflow: 'scroll', overflowX: 'hidden', height: '400px' }}
    >
      {comments.map((element, index) => (
        <div key={index}>
          <table style={{ width: '600px' }} className={styles.tb}>
            <colgroup>
              <col style={{ width: '40%' }} />
              <col style={{ width: '60%' }} />
            </colgroup>
            <tbody>
              <tr>
                <th scope="col">{element.writer}</th>
                <th style={{ width: '60%' }}>
                  <div dangerouslySetInnerHTML={{ __html: element.comment }} />
                </th>
              </tr>
            </tbody>
          </table>
          <hr />
        </div>
      ))}
    </div>
  );
}

export default TabContent;
