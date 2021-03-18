import React, { useContext, useEffect, useState } from 'react';
import { Context as SearchContext } from '../../contexts/SearchContext';
import { getYoutubeMainInfoList } from '../../services/youtube';
import { CardInfo } from './CardInfo/CardInfo';
import { CardContainer, Title } from './styles';

export const Home = ({ handleViewMore }) => {
  const {
    state: { searchText },
  } = useContext(SearchContext);
  const [youtubeInfoList, setYoutubeInfoList] = useState([]);

  useEffect(() => {
    const getList = async () => {
      const list = await getYoutubeMainInfoList(searchText);
      setYoutubeInfoList(list);
    };

    getList();
  }, [searchText]);

  return (
    <>
      <Title>Welcome to my challenge 3!!!</Title>
      <CardContainer>
        {youtubeInfoList.map((item) => (
          <CardInfo
            key={item.id}
            title={item.title}
            description={item.description}
            imageURL={item.imageURL}
            handleViewMore={() => handleViewMore(item.id)}
          />
        ))}
      </CardContainer>
    </>
  );
};
