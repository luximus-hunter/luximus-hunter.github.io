import './style.scss';

interface props {
  children: any;
  link?: string;
  onClick?: (e?: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default ({ children, link, onClick }: props) => {
  return link ? (
    <a className='button' href={link}>
      {children}
    </a>
  ) : (
    <button className='button' onClick={onClick}>
      {children}
    </button>
  );
};
