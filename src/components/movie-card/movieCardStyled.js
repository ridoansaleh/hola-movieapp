import styled from '@emotion/styled'

export const Wrapper = styled.div`
    min-height: 340px;
    min-width: 200px;
    border: 1px solid #000;
    border-radius: 8px;
    padding: 10px;
    cursor: pointer;
    color: #000;
    &:hover {
        border: 1px solid #28c2f7;
        border-radius: 0;
    }
`

export const Img = styled.img`
    height: 260px;
    width: 100%;
`

export const Title = styled.span`
    display: block;
    font-weight: bold;
    margin-top: 10px;
`

export const Detail = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
`
