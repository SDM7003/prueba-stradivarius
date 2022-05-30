import { useFetch } from "../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";

export default function FavMeetupItem() {
  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;
  let [fav] = data;

  return (
      <div>
      {
        data.map((fav)=>(
            fav.important===true &&
          <li  key={fav.id}  className={classes.fav} data-test='meet-up-item'>
              <Card>
                <div className={classes.image}>
                  <img src={fav.image} alt={fav.title}/>
                </div>
                <div className={classes.content}>
                  <h3>{fav.title}</h3>
                  <address>{fav.address}</address>
                  <p>{fav.description}</p>
                </div>
                <div className={classes.actions}>
                  {fav.important === false &&
                      <button>Add to favorites</button>
                  }
                  {fav.important === true &&
                      <button>Remove from Favorites</button>
                  }
                </div>
              </Card>
          </li>
        ))
      }
      </div>
  );
}
