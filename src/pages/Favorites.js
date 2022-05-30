import classes from "../components/meetups/MeetupList.module.css";
import FavMeetupItem from "../components/meetups/FavMeetupItem";

export default function FavoritesPage() {
  return (
    <section>
        <h1>Favorites Page</h1>
        <ul className={classes.list}>
            <FavMeetupItem />
        </ul>
    </section>
  );
}
