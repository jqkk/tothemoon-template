import React from 'react';

function Search() {
  return (
    <div className="input-group" style={{ height: '60px' }}>
      <input
        type="search"
        className="form-control rounded"
        placeholder="검색할 댓글을 입력하세요!"
        aria-label="Search"
        aria-describedby="search-addon"
        style={{ borderColor: 'black', border: '3px solid rgb(178,34,34)' }}
      />
      <button
        type="button"
        className="btn btn-outline-primary"
        style={{ width: '100px' }}
      >
        <i className="bi bi-search" />
      </button>
    </div>
  );
}

export default Search;
