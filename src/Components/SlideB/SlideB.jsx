import Card from "./Card"
function SlideB(props) {
  return (
    <>
      <div className="flex flex-col items-center w-full justify-center pb-20">
        <div className="text-3xl md:6xl lg:text-7xl font-serif">
          The best of Microsoft
        </div>
        <div className="flex justify-center text-md sm:text-md pl-8 pr-8 pt-8 text-center md:text-xl lg:text-2xl">
          You get more for free when you sign in with your Microsoft account.
        </div>
      </div>
      <div className="flex justify-center items-center">
        <div className="grid md:grid-cols-2 md:grid-rows-2 sm:grid-rows-4 sm:grid-col-1 justify-center pr-0 pl-0 lg:pr-72 lg:pl-80  ">
          {props.datasb.map((el) => {
            return <Card img={el.img} name={el.name} desc={el.desc} />
          })}
        </div>
      </div>
    </>
  )
}

export default SlideB
