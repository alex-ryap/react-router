import { MouseEvent, PropsWithChildren } from 'react';

interface IProps {
  to: string;
}

export const Link = ({ to, children }: PropsWithChildren<IProps>) => {
  const preventReload = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    window.history.pushState({}, '', to);
    const navigationEvent = new PopStateEvent('navigate');
    window.dispatchEvent(navigationEvent);
  };

  return (
    <a href={to} onClick={preventReload}>
      {children}
    </a>
  );
};
