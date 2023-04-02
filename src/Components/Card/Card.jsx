import React from "react";
import style from "./Card.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { checkCard, updateBorad } from "../../store/CardSlice";

const Card = ({ item, rotation, index }) => {
  const dispatch = useDispatch();
  const { checker } = useSelector((state) => state.cardSlice);

  const rotateHandler = () => {
    dispatch(checkCard({ item, index }));

    if (checker.length > 0) {
      setTimeout(() => {
        dispatch(updateBorad());
      }, 2000);
    }
  };

  return (
    <div className={style.container} onClick={rotateHandler}>
      <div
        className={style.card}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        <div className={style.front}>
          <i className="fa-solid fa-question"></i>
        </div>
        <div className={style.back}>
          <img src={require(`../../img/img-${item}.png`)} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Card;
