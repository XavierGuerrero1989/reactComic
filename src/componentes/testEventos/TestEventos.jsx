import React from 'react'

export const TestEventos = () => {

    function handleOnChange (e) {
        switch (e.key) {
            case "a":
                e.preventDefault();
                break;
            case "e":
                e.preventDefault();
                break;
            case "i":
                e.preventDefault();
                break;
            case "o":
                e.preventDefault();
                break;
            case "u":
                e.preventDefault();
                break;
            default:
                // nada
                break;
        }
    }

  return (
    <div>
        <input onChange={handleOnChange}></input>
    </div>
  )
}
