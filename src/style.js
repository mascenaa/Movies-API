import styled from 'styled-components'

export const Conteiner = styled.div`
    h1 {
        text-align: center;
        margin: 5rem 0;
    }
`

export const MoveList = styled.ul`
        list-style: none;
        display: grid;

        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 3rem;
        row-gap: 4rem;
`

export const Movie = styled.li`
        display: flex;
        flex-direction: column;
        align-items: center;
        
    img {
        margin-bottom: 2rem;
        border-radius: 1rem;
        width: 200px;
    }

    span {
        color: white;
        font-weight: bold;
        font-size: 125%;
        margin-top: .5rem; 
    }
    a {
        transition: all 0.3s ;
    }

    a:hover { 
        transform: scale(1.01);
    }
`