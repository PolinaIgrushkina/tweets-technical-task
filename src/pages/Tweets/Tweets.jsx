import React, { useEffect, useState } from 'react';
import TweetsList from '../../components/TweetsList/TweetsList';

import css from './Tweets.module.css';

import {
  fetchFollowers,
  fetchNonFollowers,
  fetchUsers,
} from '../../helpers/api';
import { NavLink } from 'react-router-dom';

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState('all');
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsers() {
      let data;
      if (filter === 'all') {
        data = await fetchUsers(page);
      } else if (filter === 'follow') {
        data = await fetchNonFollowers(page);
      } else if (filter === 'followings') {
        data = await fetchFollowers(page);
      }
      setUsers([...users, ...data]);
    }
    getUsers();
    // eslint-disable-next-line
  }, [page, filter]);

  const handleLoadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilterChange = e => {
    const newFilter = e.target.value;
    setPage(1);
    setFilter(newFilter);
    setUsers([]);
  };

  return (
    <div className={css.tweetsPage}>
      <NavLink to="/" className={css.goBack}>
        go back
      </NavLink>

      <div className={css.filter}>
        <label className={css.filterLabel}>
          Filter:
          <select value={filter} onChange={handleFilterChange}>
            <option value="all">Show All</option>
            <option value="follow">Follow</option>
            <option value="followings">Followings</option>
          </select>
        </label>
      </div>

      <TweetsList users={users} />

      <button
        type="button"
        className={page === 3 ? css.disabled : css.button}
        onClick={handleLoadMore}
        disabled={page === 3}
      >
        Load more
      </button>
    </div>
  );
}
