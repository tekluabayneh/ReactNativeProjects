import { ChangeEvent, useState } from "react"

export const Input = () => {
  return (
    <>
      <label htmlFor="pokemon">Name or ID of a Pokemon</label>
      <input type="text" id="pokemon" placeholder="Example: Pikachu" />
    </>
  )
}
