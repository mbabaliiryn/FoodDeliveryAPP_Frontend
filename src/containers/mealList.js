import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { Container, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import Meal from '../components/meal';
import fetchMeals from '../redux/actions/meals';
import ErrorPage from '../components/errors/errorPage';
import LoadingPage from '../components/loadingPage';
import '../styles/meal.scss';

const notFound = 'No meal found';

const MealList = () => {
  const { categoryType } = useParams();

  const mealReducer = useSelector(state => state.meals);
  const { loading, meals, error } = mealReducer;

  useEffect(() => {
    if (categoryType) {
      fetchMeals(categoryType);
    }
  }, [fetchMeals, categoryType]);

  return (
    <section className="meals-section">
      <Container>
        <Row>
          {(() => {
            if (meals != null) {
              if (loading) {
                return <LoadingPage />;
              }
              return (
                error ? <ErrorPage error={error.message} />
                  : meals.map(item => <Meal key={item.idMeal} meal={item} />)
              );
            }
            return <ErrorPage error={notFound} />;
          })() }
        </Row>
      </Container>
    </section>
  );
};

const mapStateToProps = state => ({
  error: state,
});

const mapDispatchToProps = dispatch => ({
  fetchMeals: category => {
    dispatch(fetchMeals(category));
  },
});

MealList.defaultProps = {
  error: '',
  fetchMeals: () => undefined,
};

MealList.propTypes = {
  error: PropTypes.string,
  loading: PropTypes.bool,
  fetchMeals: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(MealList);
