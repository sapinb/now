import React from 'react'
import styled from 'styled-components'

import { HEADER_HEIGHT_PX } from '../components/Header'
import { ArticleSourceIcon, ArticleTimeIcon } from '../assets/icons'

import images from '../assets/images'
import { media } from '../utils/style-utils'
import colors from '../constants/colors'
import { Link } from '../components/Link'

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;

  padding-top: ${HEADER_HEIGHT_PX}px;
`

const ChannelTitleContainer = styled.div`
  height: 400px;
  width: 100vw;

  flex-shrink: 0;

  position: relative;
  z-index: 0; /* create a stacking context for child gradient positioning */

  display: flex;
  flex-direction: column;

  font-size: 10px;

  padding: 2em;

  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  &:before {
    content: '';
    position: absolute;
    top: 0; bottom: 0; left: 0; right: 0;
    background-color: rgba(0,0,0, 0.25);
  }

  ${media.forPhoneOnly`
    height: 200px;
  `}
`

const ArticleListContainer = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ArticleContainer = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  flex-direction: column;

  ${media.forTabletUp`
    width: 50vw;
  `}

  ${media.forDesktopUp`
    width: 25vw;
  `}

  ${media.forPhoneOnly`
    height: auto;
    border-bottom: 1px solid rgba(0,0,0,0.25);
  `}
`

const ArticleTextContainer = styled.div`
  background-color: ${colors.white};
  height: 50%;

  display: flex;
  flex-direction: column;

  font-size: 10px;
  padding: 2em;

  ${media.forPhoneOnly`
    height: auto;
  `}
`

const ArticleTitle = styled(Link)`
  flex: 1;
  font-size: 2em;
  font-weight: bold;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${media.forPhoneOnly`
    align-items: flex-start;
    text-align: left;
  `}
`

const ArticleImage = styled.div`
  height: 50%;
  width: 100%;
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${props => props.top ? 'flex-start' : 'flex-end'};

  &:before {
    content: '';
    width: 0; height: 0;
    border: 10px solid transparent;
    ${props => props.top ? 'border-top-color: white;' : 'border-bottom-color: white'}    
  }

  ${media.forPhoneOnly`
    visibility: hidden;
    height: 0;
  `}
`

const ArticleTagsContaner = styled.div`
  display: flex;
  justify-content: space-between;
  height: 2em;
  z-index: 1;
  margin-top: 2em;
  color: ${colors.black};

  ${media.forPhoneOnly`
    justify-content: flex-start;
  `}
`

const ArticleTagContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ArticleTagText = styled.div`
  font-size: 1em;
  padding: 0 2em 0 0.5em;
`

const ArticleSourceTag = ({ source, dark }) =>
  <ArticleTagContainer>
    <ArticleSourceIcon color='rgba(0,0,0, 0.6)' />
    <ArticleTagText>{source}</ArticleTagText>
  </ArticleTagContainer>

const ArticleTimeTag = ({ time, dark }) =>
  <ArticleTagContainer>
    <ArticleTimeIcon color='rgba(0,0,0, 0.6)' />
    <ArticleTagText>{time}</ArticleTagText>
  </ArticleTagContainer>

const Article = ({ image, title, source, time, top }) =>
  <ArticleContainer>
    {!top && (
      <ArticleImage image={image} />
    )}
    <ArticleTextContainer>
      <ArticleTitle>{title}</ArticleTitle>
      <ArticleTagsContaner>
        <ArticleSourceTag source={source} />
        <ArticleTimeTag time={time} />
      </ArticleTagsContaner>
    </ArticleTextContainer>
    {top && (
      <ArticleImage image={image} top />
    )}
  </ArticleContainer>

const articles = [
  {
    id: 1,
    title: 'Astronauts could land on Red Planet by 2039',
    source: 'SPACE.com',
    time: 'Apr 5, 2015',
    image: images.seaRock(),
  },
  {
    id: 2,
    title: 'Archeologists discovered lost city in Honduran jungle',
    source: 'CNN',
    time: 'Apr 3, 2015',
    image: images.jungleMountains(),
  },
  {
    id: 3,
    title: 'The balloons that could fly tourists to the edge of space',
    source: 'CNN',
    time: 'Apr 1, 2015',
    image: images.spaceBalloon(),
  },
  {
    id: 4,
    title: 'Magma expanse under Yellowstone',
    source: 'National Geographic',
    time: 'Apr 1, 2015',
    image: images.magmaYellowstone(),
  },
  {
    id: 5,
    title: 'Astronauts could land on Red Planet by 2039',
    source: 'SPACE.com',
    time: 'Apr 5, 2015',
    image: images.seaRock(),
  },
  {
    id: 6,
    title: 'Archeologists discovered lost city in Honduran jungle',
    source: 'CNN',
    time: 'Apr 3, 2015',
    image: images.jungleMountains(),
  },
  {
    id: 7,
    title: 'The balloons that could fly tourists to the edge of space',
    source: 'CNN',
    time: 'Apr 1, 2015',
    image: images.spaceBalloon(),
  },
  {
    id: 8,
    title: 'Magma expanse under Yellowstone',
    source: 'National Geographic',
    time: 'Apr 1, 2015',
    image: images.magmaYellowstone(),
  },
]

class ChannelStoriesScreen extends React.Component {
  render () {
    return (
      <Container>
        <ChannelTitleContainer image={images.starrySky()} />
        <ArticleListContainer>
          {articles.map((article, idx) => (
            <Article key={article.id} {...article} top={idx % 2 === 0} />
          ))}
        </ArticleListContainer>
      </Container>
    )
  }
}

export default ChannelStoriesScreen
