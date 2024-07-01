import styled from "styled-components";
import { MdTune } from "react-icons/md";
import ToiletListItem from "./ToiletListItem";
import { useState } from "react";
import ToiletDetail from "./ToiletDetail";

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  font-size: 14px;
  border-radius: 16px;
  border: 1px solid #3e4958;
  background-color: white;
  color: #3e4958;
  font-weight: 600;
  &:hover {
    background-color: #3e4958;
    color: white;
  }
`;

const StyledMdTune = styled(MdTune)`
  width: 30px;
  height: 30px;
  color: white;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
`;

function ToiletList(props) {
  const { closestToiletLocations } = props;
  const [detailView, setDetailView] = useState(false);
  const [detailViewKey, setDetailViewKey] = useState(null);

  return (
    <>
      {detailView ? (
        <ToiletDetail 
          closestToiletLocations={closestToiletLocations}
          detailViewKey={detailViewKey}
        />
      ) : (
        <>
          <ButtonContainer>
            <ToggleButton>주유소</ToggleButton>
            <ToggleButton>대형 까페</ToggleButton>
            <ToggleButton>사용자 등록 화장실</ToggleButton>
            <StyledMdTune />
          </ButtonContainer>
          <ListContainer>
            {closestToiletLocations.map((toiletLocation) => {
              return (
                <ToiletListItem
                  key={toiletLocation.POI_ID}
                  toiletLocation={toiletLocation}
                  setDetailView={setDetailView}
                  setDetailViewKey={setDetailViewKey}
                />
              );
            })}
          </ListContainer>
        </>
      )}
    </>
  );
}

export default ToiletList;