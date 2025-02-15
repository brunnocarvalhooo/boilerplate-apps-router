import * as S from "./styles"

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJS, NextJS e Styled-Components'
}) => {
  return (
    <S.Wrapper>
      <S.Title>{title}</S.Title>
      <S.Description>{description}</S.Description>
    </S.Wrapper>
  )
}

export default Main
