import { useFetch } from "../../util-hooks/useFetch";
import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import {useState} from "react";

export default function MeetupItem() {

  const { data } = useFetch({
    url: "/data.json",
  });

  if (!data) return <p>Loading...</p>;


  return (
      <div>
      {
        data.map((item)=>(
          <li  key={item.id} className={classes.item} data-test='meet-up-item'>
              <Card>
                <div className={classes.image}>
                  <img src={item.image} alt={item.title}/>
                </div>
                <div className={classes.content}>
                  <h3>{item.title}</h3>
                  <address>{item.address}</address>
                  <p>{item.description}</p>
                </div>
                <div className={classes.actions}>
                  {item.important === false &&
                      <button>Add to favorites</button>
                  }
                  {item.important === true &&
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
