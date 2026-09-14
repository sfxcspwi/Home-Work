import Sticker from "./Sticker"
import stickers from "../stickers.json"
import styled from "styled-components"

function StickerList({ onStickerClick }) 
{
  return (
    <List>
      {stickers.map((sticker) => (
        <Sticker
          key={sticker.label}
          sticker={sticker}
          onStickerClick={onStickerClick}
        />
      ))}
    </List>
  )
}

const List = styled.ul`
  display: flex;
  gap: 20px;
  padding: 0;
`

export default StickerList