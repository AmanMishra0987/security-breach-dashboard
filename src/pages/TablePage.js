import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBreachesRequest } from '../redux/slices/breachSlice';
import { Table, Spin,Button } from 'antd';
import { useNavigate } from 'react-router-dom';


const TablePage = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector(state => state.breaches);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchBreachesRequest());
  }, [dispatch]);

  if (loading) return <Spin />;
  if (error) return <p>Error: {error}</p>;

  const transformedData = data.map(item => {
    const [date, time] = item.timestamp.replace('Z', '').split('T');
    return {
      ...item,
      date,     // Add date field
      time,     // Add time field
    };
  });

  const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'User', dataIndex: 'user', key: 'user' },
    { title: 'Category', dataIndex: 'category', key: 'category' },
    { title: 'Date', dataIndex: 'date', key: 'date' },
    { title: 'Time', dataIndex: 'time', key: 'time' },
  ];
  const redirectToPieCharts = () => {
    navigate('/charts');
  };

  return (
    <div>
      <Button type="primary" onClick={redirectToPieCharts} style={{ marginBottom: '16px' }}>
        View Pie Charts
      </Button>
      <Table dataSource={transformedData} columns={columns} rowKey="id" />
    </div>
  );
};

export default TablePage;
