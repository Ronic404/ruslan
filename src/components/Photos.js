/* eslint-disable react-hooks/rules-of-hooks */
import styled from 'styled-components';
import { useSelector } from 'react-redux';

import ruslan_1 from '../img/ruslan_1.jpeg';
import ruslan_2 from '../img/ruslan_2.jpeg';
import photoLena from '../img/lena.jpeg';
import roma_1 from '../img/roma_1.jpeg';
import girl from '../img/girl.jpg';

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

// ---------------------------------------------------------

export default function photos() {
  const { isAnswered, name } = useSelector(state => state);
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
} 