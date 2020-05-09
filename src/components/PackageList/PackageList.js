import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PackageCard from '../PackageCard/PackageCard';
// import {all the reducers/actions} from './sliceFile.js';
// import styles from './example.css';

// Use absolute imports like this for components!
// import SearchBox from 'components/SearchBox/SearchBox';

function PackageList(props) {
  // const varName = useSelector((state) => state.specific.thing.i.want); // to get stuff from state
  // const dispatch = useDispatch(); // to dispatch actions

  const packs = props.packs.map((pack) => (
    <li key={pack.package.name}>
      <PackageCard pack={pack} />
    </li>
  ));

  console.log(props);

  return (
    <>{packs.length > 0 ? <ul>{packs}</ul> : <p>Nothing to see here...</p>}</>
  );
}

export default PackageList;