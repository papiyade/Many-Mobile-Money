import React, { useEffect, useState } from 'react'
import RoutesPath from './router/RoutesPath'
import Loader from './layout/Loader';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Loader />;
  }
  return (
    <RoutesPath />
  )
}

export default App
