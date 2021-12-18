import logoImg from '../../assets/Logo.svg';
import { Container, Content } from './styles';
import Modal from 'react-modal';
import { useState } from 'react';

interface HeaderProps {
  onOpenNewTransitionModal: () => void;
}

export function Header({ onOpenNewTransitionModal }: HeaderProps) {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="dtmoney" />
        <button type="button" onClick={onOpenNewTransitionModal}>
          Nova transação
        </button>
      </Content>
    </Container>
  );
}
