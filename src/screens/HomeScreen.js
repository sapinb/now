import React from 'react'
import styled from 'styled-components'
import { ForDesktopUp } from '../components/MediaQuery'
import { HEADER_HEIGHT_PX } from '../components/Header'
import { FullArticle, HalfArticle } from '../components/Article'

import images from '../assets/images'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  z-index: 0;

  padding-top: ${HEADER_HEIGHT_PX}px;
`

const articles = [
  {
    image: images.seaRock(),
    title: 'Astronauts could land on Red Planet by 2039',
    source: 'SPACE.com',
    time: '20m ago',
    channel: 'SCIENCE',
    main: true,
  },
  {
    image: images.arcticIce(),
    title: 'Arctic sea ice extent hits record low for winter maximum',
    source: 'CNN',
    time: '1h ago',
    channel: 'ENVIRONMENT',
  },
  {
    image: images.phone(),
    title: 'New battery for smartphones can be charged in a minute',
    source: 'Reuters',
    time: '6h ago',
    channel: 'TECHNOLOGY',
  },
  {
    image: images.forestRacoon(),
    title: 'How wild Animals live in the National Forest',
    source: 'SPACE.com',
    time: '20m ago',
    channel: 'ENVIRONMENT',
  },
  {
    image: images.seaRock(),
    title: 'Astronauts could land on Red Planet by 2039',
    source: 'SPACE.com',
    time: '20m ago',
    channel: 'SCIENCE',
  },
  {
    image: images.arcticIce(),
    title: 'Arctic sea ice extent hits record low for winter maximum',
    source: 'CNN',
    time: '1h ago',
    channel: 'ENVIRONMENT',
    main: true,
  },
  {
    image: images.phone(),
    title: 'New battery for smartphones can be charged in a minute',
    source: 'Reuters',
    time: '6h ago',
    channel: 'TECHNOLOGY',
  },
  {
    image: images.forestRacoon(),
    title: 'How wild Animals live in the National Forest',
    source: 'SPACE.com',
    time: '20m ago',
    channel: 'ENVIRONMENT',
  },
]

class HomeScreen extends React.Component {
  _renderArticle = (article, idx) => (
    <ForDesktopUp key={idx}>
      {isDesktopUp => {
        if (isDesktopUp) {
          // only use idx
          if (idx % 4 === 1) {
            return <HalfArticle {...article} />
          }
          if (idx % 4 === 2) {
            return <HalfArticle {...article} right />
          }
          return <FullArticle {...article} />
        } else {
          // use main
          if (article.main || idx === 0) {
            return <FullArticle {...article} />
          }
          return <HalfArticle {...article} key={idx} right={idx % 2} />
        }
      }}
    </ForDesktopUp>
  )

  render () {
    return (
      <Container>
        {articles.map(this._renderArticle)}
      </Container>
    )
  }
}

export default HomeScreen
