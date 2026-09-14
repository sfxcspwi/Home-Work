import styled from "styled-components"

function Sticker({ sticker, onStickerClick }) 
{
  return (
    <StickerItem>
      <Button onClick={() => onStickerClick(sticker.label)}>
        <Image src={sticker.img} alt={sticker.label} />
      </Button>
    </StickerItem>
  )
}

let StickerItem = styled.li`
  list-style: none;
`

let Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`

let Image = styled.img`
  width: 120px;
  height: 120px;
`

export default Sticker