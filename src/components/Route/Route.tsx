import { ReactNode, useEffect, useState } from 'react';

interface IProps {
  path: string;
  element: ReactNode;
}

export const Route = ({ path, element }: IProps) => {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const onChangeLocation = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener('navigate', onChangeLocation);
    window.addEventListener('popstate', onChangeLocation);

    return () => {
      window.removeEventListener('navigate', onChangeLocation);
      window.removeEventListener('popstate', onChangeLocation);
    };
  }, []);

  return currentPath === path ? <>{element}</> : null;
};
