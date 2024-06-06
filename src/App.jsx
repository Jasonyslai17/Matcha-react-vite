import React from "react"
import Card from "./components/Card.jsx"
import NavBar from "./components/NavBar.jsx"
import Hero from "./components/Hero.jsx"
import data from "./data.jsx"

export default function App(){
  const cards = data.map(item => {
    return (
      <Card
      key={item.id}
      {...item}
      />
    )
  })

  return (
    <div>
      <NavBar/>
      <Hero />
      <section className="card-list">
        {cards}
      </section>
    </div>
  )
}