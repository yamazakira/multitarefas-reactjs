import { Link, useNavigate } from "react-router-dom";
import { useRef, useState } from "react";
import * as S from "./menuStyle.ts";

export const Menu = () => {

    return (
        <S.MenuArea>
            <S.MenuWrapper>

                <S.MenuButton>
                    <Link to="/">Início</Link>
                </S.MenuButton>

                <S.MenuButton>
                    <Link to="/Todo">To-do</Link>
                </S.MenuButton>

                <S.MenuButton>
                    <Link to="/Calculadora">Calculadora</Link>
                </S.MenuButton>

                <S.MenuButton>
                    <Link to="/Relogio">Relógio</Link>
                </S.MenuButton>
                
            </S.MenuWrapper>
        </S.MenuArea>
    )
}