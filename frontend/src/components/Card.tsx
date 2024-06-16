

function Card(prop:any) {
  return (
    <div className="bg-black text-white w-1/2 m-8  rounded-md ">
      <h1>{prop.result}</h1>
    </div>
  )
}

export default Card