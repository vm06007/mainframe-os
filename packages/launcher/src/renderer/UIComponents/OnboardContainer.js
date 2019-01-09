//@flow

import React, { Component } from 'react'

import styled from 'styled-components/native'
import { StyleSheet } from 'react-native-web'

// import { Text } from '@morpheus-ui/core'
import Text from '../UIComponents/Text'

import bgGraphic from '../../assets/images/onboard-background.png'

type Props = {
  children: any,
  title: string,
  description?: string,
}

const Container = styled.View`
  flex: 1;
`

const TitleContainer = styled.View`
  margin-bottom: ${props => props.theme.spacing * 4};
`

const BgGraphicContainer = styled.View`
  position: fixed;
  right: 0;
  bottom: 0;
  width: 348;
  height: 575;
`
const Content = styled.View`
  max-width: 400;
  margin-left: 100;
`

const FormContainer = styled.View`
  justify-content: center;
  flex-direction: column;
  flex: 1;
`

const BgImage = styled.Image`
  flex: 1;
`

export default class OnboardContainerView extends Component<Props> {
  render() {
    const description = this.props.description ? (
      <Text style={styles.description}>{this.props.description}</Text>
    ) : null
    return (
      <Container>
        <FormContainer>
          <Content>
            <TitleContainer>
              <Text variant="h1">{this.props.title}</Text>
              {description}
            </TitleContainer>
            {this.props.children}
          </Content>
        </FormContainer>
        <BgGraphicContainer>
          <BgImage source={bgGraphic} resizeMode="contain" />
        </BgGraphicContainer>
      </Container>
    )
  }
}

const PADDING = 10

const styles = StyleSheet.create({
  description: {
    fontSize: 14,
    paddingBottom: PADDING * 2,
  },
})
