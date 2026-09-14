import styled from "styled-components"

function Choice({ selectedSticker }) 
{
  return (
    <ChoiceBox>
      {selectedSticker || "Choose a sticker"}
    </ChoiceBox>
  )
}

const ChoiceBox = styled.div`
  width: 300px;
  margin: 30px auto;
  padding: 20px;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
`

export default Choice