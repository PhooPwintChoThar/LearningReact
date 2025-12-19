export function MoodBoardItem ({color, image, description}){
 
  return (
    <div class="mood-board-item" style={{
      backgroundColor: color
    }}>
      <img class="mood-board-image" src={image}/>
      <h3 class="mood-board-text">{description}</h3>
    </div>
  )
}


export function MoodBoard(){
  return (<div>
  <h1 class="mood-board-heading">Destination Mood Board</h1>
  <div class="mood-board">
  <MoodBoardItem color="skyblue"  image="https://cdn.freecodecamp.org/curriculum/labs/pathway.jpg" description="Mountain"/>

  <MoodBoardItem color="lightpink"  image="https://cdn.freecodecamp.org/curriculum/labs/shore.jpg" description="Sea"/>

  <MoodBoardItem color="purple"  image="https://cdn.freecodecamp.org/curriculum/labs/grass.jpg"description="Flowers"/>
  </div>
  </div>);
}
