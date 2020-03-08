module UI where
  
import System.IO
import System.Console.ANSI
import Core

draw :: Char -> Point -> IO ()
draw char (row, col) = do
    setCursorPosition row col
    putChar char
    
renderWorld :: Char -> Char -> State -> IO ()
renderWorld s f w = do
    draw f (apple w)
    mapM_ (draw s) (reverse $ snake w)
    cursorBackward 1

drawWorld = renderWorld '@' '#'
clearWorld = renderWorld ' ' ' '