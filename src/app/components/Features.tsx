import React from "react";
import { FeatureType } from "../../../types/featureType";
import Image from "next/image";
interface FeaturesProps {
  features: FeatureType[];
}
const Features = ({ features }: FeaturesProps) => {
  return (
    <div id="features" className="mx-8">
      <div>
        <h1 className="feature_title text-center my-8 text-2xl md:text-4xl font-bold text-gray-600">
          🌏Explore Few Wonderful Place
        </h1>
      </div>

      <div className="feature_container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-0">
        {features.map((feature, index) => (
          <div
            key={index}
            className="feature_card flex flex-col items-center border rounded-lg p-4 shadow-md"
          >
            <Image
              src={feature.image}
              alt={feature.title}
              className="feature_image rounded-md"
              width={300}
              height={200}
            />
            <h2 className="feature_name text-lg font-semibold mt-4 text-center">
              {feature.title}
            </h2>
            <p className="feature_description text-sm text-gray-600 mt-2 text-center">
              {feature.description}
            </p>
            <p className="feature_location text-sm text-gray-500 mt-2 text-end">
              {feature.location}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
