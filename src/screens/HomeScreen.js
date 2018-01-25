import React from 'react'
import styled from 'styled-components'

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

class HomeScreen extends React.Component {
  render () {
    return (
      <Container>
        <FullArticle
          image={images.seaRock()}
          title='Astronauts could land on Red Planet by 2039'
          source='SPACE.com'
          time='20m ago'
          channel='SCIENCE'
        />
        <HalfArticle
          image={images.arcticIce()}
          title='Arctic sea ice extent hits record low for winter maximum'
          source='CNN'
          time='1h ago'
          channel='ENVIRONMENT'
          right
        />
        <HalfArticle
          image={images.phone()}
          title='New battery for smartphones can be charged in a minute'
          source='Reuters'
          time='6h ago'
          channel='TECHNOLOGY'
        />
        <FullArticle
          image={images.forestRacoon()}
          title='How wild Animals live in the National Forest'
          source='SPACE.com'
          time='20m ago'
          channel='ENVIRONMENT'
        />
        <FullArticle
          image={images.seaRock()}
          title='Astronauts could land on Red Planet by 2039'
          source='SPACE.com'
          time='20m ago'
          channel='SCIENCE'
        />
        <HalfArticle
          image={images.arcticIce()}
          title='Arctic sea ice extent hits record low for winter maximum'
          source='CNN'
          time='1h ago'
          channel='ENVIRONMENT'
          right
        />
        <HalfArticle
          image={images.phone()}
          title='New battery for smartphones can be charged in a minute'
          source='Reuters'
          time='6h ago'
          channel='TECHNOLOGY'
        />
        <FullArticle
          image={images.forestRacoon()}
          title='How wild Animals live in the National Forest'
          source='SPACE.com'
          time='20m ago'
          channel='ENVIRONMENT'
        />
      </Container>
    )
  }
}

export default HomeScreen
