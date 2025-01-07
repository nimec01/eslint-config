import React, { useEffect } from 'react';

type Properties = {
  name: string;
};

export default function Test({ name }: Properties) {
  useEffect(() => {
    console.log('Hello', name);
  }, []);

  return <div>Test</div>;
}
