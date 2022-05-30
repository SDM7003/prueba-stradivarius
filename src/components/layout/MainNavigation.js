import {Link} from "react-router-dom";

import classes from "./MainNavigation.module.css";
import $ from 'jquery';
import {useFetch} from "../../util-hooks/useFetch";

export default function MainNavigation({ setPage }) {
  $(document).ready(function () {
    var lastScrollTop = 0;
    $(window).scroll(function (event) {
      var st = $(this).scrollTop();
      if (st < lastScrollTop) {
        $('header').slideDown();
      } else {
        $('header').slideUp();
      }
      lastScrollTop = st;
    });
  });

  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;

  let [fav] = data;

  let counter=0;
  for (const fav of data){
    if (fav.important === true){
      counter++;
    }
    console.log(counter);
  }


  return (
    <header className={classes.header} data-test="navigation-header">
      <div className={classes.logo}>React Meetups</div>
        <nav>
          <ul>
            <li>
              <Link to="/">
                All Meetups
              </Link>
            </li>

            <li>
              <Link to="/newMeetUp">
                Add New Meetup
              </Link>
            </li>
            <li>
              <Link to="/favorites">
                My Favorites
                <span className={classes.badge}>{counter}</span>
              </Link>
            </li>
          </ul>
        </nav>
    </header>
  );
}

