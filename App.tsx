import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Linking } from 'react-native';
import {
  Container,
  Titulo,
  ButtonPlayer,
  ContainerImgRadio,
  ContainerRadio,
  Line,
  ContainerButton,
  ContainerDescRadio,
  ContainerText,
  Subtitulo,
  ContainerHeader,
} from './styles';
import { WebView, WebViewMessageEvent } from 'react-native-webview';

export default function App() {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    // Toggle the state directly without handling sound logic
    setIsPlaying(!isPlaying);
  };
  return (
    <Container>
      <ContainerHeader>
        <Text>PlusAPP</Text>
      </ContainerHeader>

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio></ContainerImgRadio>
          <ContainerText>
            <Titulo>Aracati</Titulo>
            <Subtitulo>98.1</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio></ContainerImgRadio>
          <ContainerText>
            <Titulo>Cariri</Titulo>
            <Subtitulo>100.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ContainerButton>
          <ButtonPlayer onPress={togglePlay}>
            {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
          </ButtonPlayer>
        </ContainerButton>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio></ContainerImgRadio>
          <ContainerText>
            <Titulo>Crateús</Titulo>
            <Subtitulo>93.3</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio></ContainerImgRadio>
          <ContainerText>
            <Titulo>Iguatú/Cariiús</Titulo>
            <Subtitulo>91.5</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio></ContainerImgRadio>
          <ContainerText>
            <Titulo>Paraipaba</Titulo>
            <Subtitulo>88.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />

      <ContainerRadio>
        <ContainerDescRadio>
          <ContainerImgRadio></ContainerImgRadio>
          <ContainerText>
            <Titulo>Redenção</Titulo>
            <Subtitulo>98.7</Subtitulo>
          </ContainerText>
        </ContainerDescRadio>
        <ButtonPlayer onPress={togglePlay}>
          {isPlaying ? <Text> Ouvir </Text> : <Text>Parar </Text>}
        </ButtonPlayer>
      </ContainerRadio>

      <Line />
      <StatusBar style="auto" />
    </Container>
  );
}
