import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton: React.FC = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="140" cy="115" r="115" />
    <rect x="129" y="415" rx="5" ry="5" width="150" height="45" />
    <rect x="2" y="415" rx="5" ry="5" width="120" height="45" />
    <rect x="-2" y="300" rx="5" ry="5" width="280" height="88" />
    <rect x="0" y="250" rx="5" ry="5" width="280" height="27" />
  </ContentLoader>
);

export default Skeleton;
