import React from "react";
import * as S from "./styles";
import { useAppSafeArea } from "../../hooks/useAppSafeArea";

type ScreenProps = {
  children: React.ReactNode;
};

export function Screen({ children }: ScreenProps) {
  const { top } = useAppSafeArea();
  return (
    <S.Container
      style={{
        paddingTop: top,
      }}
    >
      {children}
    </S.Container>
  );
}
