
function superbowlWin(array){
    let found = array.find(obj => 
        obj.result === "W"
    )
    return found ? found.year : undefined
}