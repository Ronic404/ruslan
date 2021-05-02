/* eslint-disable react-hooks/rules-of-hooks */
import { FC } from 'react';
import Loader from 'react-loader';
import styled from 'styled-components';

import { useTypedSelector } from '../hooks/useTypedSelector';
import { IPerson } from '../types/forRedux';

const Photos = styled.div`
  display: flex;
  justify-content: space-between;
`;

const DivImg = styled.div`
  position: relative;
  width: 40vw;
  height: 40vh;
`;

const Img = styled.img`
  object-fit: cover;
  display: none;
  width: 100%;
`;

const Lena = styled(Img)`
  object-position: left;
`;

interface IPhotos {
  photo: string[];
}

// ---------------------------------------------------------

const photos: FC<IPhotos> = ({ photo }) => {
  const { isAnswered, name }: IPerson = useTypedSelector(state => state.person);
  let mainPhoto: string;

  if (photo[2]) {
    mainPhoto = isAnswered ? photo[2] : photo[0];
  } else {
    mainPhoto = photo[0];
  }

  function hideLoader(e: any): void {
    const loader: HTMLElement = e.target.parentElement.children[0];
    const photo: HTMLElement = e.target;
    (loader.style.display = 'none');
    (photo.style.display = 'block');
  }

  if (name !== 'quiz') {
    return (
      <Photos>
        <DivImg>
            <Loader loaded={false}></Loader>
          <Img src={mainPhoto} onLoad={hideLoader} alt="Ruslan" />
        </DivImg>
        <DivImg>
          {isAnswered && 
            <>
              <Loader loaded={false}></Loader>
              <Lena src={photo[1]} onLoad={hideLoader} alt="Lena" />
            </>
          }
        </DivImg>
      </Photos>
    );
  } 
  return <></>;
} 

export default photos;