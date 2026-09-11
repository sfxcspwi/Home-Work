import recipes from "../recipies.json";
import styled from "styled-components";

let List = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  padding: 10px 20px;

  list-style: none;
  background: #fff8df;
`;

let Card = styled.li`
  min-width: 0;
`;

let Image = styled.img`
  display: block;
  width: 100%;
  height: 220px;

  object-fit: cover;
  border-radius: 16px;
`;

let Title = styled.h2`
  margin: 9px 0 7px;

  font-size: 12px;
  font-weight: 600;
  text-align: center;
`;

let Info = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 100%;
  height: 34px;

  background: white;
  border-radius: 20px;

  font-size: 9px;
`;

let InfoItem = styled.span`
  display: flex;
  align-items: center;
  gap: 3px;
`;

let Difficulty = styled.div`
  width: 140px;
  margin: 9px auto 0;
  padding: 9px 10px;

  background: white;
  border-radius: 16px;
`;

let DifficultyTitle = styled.p`
  margin: 0 0 7px;

  font-size: 10px;
  font-weight: 600;
`;

let DifficultyList = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
`;

let DifficultyItem = styled.span`
  padding: 5px 7px;

  border-radius: 10px;
  background: #fff8df;
  color: #555;

  font-size: 8px;
`;

let ActiveDifficultyItem = styled.span`
  padding: 5px 7px;

  border-radius: 10px;
  background: #ff6b6b;
  color: white;

  font-size: 8px;
`;

let getDifficulty = (difficulty) => 
{
    if (difficulty === 0 || difficulty === 1) 
    {
        return "Easy";
    }

    if(difficulty === 2) 
    {
        return "Medium";
    }

    return "Hard";
};

let Recipe = () => 
{
  return (
    <List>
      {recipes.map(
        ({ name, time, servings, calories, difficulty, image }) => {
          let currentDifficulty = getDifficulty(difficulty)

          return (
            <Card key={name}>
              <Image src={image} alt={name} />

              <Title>{name}</Title>

              <Info>
                <InfoItem>{time} min</InfoItem>
                <InfoItem>{servings} servings</InfoItem>
                <InfoItem>{calories} calories</InfoItem>
              </Info>

              <Difficulty>
                <DifficultyTitle>Difficulty</DifficultyTitle>

                <DifficultyList>
                  {currentDifficulty === "Easy" && (
                    <ActiveDifficultyItem>Easy</ActiveDifficultyItem>
                  )}

                  {currentDifficulty !== "Easy" && (
                    <DifficultyItem>Easy</DifficultyItem>
                  )}

                  {currentDifficulty === "Medium" && (
                    <ActiveDifficultyItem>Medium</ActiveDifficultyItem>
                  )}

                  {currentDifficulty !== "Medium" && (
                    <DifficultyItem>Medium</DifficultyItem>
                  )}

                  {currentDifficulty === "Hard" && (
                    <ActiveDifficultyItem>Hard</ActiveDifficultyItem>
                  )}

                  {currentDifficulty !== "Hard" && (
                    <DifficultyItem>Hard</DifficultyItem>
                  )}
                </DifficultyList>
              </Difficulty>
            </Card>
          )
        }
      )}
    </List>
  )
}

export default Recipe