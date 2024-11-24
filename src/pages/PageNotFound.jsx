import { Link } from 'react-router-dom';

function PageNotFound() {
  return (
    <div className="text-center w-full">
      <h1 className="text-4xl leading-[100px]">Page was not found</h1>

      <Link
        to="/"
        className="text-2xl hover:underline leading-[50px] not-found-link"
      >
        Return to Home Page
      </Link>
    </div>
  );
}

export default PageNotFound;
