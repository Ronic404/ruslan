/* eslint-disable react-hooks/rules-of-hooks */
import { FC } from 'react';
import styled from 'styled-components';

import ruslan_1 from '../img/ruslan_1.jpeg';
import ruslan_2 from '../img/ruslan_2.jpeg';
import photoLena from '../img/lena.jpeg';
import roma_1 from '../img/roma_1.jpeg';
import girl from '../img/girl.jpg';

import { useTypedSelector } from '../hooks/useTypedSelector';

// ---------------------------------------------------------

const Photos = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Img = styled.img`
  width: 40vw;
  height: 40vh;
  object-fit: cover;
`;

const Lena = styled(Img)`
  object-position: left;
`;

interface IPhotos {
  isAnswered: boolean;
  name: string | null;
}

// ---------------------------------------------------------

const photos: FC = () => {
  const { isAnswered, name }: IPhotos = useTypedSelector(state => state);
  const photoRuslana = isAnswered ? ruslan_2 : ruslan_1;

  if (name === 'ruslan') {
    return (
      <Photos>
        <Img src={photoRuslana} alt="Ruslan" />
        {isAnswered && <Lena src={photoLena} alt="Lena" />}
      </Photos>
    );
  } else if (name === 'roma') {
    return (
      <Photos>
        <Img src={roma_1} alt="Roma" />
        {isAnswered && <Img src={girl} alt="Girl" />}
      </Photos>
    );
  }

  return <></>;
} 

export default photos;