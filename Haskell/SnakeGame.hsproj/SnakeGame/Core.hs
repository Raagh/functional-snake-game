module Core where
  
type Columns = Int
type Rows = Int
type Point = (Rows, Columns)
type Apple = Point
type Snake = [Point]
type Moves = [Move]

data Move = North | South | West | East deriving (Show)

data State = State {
  apple :: Apple,
  snake :: Snake,
  moves :: Moves 
} deriving (Show)


initialSnake :: Snake
initialSnake = [(1,1)]

initialApple :: Apple
initialApple = (5,5)

initialState :: State
initialState = State initialApple initialSnake [North]

move :: State -> Move -> State
move s m = State (apple s) (snake s) [North]

