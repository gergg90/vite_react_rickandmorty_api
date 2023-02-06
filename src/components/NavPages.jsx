function NavPages({ page, setPage }) {
  return (
    <header className="d-flex justify-content-between aling-items-center">
      <p>Page: {page}</p>
      <button
        className="btn btn-primary btn-sm"
        onClick={() => setPage(page + 1)}
      >
        Page {page + 1}
      </button>
    </header>
  );
}

export default NavPages;
