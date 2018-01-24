import React from 'react'
import styled from 'styled-components'

import { media } from '../utils/style-utils'
import { Link } from '../components/Link'

import { ArticleSourceIcon, ArticleTimeIcon } from '../assets/icons'

const FullArticleContainer = styled.div`
  font-size: 10px;

  height: 50vh;
  min-height: 300px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  padding: 2em 4em;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  ${media.forDesktopUp`
    width: 50%;
  `}

  ${media.forPhoneOnly`
    padding: 2em 2em;
  `}
  position: relative;
`

const GradientOverlay = styled.div`
  position: absolute;
  top: 0; bottom: 0; left: 0; right: 0;
  background: linear-gradient(0deg, rgba(0,0,0, 0.5), transparent 25%, transparent);
`

const FullArticleTitle = styled(Link)`
  font-size: 3.3em;
  font-weight: bold;
  color: white;
  z-index: 1;

  ${media.forPhoneOnly`
    font-size: 2em;
  `}
`

const ArticleTagsContaner = styled.div`
  display: flex;
  height: 2em;
  z-index: 1;
  margin-top: 2em;
`

const ArticleTagContainer = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const ArticleTagText = styled.div`
  font-size: 1em;
  color: ${props => props.dark ? 'black' : 'white'};
  padding: 0 2em 0 0.5em;
`

const ArticleSourceTag = ({ source, dark }) =>
  <ArticleTagContainer>
    <ArticleSourceIcon color={dark ? 'rgba(0,0,0, 0.6)' : 'rgba(255,255,255, 0.6)'} />
    <ArticleTagText dark={dark} >{source}</ArticleTagText>
  </ArticleTagContainer>

const ArticleTimeTag = ({ time, dark }) =>
  <ArticleTagContainer>
    <ArticleTimeIcon color={dark ? 'rgba(0,0,0, 0.6)' : 'rgba(255,255,255, 0.6)'} />
    <ArticleTagText dark={dark} >{time}</ArticleTagText>
  </ArticleTagContainer>

const ArticleChannelTag = styled(Link)`
  font-size: 1em;
  color: ${props => props.dark ? 'black' : 'white'};
  border-bottom: 1px solid ${props => props.dark ? 'black' : 'white'};
  height: 2em;
`

const ArticleTagSpacer = styled.div`
  flex: 1;
`

export const FullArticle = ({ image, title, channel, source, time }) =>
  <FullArticleContainer image={image}>
    <GradientOverlay />
    <FullArticleTitle>{title}</FullArticleTitle>
    <ArticleTagsContaner>
      <ArticleSourceTag source={source} />
      <ArticleTimeTag time={time} />
      <ArticleTagSpacer />
      <ArticleChannelTag>{channel}</ArticleChannelTag>
    </ArticleTagsContaner>
  </FullArticleContainer>

const HalfArticleContainer = styled.div`
  font-size: 10px;

  height: 25vh;
  min-height: 30em;
  width: 100%;
  display: flex;
  flex-direction: row;

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  ${media.forDesktopUp`
    height: 50vh;
    width: 50%;
  `}

  ${media.forPhoneOnly`
    min-height: 10em;
    border-bottom: 1px solid rgba(0,0,0,0.25);
  `}
`

const HalfArticleImageBg = styled.div`
  width: 50%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: ${props => props.right ? 'flex-start' : 'flex-end'};

  background-image: url(${props => props.image});
  background-size: cover;
  background-position: center;

  ${media.forPhoneOnly`
    visibility: hidden;
    width: 0;
  `}
`

const HalfArticleTextContainer = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: white;

  padding: 2em 3em;

  ${media.forPhoneOnly`
    width: 100%;
    padding: 2em 2em;
  `}  
`

const HalfArticleTitleContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 1em;

  ${media.forPhoneOnly`
    justify-content: flex-end;
    text-align: left;
    padding: 0;
  `}
`

const HalfArticleTitle = styled(Link)`
  font-size: 2.4em;
  line-height: 1.6em;
  font-weight: bold;
  text-align: center;
  color: black;

  ${media.forPhoneOnly`
    font-size: 2em;
    line-height: initial;
    text-align: left;
  `}
`

const Triangle = styled.div`
  width: 0; height: 0;
  border: 10px solid transparent;
  ${props => props.right ? 'border-left-color: white;' : 'border-right-color: white'}
`

export const HalfArticle = ({ image, title, channel, source, time, right = false }) =>
  <HalfArticleContainer>
    {!right && (
      <HalfArticleImageBg image={image}>
        <Triangle />
      </HalfArticleImageBg>
    )}
    <HalfArticleTextContainer>
      <HalfArticleTitleContainer>
        <HalfArticleTitle>{title}</HalfArticleTitle>
      </HalfArticleTitleContainer>
      <ArticleTagsContaner>
        <ArticleSourceTag dark source={source} />
        <ArticleTimeTag dark time={time} />
        <ArticleTagSpacer />
        <ArticleChannelTag dark>{channel}</ArticleChannelTag>
      </ArticleTagsContaner>
    </HalfArticleTextContainer>
    {right && (
      <HalfArticleImageBg image={image} right>
        <Triangle right />
      </HalfArticleImageBg>
    )}
  </HalfArticleContainer>
