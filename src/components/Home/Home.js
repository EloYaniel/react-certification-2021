import React, { useEffect, useState } from 'react';
import { getYoutubeMainInfoList } from '../../services/youtube';
import { CardInfo } from './CardInfo/CardInfo';
import { CardContainer, Title } from './styles';

export const Home = () => {
  const [youtubeInfoList, setYoutubeInfoList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const list = await getYoutubeMainInfoList();
      setYoutubeInfoList(list);
    };

    getList();
  }, []);

  return (
    <>
      <Title>Welcome to my first challenge!!!</Title>
      <CardContainer>
        {youtubeInfoList.map((item) => (
          <CardInfo
            key={item.id}
            title={item.title}
            description={item.description}
            imageURL={item.imageURL}
          />
        ))}
      </CardContainer>
    </>
  );
};
