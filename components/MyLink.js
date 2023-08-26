import React from 'react';
import { useRouter } from 'next/router';

const MyLink = ({ children, href, ...props }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation(); // Incase of parent
    router.push(href);
  };

  return (
    <a onClick={handleClick} href={href} {...props}>
      {children}
    </a>
  );
};

export default MyLink;
