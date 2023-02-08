import React from "react";
import styles from "./Card.module.scss";
const Card = (props) => {
  const { img, title, author, students, level, rating, duration, modules } =
    props;

  return (
    <div className={styles.Container}>
      <img src={img} className={styles.Img} alt=""/>
      <span className={styles.ImgBeginer}>{level}</span>
      <span className={styles.Title}>{title}</span>
      <div className={styles.AutorConteiner}>
        <span className={styles.Autor}>{author}</span>
        <span className={styles.Rating}>{rating}</span>
      </div>
      <div className={styles.StudentsContainer}>
        <span className={styles.StudentsContainer}> {students} Student</span>
        <span className={styles.StudentsContainer}> {modules} Modul</span>
        <span className={styles.StudentsContainer}> {duration}</span>
      </div>
    </div>
  );
};
export default Card;
