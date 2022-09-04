import styled from "@emotion/styled";

export const DetailWrapper = styled.section`
  margin-top: 40px;
  min-height: 300px;
  display: flex;
  flex-direction: column;

  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const MovieImg = styled.img`
  height: 500px;
  width: 100%;
  max-width: 500px;
`;

export const MovieImgSkeleton = styled.div`
  height: 500px;
  width: 100%;
  max-width: 500px;
  background-color: #e3e6e7;
`;

export const MovieDetail = styled.div`
  box-sizing: border-box;
  height: 100%;
  width: 100%;

  @media only screen and (min-width: 768px) {
    padding-left: 20px;
  }
`;

export const MovieTitleSkeleton = styled.div`
  height: 39px;
  padding: 22px 0;
  background-color: #e3e6e7;
`;

export const Genre = styled.span`
  border: 1px solid #000;
  padding: 5px 15px;
  border-radius: 20px;
  margin-right: 10px;
`;

export const GenreWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const GenreSkeleton = styled.div`
  width: 92px;
  height: 31px;
  border-radius: 20px;
  margin-right: 10px;
  background-color: #e3e6e7;
`;

export const PlotSkeleton = styled.div`
  background-color: #e3e6e7;
  height: 40px;
  margin: 20px 0;
`;

export const Item = styled.div`
  padding: 8px 0px;
  border-bottom: ${(props) => (props.line ? "0.6px solid #000" : "0")};
`;

export const ItemSkeleton = styled.div`
  height: 35px;
  display: flex;
  margin-bottom: 10px;
`;

export const ItemKeySkeleton = styled.div`
  height: 100%;
  width: 80px;
  background-color: #e3e6e7;
  margin-right: 20px;
`;

export const ItemValueSkeleton = styled.div`
  height: 100%;
  width: 150px;
  width: ${(props) => props.width + "px"};
  max-width: 150px;
  background-color: #e3e6e7;
`;

export const Bold = styled.span`
  font-weight: bold;
`;

export const Rating = styled.img`
  height: 18px;
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const Button = styled.button`
  min-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  cursor: pointer;
  font-size: 16px;
`;

export const ButtonSkeleton = styled.div`
  min-width: 160px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  background-color: #e3e6e7;
  height: 40px;
`;
