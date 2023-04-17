import React, { useEffect, useState } from "react";
import TweetsList from "../../components/TweetsList/TweetsList";
import { fetchUsers } from "../../helpers/api";
import css from "./Tweets.module.css";
import { NavLink } from "react-router-dom";

export default function Tweets() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    async function getUsers() {
      const data = await fetchUsers(page);
      setUsers([...users, ...data]);
    }
    getUsers();
    // eslint-disable-next-line
  }, [page]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className={css.tweetsPage}>
      <NavLink to="/" className={css.goBack}>
        go back
      </NavLink>

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
