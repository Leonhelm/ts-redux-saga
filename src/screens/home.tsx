import React from 'react';

import img from 'images/jpg/voron.jpg';

type HomePropsType = React.HTMLProps<HTMLElement>;

const Home: React.SFC<HomePropsType> = ({ className }) => {
  const [title, setTitle] = React.useState('');

  const handleChange = React.useCallback(
    (event: React.ChangeEvent<HTMLInputElement>): void => {
      setTitle(event.target.value);
    },
    [setTitle],
  );

  return (
    <div className={className}>
      <img src={img} alt="voron-image" />

      <input value={title} onChange={handleChange} />
    </div>
  );
};

export default Home;
