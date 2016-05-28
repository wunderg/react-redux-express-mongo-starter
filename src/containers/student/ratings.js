import React from 'react';
import StarRating from 'react-star-rating';
import './style.scss';

export default (prop) => {
  const updateRating = (_, stars) => {
    const student = prop.data;
    student.ratings[stars.name] = stars.rating;
    prop.updateStudent(student);
  };

  return (
    <div className="card">
      <div className="card-content black-text">
        <span className="card-title">Ratings</span>
        <hr />
        <div className="stars">
          <span>Logic</span>
          <StarRating
            className="star"
            size={30}
            name="logic"
            totalStars={7}
            rating={prop.data.ratings.logic}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Motivation</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="motiv"
            rating={prop.data.ratings.motiv}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Effort</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="effort"
            rating={prop.data.ratings.effort}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Likebility</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="ethic"
            rating={prop.data.ratings.ethic}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Explanation</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="explain"
            rating={prop.data.ratings.explain}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
        <div className="stars">
          <span>Confidence</span>
          <StarRating
            className="star"
            size={30}
            totalStars={7}
            name="confid"
            rating={prop.data.ratings.confid}
            onRatingClick={updateRating}
            editing={true}
          />
        </div>
      </div>
    </div>
  );
};
