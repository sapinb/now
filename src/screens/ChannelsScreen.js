import React from 'react'
import styled from 'styled-components'

import colors, { darken } from '../constants/colors'
import { HEADER_HEIGHT_PX } from '../components/Header'
import { Link } from '../components/Link'

import images from '../assets/images'
import { media } from '../utils/style-utils'

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  padding-top: ${HEADER_HEIGHT_PX}px;
`

const CHANNEL_TAB_HEIGHT_PX = 100

const TabsContainer = styled.div`
  height: ${CHANNEL_TAB_HEIGHT_PX}px;
  width: 100vw;
  background: ${darken(colors.orange, 0.05)};

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

const TabItem = styled(Link)`
  height: 36px;
  color: ${colors.white};
  border: ${props => props.active ? 1 : 0}px solid ${colors.white};
  border-radius: 18px;
  padding: 0 24px;
  opacity: ${props => props.active ? 1 : 0.6};

  font-size: 12px;
  font-weight: bold;

  display: flex;
  align-items: center;

  &:hover {
    opacity: 1;
  }
`

const ChannelListConainer = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`

const ChannelContainer = styled.div`
  width: 50vw;
  height: calc( ( 100vh - ${HEADER_HEIGHT_PX}px - ${CHANNEL_TAB_HEIGHT_PX}px ) / 2 ) ;
  min-height: 180px;

  position: relative;
  z-index: 0; /* create a stacking context for child gradient positioning */

  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  font-size: 10px;

  padding: 2em;

  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  ${media.forPhoneOnly`
    height: calc( ( 100vh - ${HEADER_HEIGHT_PX}px - ${CHANNEL_TAB_HEIGHT_PX}px ) / 3 ) ;  
  `}

  &:before {
    content: '';
    position: absolute;
    z-index: -1;
    top: 0; bottom: 0; left: 0; right: 0;
    background: linear-gradient(0deg, rgba(0,0,0, 0.5), transparent 50%, transparent);

    ${media.forTabletOnly`
      background: linear-gradient(0deg, rgba(0,0,0, 0.5), transparent);    
    `}
  }
`

const FollowersBarContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  ${media.forPhoneOnly`
    visibility: hidden;
    height: 0;
  `}
`

const FollowersBarCount = styled.div`
  flex: 1;
  color: ${colors.white};
  font-weight: bold;
`

const FollowerBarProfileList = styled.div`
  display: flex;
  flex-direction: row;
`

const FollowersBarProfileItem = styled.div`
  width: 2em;
  height: 2em;
  border-radius: 50%;
  background-color: white;
  margin: 0 0.4em;
`

const ChannelTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: center;

  ${media.forDesktopUp`
    flex-direction: row;
    align-items: flex-end;
    justify-content: space-between;

    padding-bottom: 2em;
  `}

  ${media.forPhoneOnly`
    flex-direction: row;
    align-items: flex-end;
    justify-content: flex-start;
  `}
`

const ChannelTitleText = styled(Link)`
  color: ${colors.white};
  font-size: 3em;
  font-weight: bold;

  ${media.forPhoneOnly`
    font-size: 2em;
  `}
`

const ChannelTitleFollowing = styled.div`
  height: 3em;
  width: 10em;
  border-radius: 1.5em;
  content: '${props => props.following ? 'Following' : 'Follow'}';
  background: ${colors.white};
  color: ${colors.orange};

  margin-top: 2em;

  display: flex;
  align-items: center;
  justify-content: center;

  ${media.forPhoneOnly`
    visibility: hidden;
    width: 0;
    height: 0;
  `}
`

const ChannelTitle = ({ title, following, to }) =>
  <ChannelTitleContainer>
    <ChannelTitleText to={to}>{title}</ChannelTitleText>
    <ChannelTitleFollowing>{following ? 'Following' : 'Follow'}</ChannelTitleFollowing>
  </ChannelTitleContainer>

const FollowersBar = ({ followers }) =>
  <FollowersBarContainer>
    <FollowersBarCount>{followers} Followers</FollowersBarCount>
    <FollowerBarProfileList>
      <FollowersBarProfileItem />
      <FollowersBarProfileItem />
      <FollowersBarProfileItem />
      <FollowersBarProfileItem />
      <FollowersBarProfileItem />
    </FollowerBarProfileList>
  </FollowersBarContainer>

const channels = [
  {
    id: 1,
    title: 'Fashion',
    following: true,
    followers: '145K',
    image: images.personBack(),
  },
  {
    id: 2,
    title: 'Science',
    following: true,
    followers: '234K',
    image: images.starrySky(),
  },
  {
    id: 3,
    title: 'Auto',
    following: true,
    followers: '100K',
    image: images.cars(),
  },
  {
    id: 4,
    title: 'Technology',
    following: true,
    followers: '289K',
    image: images.seaDevice(),
  },
  {
    id: 5,
    title: 'Finance',
    following: true,
    followers: '56K',
    image: images.coins(),
  },
  {
    id: 6,
    title: 'Environment',
    following: true,
    followers: '673K',
    image: images.greenTrees(),
  },
  {
    id: 7,
    title: 'Fashion',
    following: true,
    followers: '145K',
    image: images.personBack(),
  },
  {
    id: 8,
    title: 'Science',
    following: true,
    followers: '234K',
    image: images.starrySky(),
  },
  {
    id: 9,
    title: 'Auto',
    following: true,
    followers: '100K',
    image: images.cars(),
  },
  {
    id: 10,
    title: 'Technology',
    following: true,
    followers: '289K',
    image: images.seaDevice(),
  },
  {
    id: 11,
    title: 'Finance',
    following: true,
    followers: '56K',
    image: images.coins(),
  },
  {
    id: 12,
    title: 'Environment',
    following: true,
    followers: '673K',
    image: images.greenTrees(),
  },
]

class ChannelsScreen extends React.Component {
  render () {
    return (
      <Container>
        <TabsContainer>
          <TabItem active>Following</TabItem>
          <TabItem>Popular</TabItem>
          <TabItem>Explore</TabItem>
        </TabsContainer>
        <ChannelListConainer>
          {channels.map(channel => (
            <ChannelContainer key={channel.id} image={channel.image}>
              <ChannelTitle title={channel.title} following={channel.following} to={`/channels/${channel.title}`} />
              <FollowersBar followers={channel.followers} />
            </ChannelContainer>
          ))}
        </ChannelListConainer>
      </Container>
    )
  }
}

export default ChannelsScreen
