import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { useSelector, useDispatch } from 'react-redux';
import PackageList from '../../components/PackageList/PackageList';
import { fetchPackages } from './SearchResultPageSlice';
// import styles from './example.css';

function SearchResultPage() {
  const dispatch = useDispatch();
  const location = useLocation();

  const parsed = queryString.parse(location.search);

  const searchResults = useSelector((state) => state.searchResults);

  useEffect(() => {
    dispatch(fetchPackages(parsed.q));
  }, []);

  return (
    <section>
      {searchResults.loading === 'idle' && (
        <PackageList packs={searchResults.packs} />
      )}
      {searchResults.loading === 'pending' && <p>Loading...</p>}
    </section>
  );
}

export default SearchResultPage;