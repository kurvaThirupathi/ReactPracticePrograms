import React,{useState} from "react";

const TicTac = () =>{
    const [board,setBoard]=useState(Array(9).fill(null));
    const [isNext, setIsNext ] = useState(true);

    const calculateWinner=(board)=>{
        const lines = [
            [0,1,2],
            [0,3,6],
            [0,4,8],
            [1,4,7],
            [2,5,8],
            [2,4,6],
            [3,4,5],
            [6,7,8]
        ];
        const winner = lines.map(([a, b ,c]) => {
            if(board[a] && board[a] === board[b] && board[a] === board[c]){
                return board[a]
            }
            return null

        }).find(result => result)
            return winner || null
        
    }
    

    const handleClick=(index)=>{
        if(board[index] || winner) return
        const newBoard=[...board]
        newBoard[index]= isNext ? "X" : "O"
        setBoard(newBoard)
        setIsNext(!isNext)

    }
    const winner = calculateWinner(board);

        const resetProgram=()=>{
            setBoard(Array(9).fill(null))
            setIsNext(true)
        }
        const isDraw= !winner && board.every((ceil)=>{
            return ceil !==null
    })
    return (
        <>
        <div className="h-screen m-auto bg-gray-300">
            <div className="w-1/4 mx-auto">

           
            <div className="grid grid-cols-3">
                {
                   board.map((ceil,index)=>{
                    return <button  onClick={()=>{handleClick(index)}} key={index} type="button" className="cursor-pointer border border-solid border-gray-500 h-20 w-20 m-1 p-3 mx-auto">{ceil}</button>
                   }) 
                }
                <button className="border  rounded-lg border-solid border-gray-600 text-center mx-auto col-span-3 px-4 mt-3 bg-blue-600 text-white cursor-pointer" onClick={()=>resetProgram()}>Reset</button>
            </div>
             </div>
             {
                winner && <p>winner :{winner}</p>
             }
             {
                isDraw && <p>It is Draw</p>
             }


        </div>
        </>
    )
}

export default TicTac