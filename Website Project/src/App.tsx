import React from 'react';
import Card from "../components/Card";
import Grid from "../components/Grid";



function App() {
  const CardData = [
    {id:1, title: 'Stuff', content:'Thing thing thing', buttontext:'Book Now'},
    {id:1, title: 'Stuff', content:'Thing thing thing', buttontext:'Book Now'},
    {id:1, title: 'Stuff', content:'Thing thing thing', buttontext:'Book Now'},
  ];
  
  
  return (
    <div>
      <Grid>
        {CardData.map((card) => (
          <Card key = {card.id}</Card>
        ))}
      </Grid>
    </div>
  );
}

export default App;
