import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreachesRequest } from '../redux/slices/breachSlice';
import { Pie } from '@ant-design/charts';
import { Spin } from 'antd';

const PieChartsPage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.breaches);

  useEffect(() => {
    dispatch(fetchBreachesRequest());
  }, [dispatch]);

  if (loading) return <Spin />;
  if (error) return <p>Error: {error}</p>;

  const categoryData = data.reduce((acc, item) => {
    const category = acc.find(c => c.type === item.category);
    if (category) {
      category.value += 1;
    } else {
      acc.push({ type: item.category, value: 1 });
    }
    return acc;
  }, []);

  const userData = data.reduce((acc, item) => {
    const user = acc.find(u => u.type === item.user);
    if (user) {
      user.value += 1;
    } else {
      acc.push({ type: item.user, value: 1 });
    }
    return acc;
  }, []);

  return (
    <div>
      <Pie data={categoryData} angleField="value" colorField="type" />
      <Pie data={userData} angleField="value" colorField="type" />
    </div>
  );
};

export default PieChartsPage;
