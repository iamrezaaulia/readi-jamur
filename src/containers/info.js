import React from 'react';
import benefitsData from '../fixtures/benefits.json';
import { Info } from '../components';

export default function InfoContainer() {
  return (
    <>
      <Info>
        <Info.Title> Manfaat Jamur Tiram Untuk Kesehatan </Info.Title>
        {benefitsData.map((item) => (
          <Info.Item key={item.id}>
            <Info.Text> {item.text} </Info.Text>
          </Info.Item>
        ))}
      </Info>
    </>
  );
};
