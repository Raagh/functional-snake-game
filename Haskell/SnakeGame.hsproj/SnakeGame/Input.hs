module Input where
  
import Core
  
data Action = Up
           | Down
           | Left
           | Right
           | Exit
           deriving (Eq)
           
readInput = do
  char <- getChar
  case char of
    'q' -> return Exit
    'w' -> return Up
    's' -> return Down
    'a' -> return Input.Left
    'd' -> return Input.Right
    _ -> readInput
    
translateInputToMove input = 
    case input of
    Up -> return North
    Down -> return South
    Input.Left -> return West
    Input.Right -> return East
