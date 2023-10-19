import Base from '@layouts/Baseof';
import React from 'react';

const Card = ({ stat, label }) => (
  <div class="mt-4 w-full rounded-lg border bg-white p-4 shadow-md">
    <p class="text-2xl font-semibold text-red-500">{stat}</p>
    <p class="mt-2 text-base leading-4 text-gray-600 xl:mt-4">{label}</p>
  </div>
);

function about() {
  return (
      <Base>
      <div className="container">
        <div className="md:p-15 p-10">
          <h4 class="section-title">About Us</h4>
          <p>
            Twelfth Man Times is a news website of the parent company JTSC
            Sportsfan Private Limited that solely serves as a one-stop source
            for every sports fan in the world. Our team works every day to give
            fans an enthralling experience of connecting with their favorite
            sports or players. We publish various articles and scoops which
            greatly satiate a fan’s desire to keep himself updated with the
            latest news related to sports and discuss his favorite sports with
            like-minded people on our discussions panel, which will host online
            discussions and polls from time to time..
          </p>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:pt-4">
            <Card stat="56 million+" label="Users" />
            <Card stat="3+" label="Pages viewed / session" />
            <Card stat="2 Million +" label="Page views per month" />
            <Card stat="150000" label="Unique users every month." />
            <Card stat="3 minutes" label="Average time spent on site" />
            <Card stat="18+" label="Users in  countries" />
          </div>
        </div>
      </div>
    </Base>
  );
}

export default about;
