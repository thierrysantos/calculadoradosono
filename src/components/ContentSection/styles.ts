import styled from 'styled-components';
import media from 'styled-media-query';

import { IProps } from '.';

const titleSizeValues = {
  s: '2.2rem',
  m: '2.4rem',
  g: '2.6rem',
};

export const Content = styled.div<
  Pick<IProps, 'titleAlign'> & Pick<IProps, 'titleSize'>
>`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  h2 {
    color: ${({ theme }) => theme.colors.primary.main};
    font-size: ${({ titleSize }) =>
      titleSizeValues[titleSize] || titleSizeValues.m};
    margin-bottom: ${({ theme }) => theme.spacing(4)};
    text-align: ${({ titleAlign }) => titleAlign || 'left'};
  }

  p {
    text-align: justify;
    color: ${({ theme }) => theme.colors.secondary.main};
    font-size: 1.6rem;
  }

  p + p {
    margin-top: ${({ theme }) => theme.spacing(3)};
  }

  ${media.lessThan('medium')`
    h2 {
      font-size: 2rem;
    }
  `}
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    max-height: 28rem;
    height: 100%;
    border-radius: 50%;
  }

  a {
    font-size: 1.2rem;
    margin-top: ${({ theme }) => theme.spacing(2)};
  }

  ${media.lessThan('medium')`
    img {
      max-height: 20rem;
    }
  `}
`;

export const Container = styled.div<
  Pick<IProps, 'invert'> & Pick<IProps, 'fullWidth'>
>`
  display: grid;

  grid-template-columns: ${({ fullWidth }) =>
    fullWidth ? '1fr' : 'repeat(2, 1fr)'};
  grid-column-gap: ${({ theme }) => theme.spacing(4)};

  ${media.lessThan('medium')`
    grid-template-columns: repeat(1, 1fr);
    grid-row-gap: ${({ theme }) => theme.spacing(2)};
  `}
`;
